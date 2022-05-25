import { useEffect, useState } from "react";
import "./SimilarItems.css";
import { getSimilarRecipes } from "../services/spoonacularService";
import SimilarRecipeResponse from "../models/SimilarRecipeResponse";

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
  return <div className="SimilarItems"></div>;
};

export default SimilarItems;
