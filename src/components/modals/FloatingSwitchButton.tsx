"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language";
import SwitchToNewModal from "./SwitchToNewModal";

export default function FloatingSwitchButton() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  if (!language) return null;

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.35, ease: "easeOut" }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label={language.switchNewTooltip}
        title={language.switchNewTooltip}
        className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-mycolor-100/50 bg-mycolor-400/90 px-4 py-3 text-sm font-medium text-mycolor-100 shadow-lg shadow-black/30 backdrop-blur transition hover:bg-mycolor-100/15 hover:shadow-mycolor-100/20 sm:bottom-6 sm:right-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mycolor-100 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-mycolor-100" />
        </span>
        <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
        <span>{language.switchNewTooltip}</span>
      </motion.button>
      <SwitchToNewModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
