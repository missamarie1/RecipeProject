import { useEffect, useState } from "react";
import "./SimilarItems.css";
import { getSimilarRecipes } from "../services/spoonacularService";
import SimilarRecipeResponse from "../models/SimilarRecipeResponse";
import Result from "./Result";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

const SimilarItems = ({ id }: Props) => {
  const [similar, setSimilar] = useState<SimilarRecipeResponse[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getSimilarRecipes(id).then((res) => {
      setSimilar(res);
    });
  }, [id]);
  return (
    <div className="SimilarItems">
      <h3>Similar Recipes:</h3>
      {similar.map((recipe, index) => (
        <li key={`${recipe.id}${index}`}>
          <Link to={`/details/${recipe.id}`}>
            <p>{recipe.title}</p>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default SimilarItems;
