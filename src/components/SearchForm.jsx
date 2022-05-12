import React, { useState } from "react";

const SearchForm = ({ getSearchQuery }) => {
  return <input onChange={(e) => getSearchQuery(e.target.value)} type="text" />;
};

export default SearchForm;
