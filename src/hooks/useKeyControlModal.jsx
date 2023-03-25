import { useEffect } from "react";

const useKeyControlModal = (confirm, escape) => {
  useEffect(() => {
    const keyHandle = (e) => {
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
