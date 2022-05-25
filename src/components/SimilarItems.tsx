import { useEffect, useState } from "react";
import "./SimilarItems.css";
import { getSimilarRecipes } from "../services/spoonacularService";
import SimilarRecipeResponse from "../models/SimilarRecipeResponse";
import Result from "./Result";

interface Props {
  id: string;
}

const SimilarItems = ({ id }: Props) => {
  const [similar, setSimilar] = useState<SimilarRecipeResponse[]>([]);
  useEffect(() => {
    getSimilarRecipes(id).then((res) => {
      setSimilar(res);
    });
  }, []);
  return (
    <div className="SimilarItems">
      {/* {similar.map((recipe) => (
        // <Result recipe={title:recipe.title, image:recipe.sourceUrl} />
      ))} */}
    </div>
  );
};

export default SimilarItems;
