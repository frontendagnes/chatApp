import React from "react";
import { SearchEngineDiv, SearchEngineInput } from './themeSearchEngine'
const SearchEngine = (props) => {
  const handleChange = (e) => {
    let value = e.target.value;

    let foundItems = [...props.items];

    let found = foundItems.filter((item) => {
      return item.user.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    props.setSearch(found);
  };

  return (
    <SearchEngineDiv>
      <SearchEngineInput
        placeholder="Search for a user"
        onChange={(e) => handleChange(e)}
      />
    </SearchEngineDiv>
  );
};

export default SearchEngine;
