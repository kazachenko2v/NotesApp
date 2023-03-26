import React from "react";
import styles from "./Modal.module.css";
import { withChildrenProps } from "../../types";

const Modal: React.FC<withChildrenProps> = ({ children }) => {
  return (
    <div className={styles.modale_container}>
      <div className={styles.modale_content}>{children}</div>
    </div>
  );
};

export default Modal;
