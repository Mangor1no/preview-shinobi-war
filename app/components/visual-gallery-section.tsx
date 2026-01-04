"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { blackpast } from "@/utils/fonts";
import { Trans } from "@lingui/react/macro";

export default function VisualGallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 0,
      image: "/images/visual/0.png",
      alt: "Gallery Image 1",
    },
    {
      id: 1,
      image: "/images/visual/1.png",
      alt: "Gallery Image 2",
    },
    {
      id: 2,
      image: "/images/visual/2.png",
      alt: "Gallery Image 3",
    },
    {
      id: 3,
      image: "/images/visual/3.png",
      alt: "Gallery Image 4",
    },
    {
      id: 4,
      image: "/images/visual/4.png",
      alt: "Gallery Image 5",
    },
  ];

  const AUTO_PLAY_INTERVAL = 3000; // 3 seconds

  useEffect(() => {
    if (isPaused) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, slides.length]);

  const handleSlideChange = (slideId: number) => {
    setCurrentSlide(slideId);
    // Reset the interval when user manually changes slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-40">
      <div className="absolute top-0 inset-x-0 bg-linear-to-b from-black to-transparent" />
      <div className="absolute bottom-0 inset-x-0 bg-linear-to-b from-transparent to-black" />

      <Image
        src="/images/visual/decor.png"
        alt="Decor"
        // fill
        width={400}
        height={400}
        className="object-cover absolute top-1/5 left-0"
      />
      <Image
        src="/images/visual/decor.png"
        alt="Decor"
        width={400}
        height={400}
        className="object-cover absolute bottom-0 right-0"
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
        <h2
          className={`text-center text-blue-500 text-7xl mb-20 ${blackpast.className}`}
        >
          <Trans>visual gallery</Trans>
        </h2>

        <div
          className="bg-black/10 backdrop-blur-2xl p-2 md:p-6 rounded-xl border-3 border-[#DA102250] relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full aspect-video">
            {slides.map((slide, index) => (
              <Image
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                width={1920}
                height={1080}
                className={`absolute rounded-2xl inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(slide.id)}
              className={`w-10 h-2.5 rounded-full transition-all border border-white/20 ${
                currentSlide === slide.id
                  ? "bg-white"
                  : "bg-transparent hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${slide.id + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
