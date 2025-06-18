import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type LoadingSpinnerProps = {
  className?: string;
  size?: number;
};

export function LoadingSpinner({ className, size = 24 }: LoadingSpinnerProps) {
  return (
    <div role="status" aria-live="polite" className="flex justify-center items-center">
      <Loader2
        className={cn("animate-spin text-primary", className)}
        size={size}
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
