import SearchResult from "../models/SearchResult";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  recipeArray: SearchResult[];
}
const ResultsList = ({ recipeArray }: Props) => {
  return (
    <ul className="ResultsList">
      {recipeArray.map((recipe, index) => (
        <Result key={`${recipe.id}${index}`} recipe={recipe} />
      ))}
    </ul>
  );
};

export default ResultsList;
