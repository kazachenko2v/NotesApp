import React from "react";
import styles from "./TagsList.module.css";

const TagsList = ({ tag, setSearchQuery }) => {
  function clickHendler(e) {
    e.preventDefault();
    setSearchQuery(tag);
  }
  return (
    <a className={styles.tag_link} onClick={(e) => clickHendler(e)}>
      {tag}&nbsp;
    </a>
  );
};
export default TagsList;
