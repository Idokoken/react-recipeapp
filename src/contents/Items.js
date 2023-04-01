import React, { useState, useEffect } from "react";
import axios from "axios";
import * as dotenv from "dotenv";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tablet } from "../Responsive";
// import Data from "./data";

dotenv.config();

const Wrapper = styled.div`
  min-height: calc(100vh - 230px);
  font-family: "Roboto", sans-serif;
  margin: 0;

  h2 {
    color: rgba(183, 22, 22, 0.8);
  }
  input {
    border-radius: 10px 0 0 10px;
  }
  button {
    border-radius: 0 10px 10px 0;
  }
  .search {
    width: 100%;
    ${Tablet({ width: "50%" })}
  }
  .content {
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
    ${Tablet({ gridTemplateColumns: "50% 50%" })}
  }
  .content .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    border-radius: 20px;
  }
  .link {
    color: rgba(183, 22, 22, 0.8) !important;
    border: 2px solid rgba(183, 22, 22, 0.8);
    border-radius: 10px;
  }
`;

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
      <h3 className="my-2">{a.recipe.label}</h3>
      <p className="">{a.recipe.calories}</p>
      <Link to="/" className="btn link">
        View Details
      </Link>
      <hr />
    </div>
  ));
  // {`/product/${item._id}`}
  return (
    <Wrapper>
      <div className="container my-4 search">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control"
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
      <h2 className="m-3 text-center">Featured Recipes</h2>
      <div className="container mt-3">
        <div className="content mb-2">{listItems}</div>
      </div>
    </Wrapper>
  );
}

export default Items;
