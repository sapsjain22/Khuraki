"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/phone-mockups-1-utils/use-mobile";

interface Iphone15ProProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  src?: string;
  alt?: string;
}

const Iphone15Pro: React.FC<Iphone15ProProps> = ({
  width = "100%",
  height = "auto",
  src,
  alt = "iPhone screen content",
  className,
  ...props
}) => {
  return (
    <div className={cn("relative select-none", className)}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 433 882"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500 ease-in-out drop-shadow-xl"
        {...props}
      >
        {/* Outer frame */}
        <path
          d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
          className="fill-zinc-800"
        />
        {/* Side nubs */}
        <path
          d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
          className="fill-zinc-800"
        />
        <path
          d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
          className="fill-zinc-800"
        />
        <path
          d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
          className="fill-zinc-800"
        />
        <path
          d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
          className="fill-zinc-800"
        />
        {/* Inner bezel body */}
        <path
          d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
          className="fill-zinc-950"
        />
        {/* Top speaker slit */}
        <path
          opacity="0.5"
          d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
          className="fill-zinc-600"
        />
        {/* Screen area background */}
        <path
          d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
          className="fill-zinc-100"
        />
        {src && (
          <foreignObject
            x="21.25"
            y="19.25"
            width="389.5"
            height="843.5"
            clipPath="url(#roundedCorners)"
          >
            <div className="relative h-full w-full overflow-hidden bg-zinc-900">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 350px"
                priority
                unoptimized
              />
            </div>
          </foreignObject>
        )}
        {/* Dynamic Island Pill */}
        <path
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
          className="fill-zinc-950"
        />
        {/* Lens reflection */}
        <path
          d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
          className="fill-zinc-900"
        />
        <defs>
          <clipPath id="roundedCorners">
            <rect
              x="21.25"
              y="19.25"
              width="389.5"
              height="843.5"
              rx="55.75"
              ry="55.75"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export interface ImageItem {
  src: string;
  alt: string;
}

interface PhoneCarouselProps {
  images: ImageItem[];
  className?: string;
}

export const PhoneCarousel: React.FC<PhoneCarouselProps> = ({
  images,
  className,
}) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!images || images.length === 0) return;
    let interval: NodeJS.Timeout;
    if (!isPaused && !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPaused, isHovering, images]);

  if (!isClient) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center">
        <div className="h-96 w-64 animate-pulse rounded-3xl bg-zinc-100" />
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      className={cn("relative w-full py-6 overflow-hidden", className)}
      aria-label="App preview carousel"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main phone carousel stage */}
          <div
            className="flex h-[430px] md:h-[530px] lg:h-[550px] items-start justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative flex w-full justify-center">
              {images.map((image, index) => {
                const isActive = index === currentIndex;
                const isPrevious =
                  index === currentIndex - 1 ||
                  (currentIndex === 0 && index === images.length - 1);
                const isNext =
                  index === currentIndex + 1 ||
                  (currentIndex === images.length - 1 && index === 0);

                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute transition-all duration-700 ease-in-out",
                      isActive
                        ? "z-20 opacity-100 scale-100"
                        : "opacity-0 scale-90",
                      isPrevious ? "z-10 opacity-40 -translate-x-[45%]" : "",
                      isNext ? "z-10 opacity-40 translate-x-[45%]" : "",
                      !isActive && !isPrevious && !isNext ? "opacity-0" : ""
                    )}
                    style={{
                      transform: isPrevious
                        ? "translateX(-45%) scale(0.9)"
                        : isNext
                        ? "translateX(45%) scale(0.9)"
                        : isActive
                        ? "translateX(0) scale(1)"
                        : "scale(0.85)",
                    }}
                    aria-hidden={!isActive}
                  >
                    <div className="group transition-transform duration-300 hover:scale-[1.02]">
                      <Iphone15Pro
                        width={isMobile ? 260 : 330}
                        height="auto"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel playback & navigation controls */}
          <div className="relative mt-4 flex items-center justify-center gap-3 z-30">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="h-9 w-9 rounded-full border-zinc-200 bg-white/90 shadow-xs backdrop-blur-sm hover:bg-zinc-100 hover:text-zinc-950"
              aria-label="Previous app screen"
            >
              <ChevronLeft className="h-4 w-4 text-zinc-700" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={togglePause}
              className="h-9 w-9 rounded-full border-zinc-200 bg-white/90 shadow-xs backdrop-blur-sm hover:bg-zinc-100 hover:text-zinc-950"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? (
                <Play className="h-4 w-4 text-zinc-700" />
              ) : (
                <Pause className="h-4 w-4 text-zinc-700" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-9 w-9 rounded-full border-zinc-200 bg-white/90 shadow-xs backdrop-blur-sm hover:bg-zinc-100 hover:text-zinc-950"
              aria-label="Next app screen"
            >
              <ChevronRight className="h-4 w-4 text-zinc-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
