import React from "react";

const useKeyControlModal = (confirm: () => void, escape: () => void) => {
  React.useEffect(() => {
    const keyHandle = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        confirm();
      } else if (e.code === "Escape") {
        escape();
      }
    };
    window.addEventListener("keydown", keyHandle);
    return () => window.removeEventListener("keydown", keyHandle);
  });
};

export default useKeyControlModal;
