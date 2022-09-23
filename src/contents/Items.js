import React, { useState, useEffect } from "react";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

function Items() {
  const [data, setData] = useState([]);
  const [meal, setMeal] = useState("chicken");
  const [query, setQuery] = useState("");

  const api =
    "https://api.edamam.com/search?q=" +
    meal +
    "&app_id=da3c3fcf&app_key=44d4203540d418e418cd925fb34b5084";

  //const api = "https://api.edamam.com/search?q=" + meal + process.env.API_KEY;

  const fetchMeal = async () => {
    try {
      let resp = await axios.get(api);
      let result = resp.data.hits;
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, [meal]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMeal(query);
    setQuery("");
  };

  const listItems = data.map((a, i) => (
    <div className="recipe" key={i}>
      <img
        src={a.recipe.image}
        className="img-fluid"
        alt={a.recipe.label}
        style={{ maxHeight: "400" }}
      />
      <h3 className="mb-0 mt-2">{a.recipe.label}</h3>
      <p className="mb-0">{a.recipe.calories}</p>
      <a className="btn" target="_blank" href={`/item/{i}`}>
        View Details
      </a>
      <hr />
    </div>
  ));
  return (
    <div>
      <div className="container my-4" style={{ width: "100%" }}>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="enter meal"
            name="meal"
            value={query}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <h2 className="m-3">Featured Recipes</h2>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-2">{listItems}</div>
        </div>
      </div>
    </div>
  );
}

export default Items;
