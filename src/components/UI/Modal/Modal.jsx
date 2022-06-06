import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  // React.useEffect(() => {
  //   const keyHandle = (e) => {
  //     console.log(e.code);

  //     if (e.code === "Escape") {
  //       setActive(false);
  //     }
  //   };
  //   window.addEventListener("keydown", keyHandle);
  //   return () => window.removeEventListener("keydown", keyHandle);
  // }, []);

  return (
    <div className={styles.modale_container}>
      <div className={styles.modale_content}>{children}</div>
    </div>
  );
};

export default Modal;
