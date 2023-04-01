import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./data";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [meal, setMeal] = useState("chicken");
  const [data, setData] = useState({});

  const fetchMeal = async () => {
    const api =
      "https://api.edamam.com/search?q=" +
      "chicken" +
      "&app_id=da3c3fcf&app_key=44d4203540d418e418cd925fb34b5084/";
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

  const product = Data.filter((c) => c.id == id).map((a) => (
    <div>
      <img
        src={a.cover}
        className="img-fluid"
        alt={a.title}
        style={{ maxHeight: "400" }}
      />
      <h3 className="mb-0 mt-2">{a.author}</h3>
      <p className="mb-0">{a.title}</p>
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
