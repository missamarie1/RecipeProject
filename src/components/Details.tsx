import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import RecipeInformation from "../models/RecipeInformation";
import { getInfoById } from "../services/spoonacularService";
import "./Details.css";
import Ingredient from "./Ingredient";

const Details = () => {
  const id: string = useParams().id!;
  const [recipe, setRecipe] = useState<RecipeInformation>();
  // const instructions = document.querySelector(".instructions-paragraph");
  // const { addFav, isThisFav, deleteFav } = useContext(FavoritesContext);
  // const isFav: boolean = isThisFav(recipe?.id);

  useEffect(() => {
    getInfoById(id).then((res) => setRecipe(res));
  }, []);
  return (
    <div className="Details">
      <img src={recipe?.image} alt={recipe?.title} />
      <h2>
        {/* make link to take to original Url */}
        {recipe?.title}
      </h2>
      {recipe?.dairyFree && (
        <span className="iconify" data-icon="mdi:cow-off"></span>
      )}
      {recipe?.glutenFree && (
        <span className="iconify" data-icon="mdi:barley-off"></span>
      )}
      {recipe?.vegetarian && (
        <span className="iconify" data-icon="charm:plant-pot"></span>
      )}

      {recipe?.vegan && (
        <span className="iconify" data-icon="emojione-monotone:letter-v"></span>
      )}
      {/* <span
        className={`iconify heart${isFav ? " fav" : ""}`}
        data-icon="akar-icons:heart"
        onClick={() => addFav()}
      ></span> */}
      <i className="fa-brands fa-pinterest"></i>

      <p>
        <span className="iconify" data-icon="akar-icons:clock"></span>{" "}
        <span>{recipe?.readyInMinutes}</span>
      </p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe?.extendedIngredients.map((ingredient) => (
          <Ingredient key={ingredient.id} ingredient={ingredient} />
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe?.analyzedInstructions.map((instruction) =>
          instruction.steps.map((step) => <li>{step.step}</li>)
        )}
      </ol>
    </div>
  );
};

export default Details;
