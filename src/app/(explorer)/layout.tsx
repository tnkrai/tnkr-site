import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import React from "react";

export default function ExplorerLayout() {
  return (
    <div className="">
      <div className="px-5 py-2.5 flex justify-between items-center">
        <p>tnkr.ai</p>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
