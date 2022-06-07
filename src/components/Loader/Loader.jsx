import React from "react";

import styles from "./Loader.module.css";
import cn from "classnames";

const Loader = ({ isLoading }) => {
  return (
    <div
      className={cn(styles.loader_conteiner, {
        [styles.loader_conteiner__loaded]: isLoading,
      })}
    >
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
