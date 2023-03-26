import React from "react";
import SearchContext from "../context/SearchContext";

export const useAppContext = () => {
  const data = React.useContext(SearchContext);

  if (!data) {
    console.log(data, SearchContext);
  }

  return data;
};
