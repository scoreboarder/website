import { ReactNode } from "react";

export default function ButtonGroup({ children }: { children: ReactNode }) {
  return (
    <div className="flex sm:flex-row flex-col items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-2">
      {children}
    </div>
  );
}
