import React, { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";
import { useLocation } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = () => {
  const { food_list, url } = useContext(StoreContext);
  const query = new URLSearchParams(useLocation().search).get("q")?.toLowerCase();

  const filtered = food_list.filter(item =>
    item.name.toLowerCase().includes(query)
  );

  return (
    <div className='search-results'>
      <h2>Results for "{query}"</h2>
      {filtered.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="results-list">
          {filtered.map((item) => (
            <div key={item._id} className="result-card">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
