import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const boxes = gsap.utils.toArray<HTMLElement>(".scroll-box");

    boxes.forEach((box, index) => {
      gsap.to(box, {
        x: 150 * (index + 1),
        rotation: 360,
        borderRadius: "50%",
        scale: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    });
  }, { scope: scrollRef });

  return (
    <div>
      <div className="w-full h-[120vh] flex justify-center items-center flex-col">
        <p className="text-center">Scroll to see animation</p>
      </div>

      <div ref={scrollRef} className="mt-20 w-full h-screen flex flex-col gap-10 items-center">
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 bg-pink-500"
        ></div>

        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 bg-orange-500"
        ></div>
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
