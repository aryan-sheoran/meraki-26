import React, { useEffect, useRef, useState } from "react";

export default function Box({ question, answer, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState("0px");

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      const sh = contentRef.current.scrollHeight;
      setMaxH(`${sh}px`);
    } else {
      setMaxH("0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`w-full font-minecraft  bg-[#474747] border border-[#888] shadow-black-lg p-4 relative
      border-l-black border-l-[2px]
      border-b-black border-b-[2px]
        transition-all duration-300 ease-in-out transform ${isOpen ? "scale-105 z-20" : "scale-100"}
        self-start`} 
    >
      <div>
        <p className="font-minecraft text-[11px] md:text-[12px] text-white leading-[20px] tracking-[0.5px]">{question}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-expanded={isOpen}
        className={`absolute right-3 bottom-3 text-yellow-400 font-bold text-xl transition-transform
          ${isOpen ? "rotate-45" : "rotate-0"}`}
      >
        +
      </button>

      <div
        ref={contentRef}
        className="mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: maxH }}
      >
        <p className="font-minecraft text-[11px] md:text-[12px] text-black-300 leading-[16px] tracking-[0.5px]">{answer}</p>
      </div>
    </div>
  );
}
