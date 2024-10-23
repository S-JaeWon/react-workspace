import React, { useState } from "react";

function DynamicClassExample() {
  const [isACtive, setIsACtive] = useState(false);

  return (
    <div className="p-10">
      <button
        className={`${
          isACtive ? "bg-green-500" : "bg-gray-500"
        } px-4 py-2 rounded`}
        onClick={() => setIsACtive(!isACtive)}
      >
        {isACtive ? "활성화" : "비활성화"}
      </button>
    </div>
  );
}

export default DynamicClassExample;
