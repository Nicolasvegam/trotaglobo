import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface SelectableTripCardProps {
  title: string;
  description: string;
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

export function SelectableTripCard({
  title,
  description,
  image,
  isSelected,
  onClick,
}: SelectableTripCardProps) {
  return (
    <Card
      className={cn(
        "relative cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-md",
        isSelected && "ring-2 ring-primary ring-offset-2"
      )}
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
        {isSelected && (
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <div className="bg-primary text-primary-foreground rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Card>
  );
} 