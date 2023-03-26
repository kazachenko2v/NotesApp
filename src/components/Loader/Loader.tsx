import cn from "classnames";
import styles from "./Loader.module.css";
import { LoadingProps } from "../types";

const Loader: React.FC<LoadingProps> = ({ isLoading }) => {
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
