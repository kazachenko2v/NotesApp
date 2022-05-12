import React from "react";
import cnBind from "classnames/bind";
import cn from "classnames/bind";
import styles from "./Modal.module.css";

const Modal = ({ isActive, children }) => {
  const cx = cnBind.bind(styles);

  return (
    <div
      className={cn(styles.modale_container, cx({ modale__active: isActive }))}
    >
      <div className={styles.modale_content}>{children}</div>
    </div>
  );
};

export default Modal;
