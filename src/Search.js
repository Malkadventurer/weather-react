import React, { useState } from "react";
import "./search.css";

export default function Search() {
  let [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    let cityElement = document.querySelector("h1");
    cityElement(`${city}`);
  }

  function seachCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search=box">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control border border-white shadow p-2 mb-4"
          id="city-input"
          placeholder="Type a city..."
          autoComplete="off"
          onChange={seachCity}
        />
        <input
          className="col-3 btn btn-primary btn-sm shadow p-2 mb-4"
          type="submit"
          value="Search"
          id="search-button"
        />
      </form>
    </div>
  );
}
