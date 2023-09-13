import React, { useContext } from "react";
import { SearchContext } from "../context";

const Item = () => {
  const { destination, dates, options } = useContext(SearchContext);

  return (
    <section className="section h2">
      <p>Destination: {destination}</p>
      <p>Selected Dates: {JSON.stringify(dates)}</p>
      <p>Adult: {options.adult}</p>
      <p className="p">
        <span className="note">Note:</span> When I refresh, the data is lost and
        it fetches the defaults.
      </p>
    </section>
  );
};

export default Item;
