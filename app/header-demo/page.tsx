import React from "react";
import Demo from "@/components/ui/demo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Header-3 Component Demo | Khuraki",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeaderDemoPage() {
  return <Demo />;
}
