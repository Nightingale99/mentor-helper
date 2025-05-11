import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cn("flex mx-auto max-w-[1280px]", className)}>
      {children}
    </div>
  );
};

export default Container;
