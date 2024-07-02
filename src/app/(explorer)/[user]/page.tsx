"use client";

import React from "react";
import STLViewer from "../components/STLViewer";

export default function ExplorerPage() {
  return (
    <div className="relative">
      <div className="w-screen h-screen p-2.5">
        <STLViewer
          urls={[
            "/STL/sample/forearm-j5-part.STL",
            "/STL/sample/elbow-lid-1.STL",
          ]}
        />
      </div>
    </div>
  );
}
