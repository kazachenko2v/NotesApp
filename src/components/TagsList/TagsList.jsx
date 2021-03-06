import React, { useContext } from "react";

import SearchContext from "../../context/SearchContext";

import styles from "./TagsList.module.scss";

import { TiDelete } from "react-icons/ti";

const TagsList = ({ tag, removeTag }) => {
  const { searchTags } = useContext(SearchContext);

  const clickHandler = (e) => {
    e.preventDefault();
    searchTags(tag);
  };

  return (
    <div className={styles.tag_container}>
      <a className={styles.tag_link} onClick={(e) => clickHandler(e)}>
        {tag}
      </a>
      <TiDelete
        className={styles.close_button}
        onClick={() => removeTag(tag)}
      />
    </div>
  );
};
export default TagsList;
