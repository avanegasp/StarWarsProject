import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function handleSearch() {
  alert("handleSearch");
}

const Search = () => {
  return (
    <div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};
export default Search;
