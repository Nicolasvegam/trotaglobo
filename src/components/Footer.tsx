import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-8 mt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-neutral-500 text-sm mb-2">
            Created by <a href="https://nicovega.dev" className="text-brand-primary hover:underline">nicovega.dev</a>
          </p>
          <p className="text-neutral-500 text-sm mt-2">
            Need a profile Like this one? Email me at <a href="mailto:hola@nicovega.dev" className="text-brand-primary hover:underline">hola@nicovega.dev</a>
          </p>
          <p className="text-neutral-500 text-sm mt-2">© 2023 Trotaglobo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 