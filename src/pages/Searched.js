import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import "./Searched.css";

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <div className="grid">
      {searched.map((item) => {
        return (
          <div className="card" key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
// const Card = styled.div`
//   img {
//     margin-top: 2rem;

//     width: 100%;
//     border-radius: 2rem;
//   }
//   a {
//     text-decoration: none;
//   }
//   h4 {
//     text-align: center;
//     padding: 1rem;
//   }
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     grid-template-column: 1fr;
//   }
//   img {
//     width: 100%;
//   }
// `;

export default Searched;
