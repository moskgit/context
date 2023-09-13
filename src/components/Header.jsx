import React, { useContext, useState } from "react";
import { SearchContext } from "../context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {
    destination: cityContext,
    dates: dateContext,
    options: optionsContext,
    dispatch,
  } = useContext(SearchContext);
  const [destination, setDestination] = useState(() => cityContext);
  const [dates, setDates] = useState(() => dateContext);
  const [options, setOptions] = useState(() => optionsContext);
  const navigate = useNavigate();

  // create a function to set Data to localStorage
  async function setItemToLocal() {
    await localStorage.setItem(
      "items",
      JSON.stringify({ destination, dates, options })
    );
  }

  const handleSearch = () => {
    console.log("destination, dates, options: ", destination, dates, options);
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/Item");

    // run to store input datas to the localStorage
    setItemToLocal();
  };

  return (
    <>
      <section onSubmit={() => handleSubmit(e)} className="section">
        <input
          type="text"
          className="input"
          placeholder="string"
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
        <input
          type="text"
          className="input"
          placeholder="string"
          onChange={(e) => {
            setDates(() => e.target.value);
          }}
        />
        <input
          type="number"
          className="input"
          placeholder="number"
          onChange={(e) => {
            setOptions({ adult: e.target.value });
          }}
        />
        <button className="btn" onClick={() => handleSearch()}>
          Submit
        </button>
        <p className="p">
          <span className="note">Note:</span>Clicking on the 'Search' button
          will take you to the Items.jsx component
        </p>
      </section>
    </>
  );
};

export default Header;
