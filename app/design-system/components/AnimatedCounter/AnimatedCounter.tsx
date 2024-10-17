"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { formatNumber } from "../../utils/format-numbers";

const AnimatedCounter = ({
  start,
  end,
  duration,
  text,
}: {
  start: number;
  end: number;
  duration: number;
  text?: string;
}) => {
  const [count, setCount] = useState(start);

  const { ref: counterRef, inView: counterReview } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (!counterReview) return;

    let startTime: number = 0;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(
        start + Math.round((progress / duration) * (end - start)),
        end
      );
      setCount(currentCount);
      if (progress < duration) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [start, end, duration, counterReview]);

  return (
    <div
      ref={counterRef}
      className="text-white flex flex-col justify-center items-center text-center gap-2 transition-transform transform duration-300 ease-in-out"
    >
      <span className="text-violet-red uppercase font-bold text-lg">
        {text}
      </span>
      <div className="flex gap-1 items-start">
        <span className="text-3xl">+</span>
        <span className="text-5xl">{formatNumber(count)}</span>
      </div>
    </div>
  );
};

export default AnimatedCounter;
