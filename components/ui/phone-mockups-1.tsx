import React from "react";
import {
  ImageItem,
  PhoneCarousel,
} from "@/components/ui/phone-mockups-1-utils/phone-carousel";

const placeholderImages: ImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80",
    alt: "Nutrition tracking screen placeholder",
  },
  {
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    alt: "Metabolic workout tracking placeholder",
  },
  {
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80",
    alt: "Meal logger camera scan placeholder",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
    alt: "Adaptive calibration progress placeholder",
  },
];

interface PhoneMockupBasicProps {
  images?: ImageItem[];
  className?: string;
}

export default function PhoneMockupBasic({
  images = placeholderImages,
  className = "",
}: PhoneMockupBasicProps) {
  return <PhoneCarousel images={images} className={className} />;
}
