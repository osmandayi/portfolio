"use client";

import { useLanguage } from "@/context/language";
import { NEW_URL } from "@/lib/urls";
import Modal from "./Modal";

export default function SwitchToNewModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { language } = useLanguage();

  const goNew = () => {
    window.location.href = NEW_URL;
  };

  return (
    <Modal open={open} onClose={onClose} title={language.switchNewTitle}>
      <p className="leading-relaxed text-mycolor-700/80">
        {language.switchNewBody}
      </p>
      <div className="mt-6 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="rounded-md border border-mycolor-300 px-4 py-2 text-sm text-mycolor-700/80 transition hover:border-mycolor-100/40 hover:text-mycolor-700"
        >
          {language.switchNewCancel}
        </button>
        <button
          onClick={goNew}
          className="rounded-md bg-mycolor-100 px-4 py-2 text-sm font-medium text-mycolor-400 transition hover:bg-mycolor-100/90"
        >
          {language.switchNewConfirm}
        </button>
      </div>
    </Modal>
  );
}
