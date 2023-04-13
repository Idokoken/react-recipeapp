import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Data from "./data";

function Item() {
  const { id } = useParams();
  const [meal, setMeal] = useState("chicken");
  const [data, setData] = useState({});

  const fetchMeal = async () => {
    const api =
      "https://api.edamam.com/api/recipes/v2" +
      id +
      "?q=" +
      meal +
      "&app_id=" +
      process.env.APP_ID +
      "&app_key=" +
      process.env.APP_KEY;
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

  const product = data
    .filter((c) => c.id === id)
    .map((a) => (
      <div>
        <img
          src={a.image}
          className="img-fluid"
          alt={a.label}
          style={{ maxHeight: "400" }}
        />
        <h3 className="mb-0 mt-2">{a.calories}</h3>
        <p className="mb-0">{a.label}</p>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          item
          {product}
        </div>
      </div>
    </div>
  );
}

export default Item;
