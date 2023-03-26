import React from "react";
import { TiDelete } from "react-icons/ti";

import { useAppContext } from "../../hooks/useAppContext";

import styles from "./TagsItem.module.scss";
import { TagsItemProps } from "../types";

const TagsItem: React.FC<TagsItemProps> = ({ tag, removeTag }) => {
  const search = useAppContext();

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    search?.searchTags(tag);
  };

  return (
    <div className={styles.tag_container}>
      <a className={styles.tag_link} onClick={clickHandler}>
        {tag}
      </a>
      <TiDelete
        className={styles.close_button}
        onClick={() => removeTag(tag)}
      />
    </div>
  );
};
export default TagsItem;
