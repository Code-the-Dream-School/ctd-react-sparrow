import React from "react"
import style from "./Search.module.css"
import PropTypes from "prop-types"

const Search = ({ handleSearch }) => {
  return (
    <div>
      <label htmlFor="search"> </label>
      <input
        id="search"
        type="text"
        placeholder="Search a task..."
        onChange={handleSearch}
        className={style.input}
      />
    </div>
  )
}

Search.popType = {
  handleSearch: PropTypes.func,
}

export default Search
