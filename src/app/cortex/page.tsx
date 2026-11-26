import type { Metadata } from "next";
import { CortexPage } from "@/features/cortex";

export const metadata: Metadata = {
  title: "Cortex",
  description:
    "Cortex generates film-quality photos and video on your phone. Every result is carefully reviewed.",
};

export default function CortexRoutePage() {
  return <CortexPage />;
}
