import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import styles from "./TagsList.module.css";

const TagsList = ({ tag }) => {
  const { searchTags } = useContext(SearchContext);

  function clickHandler(e) {
    e.preventDefault();
    searchTags(tag);
  }
  return (
    <a className={styles.tag_link} onClick={(e) => clickHandler(e)}>
      {tag}&nbsp;
    </a>
  );
};
export default TagsList;
