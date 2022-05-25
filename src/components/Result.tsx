import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import RecipeInformation from "../models/RecipeInformation";
import SearchResult from "../models/SearchResult";
import "./Result.css";

interface Props {
  recipe: SearchResult;
}

const Result = ({ recipe }: Props) => {
  const { addFav, isThisFav, deleteFav } = useContext(FavoritesContext);
  const isFav: boolean = isThisFav(recipe.id);
  return (
    <li className="Result">
      <img className="picture" src={recipe.image} alt={recipe.title} />
      <div className="symbols" onClick={() => console.log("div was clicked")}>
        {isFav ? (
          <i
            className="fa-solid fa-heart fav"
            onClick={() => deleteFav(recipe.id)}
          ></i>
        ) : (
          <i className="fa-solid fa-heart" onClick={() => addFav(recipe)}></i>
        )}
        <i className="fa-brands fa-pinterest"></i>{" "}
      </div>
      <h2>
        <Link to={`/details/${recipe.id}`}>{recipe.title}</Link>
      </h2>
    </li>
  );
};

export default Result;
