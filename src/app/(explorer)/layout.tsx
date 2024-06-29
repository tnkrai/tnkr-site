import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/Avatar";
import React from "react";

interface ExplorerLayoutProps {
  children: React.ReactNode;
}

export default function ExplorerLayout({ children }: ExplorerLayoutProps) {
  return (
    <div>
      <div className="px-5 py-2.5 flex justify-between items-center">
        <p>tnkr.ai</p>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>{children}</div>
    </div>
  );
}
