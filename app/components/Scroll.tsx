"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pinning animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=500%",
        pin: pinRef.current,
        scrub: 1,
        anticipatePin: 1,
      });

      // Content animation
      gsap.fromTo(
        contentRef.current,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "+=100%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-[500vh] relative">
      <div ref={pinRef} className="h-screen sticky top-0 flex items-center justify-center">
        <div ref={contentRef} className="opacity-0">
          <h1 className="text-4xl font-bold">Pinned Content</h1>
        </div>
      </div>
    </section>
  );
}
