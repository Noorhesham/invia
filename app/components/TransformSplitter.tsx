"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface TransformationSplitterProps {
  leftContent: {
    images: string[];
  };
  rightContent: {
    images: string[];
  };
  speed?: number;
  splitterColor?: string;
}

export function TransformationSplitter({
  leftContent,
  rightContent,
  speed = 15,
  splitterColor = "#ff00ff",
}: TransformationSplitterProps) {
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const leftItemsRef = useRef<HTMLDivElement>(null);
  const rightItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftContainer = leftContainerRef.current;
    const rightContainer = rightContainerRef.current;
    const leftItems = leftItemsRef.current;
    const rightItems = rightItemsRef.current;

    if (!leftContainer || !rightContainer || !leftItems || !rightItems) return;

    // Clone the items to create a seamless loop
    const leftItemsClone = leftItems.cloneNode(true);
    const rightItemsClone = rightItems.cloneNode(true);

    leftContainer.appendChild(leftItemsClone);
    rightContainer.appendChild(rightItemsClone);

    const DURATION = 10;

    // Set up the infinite animations
    const leftAnimation = gsap.to([leftItems, leftItemsClone], {
      xPercent: 100,
      repeat: -1,
      duration: DURATION,
      ease: "none",
      repeatDelay: 0,
    });

    const rightAnimation = gsap.to([rightItems, rightItemsClone], {
      xPercent: 100,
      repeat: -1,
      duration: DURATION,
      ease: "none",
      repeatDelay: 0,
    });

    return () => {
      leftAnimation.kill();
      rightAnimation.kill();
    };
  }, [speed]);

  return (
    <div className="relative w-full h-full overflow-hidden flex">
      {/* Left side - Data Chaos */}
      <div className="w-1/2 h-full overflow-hidden relative">
        <div ref={leftContainerRef} className="absolute  -left-full flex">
          <div ref={leftItemsRef} className="flex flex-nowrap">
            {leftContent.images.map((image, index) => (
              <div key={`left-${index}`} className="flex-shrink-0 w-full h-[280px] m-2 rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Data visualization ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Splitter */}
      <div
        className="absolute top-0 bottom-0 w-2 z-10 left-1/2 transform -translate-x-1/2"
        style={{
          background: splitterColor,
          boxShadow: `0 0 15px ${splitterColor}, 0 0 30px ${splitterColor}`,
        }}
      />

      {/* Right side - Strategic */}
      <div className="w-1/2 h-full overflow-hidden relative" style={{ background: "#15162c" }}>
        <div ref={rightContainerRef} className="absolute  -left-full flex">
          <div ref={rightItemsRef} className="flex flex-nowrap">
            {rightContent.images.map((image, index) => (
              <div key={`right-${index}`} className="flex-shrink-0 w-full h-[280px] m-2 rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Strategic visualization ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
