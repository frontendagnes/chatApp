import React from "react";
import { SearchEngineDiv, SearchEngineInput } from './theme/themeSearchEngine'
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
      <p>Search Engine:</p>
      <SearchEngineInput 
        placeholder="Search for a user"
        onChange={(e) => handleChange(e)}
      />
    </SearchEngineDiv>
  );
};

export default SearchEngine;
