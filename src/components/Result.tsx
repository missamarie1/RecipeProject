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
      <img src={recipe.image} alt={recipe.title} />
      <h2>
        <Link to={`/details/${recipe.id}`}>{recipe.title}</Link>
      </h2>
      <span
        className={`iconify heart${isFav ? " fav" : ""}`}
        data-icon="akar-icons:heart"
        onClick={() => addFav(recipe)}
      ></span>
      <i className="fa-brands fa-pinterest"></i>
    </li>
  );
};

export default Result;
