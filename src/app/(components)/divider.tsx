"use client"
import React, { useState } from "react";

export default function Divider() {
  const [height, setHeight] = useState(0);

  React.useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight / 4);
    };

    window.addEventListener("resize", updateHeight);

    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between align-center h-screen w-full z-[-10] absolute top-0 left-0">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`h-[3990px] md:h-[3970px] w-[2px] ${index === 0 ? 'bg-red-500' : index === 4 ? 'bg-blue-500' : 'bg-lines opacity-5'} ${index === 1 ? '' : 'mr-0'}`}
        ></div>
      ))}
    </div>
  );
}
