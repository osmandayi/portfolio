"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language";
import { NEW_URL } from "@/lib/urls";
import Modal from "./Modal";

const FLAG = "useLegacyConfirmed";

export default function LegacyOptInModal() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(FLAG)) {
      setOpen(true);
    }
  }, []);

  const keepOld = () => {
    try {
      localStorage.setItem(FLAG, "1");
    } catch {
      // localStorage unavailable (private mode etc.) — still close the modal
    }
    setOpen(false);
  };

  const goNew = () => {
    window.location.href = NEW_URL;
  };

  return (
    <Modal
      open={open}
      onClose={() => undefined}
      title={language.legacyModalTitle}
      showClose={false}
      closeOnBackdrop={false}
    >
      <p className="leading-relaxed text-mycolor-700/80">
        {language.legacyModalBody}
      </p>
      <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          onClick={keepOld}
          className="rounded-md border border-mycolor-300 px-4 py-2 text-sm text-mycolor-700/80 transition hover:border-mycolor-100/40 hover:text-mycolor-700"
        >
          {language.legacyModalKeepOld}
        </button>
        <button
          onClick={goNew}
          className="rounded-md bg-mycolor-100 px-4 py-2 text-sm font-medium text-mycolor-700 transition hover:bg-mycolor-100/90"
        >
          {language.legacyModalTryNew}
        </button>
      </div>
    </Modal>
  );
}
