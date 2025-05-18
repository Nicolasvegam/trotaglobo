import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SelectableTripCard } from "./SelectableTripCard";
import { useSession } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTrip } from "@/lib/commands/create-trip";
import { CreateTripDto } from "@/lib/dtos/create-trip.dto";
import { SAMPLE_TRIPS } from "@/lib/constants/sample-trips";
import { Search, Wand2, PenLine } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ManualTripForm } from "./ManualTripForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AddTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CreationMode = "template" | "manual";

export function AddTripModal({ isOpen, onClose }: AddTripModalProps) {
  const [selectedTemplates, setSelectedTemplates] = useState<CreateTripDto[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mode, setMode] = useState<CreationMode>("template");
  const { session } = useSession();
  const queryClient = useQueryClient();

  const filteredTemplates = useMemo(() => {
    return SAMPLE_TRIPS.filter(template => 
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.trip_tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      template.trip_cities.some(city => 
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const { mutate: createTripsMutation, isPending } = useMutation({
    mutationFn: async (data: CreateTripDto[]) => {
      if (!session) throw new Error("No session");
      const token = await session.getToken();
      if (!token) throw new Error("No token");
      
      const results = [];
      for (const trip of data) {
        const result = await createTrip(token, trip);
        results.push(result);
      }
      return results;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      alert(`${selectedTemplates.length} trips created successfully!`);
      onClose();
      setSelectedTemplates([]);
    },
    onError: (error) => {
      alert(error.message || "Failed to create trips");
    }
  });

  const getTripDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return `${days} days`;
  };

  const toggleTemplateSelection = (template: CreateTripDto) => {
    setSelectedTemplates(prev => {
      const isSelected = prev.some(t => t === template);
      if (isSelected) {
        return prev.filter(t => t !== template);
      } else {
        return [...prev, template];
      }
    });
  };

  const handleManualSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["trips"] });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] sm:w-full max-h-[100vh] p-4 sm:p-6">
        <DialogHeader className="px-2 sm:px-0">
          <DialogTitle className="text-xl sm:text-2xl">Create New Trip</DialogTitle>
        </DialogHeader>

        <Tabs 
          defaultValue="template" 
          value={mode} 
          onValueChange={(value) => setMode(value as CreationMode)}
          className="mt-4"
        >
          <TabsList className="grid w-full grid-cols-2 h-12 sm:h-10">
            <TabsTrigger value="template" className="flex items-center gap-2 text-sm sm:text-base">
              <Wand2 className="h-4 w-4" />
              <span className="hidden sm:inline">From Template</span>
              <span className="sm:hidden">Template</span>
            </TabsTrigger>
            <TabsTrigger value="manual" className="flex items-center gap-2 text-sm sm:text-base">
              <PenLine className="h-4 w-4" />
              <span className="hidden sm:inline">Manual Creation</span>
              <span className="sm:hidden">Manual</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="template" className="space-y-4 sm:space-y-6 mt-4">
            <div className="relative px-2 sm:px-0">
              <Search className="absolute left-5 sm:left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 sm:pl-9 h-12 sm:h-10 text-base"
              />
            </div>

            <div className="flex items-center justify-between px-4">
              <div className="text-sm text-muted-foreground">
                {selectedTemplates.length} trips selected
              </div>
              {selectedTemplates.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTemplates([])}
                  className="h-9 px-3 text-sm"
                >
                  Clear selection
                </Button>
              )}
            </div>

            <ScrollArea className="h-[calc(80vh-280px)] sm:h-[calc(80vh-200px)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-2 sm:p-4">
                {filteredTemplates.map((template, index) => {
                  const isSelected = selectedTemplates.includes(template);
                  return (
                    <div key={index} className="relative group">
                      <SelectableTripCard
                        title={template.title}
                        description={template.description}
                        image={template.cover_image}
                        isSelected={isSelected}
                        onClick={() => toggleTemplateSelection(template)}
                      />
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/60 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {getTripDuration(template.start_date, template.end_date)}
                      </div>
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/60 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {template.trip_cities.length} cities
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            <div className="flex justify-end gap-3 sm:space-x-4 p-4 bg-muted/50 rounded-b-lg mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="h-12 sm:h-10 px-6 text-base"
              >
                Cancel
              </Button>
              <Button
                type="button"
                disabled={selectedTemplates.length === 0 || isPending}
                onClick={() => createTripsMutation(selectedTemplates)}
                className="h-12 sm:h-10 px-6 text-base"
              >
                {isPending ? "Creating..." : `Create ${selectedTemplates.length} Trip${selectedTemplates.length === 1 ? '' : 's'}`}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="manual">
            <ScrollArea className="h-[calc(90vh-280px)] sm:h-[calc(90vh-200px)]">
              <ManualTripForm onSuccess={handleManualSuccess} onCancel={onClose} />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
} 