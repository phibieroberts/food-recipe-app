import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    console.log(params.type);
    getCuisine(params.type);
  }, [params.type]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {cuisine.map((item) => (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(20rem, 1fr);
  grid-gap: 3rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0rem;
    grid-gap: 1.5rem;
  } ;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    margin-top: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-column: 1fr;
  }
  img {
    width: 100%;
  }
`;
export default Cuisine;
