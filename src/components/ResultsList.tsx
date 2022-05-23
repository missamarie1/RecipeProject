import SearchResult from "../models/SearchResult";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  recipeArray: SearchResult[];
}
const ResultsList = ({ recipeArray }: Props) => {
  return (
    <div className="ResultsList">
      <ul className="results-list">
        {recipeArray.map((recipe) => (
          <Result key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
