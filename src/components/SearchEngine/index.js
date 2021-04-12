import React from "react";

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
    <div>
      <input
        placeholder="enter the user name"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchEngine;
