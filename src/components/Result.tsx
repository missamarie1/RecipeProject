import RecipeInformation from "../models/RecipeInformation";
import SearchResult from "../models/SearchResult";
import "./Result.css";

interface Props {
  recipe: SearchResult;
}

const Result = ({ recipe }: Props) => {
  return (
    <li className="Result">
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
    </li>
  );
};

export default Result;
