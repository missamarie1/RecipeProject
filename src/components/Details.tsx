import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import RecipeInformation from "../models/RecipeInformation";
import { getInfoById } from "../services/spoonacularService";
import "./Details.css";
import Ingredient from "./Ingredient";
import SimilarItems from "./SimilarItems";

const Details = () => {
  const id: string = useParams().id!;
  const [recipe, setRecipe] = useState<RecipeInformation>();
  const { addFav, isThisFav, deleteFav } = useContext(FavoritesContext);
  const isFav: boolean = isThisFav(recipe?.id!);
  const [showKey, setShowKey] = useState(false);

  // const instructions = document.querySelector(".instructions-paragraph");
  // const { addFav, isThisFav, deleteFav } = useContext(FavoritesContext);
  // const isFav: boolean = isThisFav(recipe?.id);

  useEffect(() => {
    getInfoById(id).then((res) => setRecipe(res));
  }, []);
  return (
    <div className="Details">
      <img className="picture" src={recipe?.image} alt={recipe?.title} />
      <div className="symbols" onClick={() => console.log("div was clicked")}>
        {isFav ? (
          <i
            className="fa-solid fa-heart fav"
            onClick={() => deleteFav(recipe?.id!)}
          ></i>
        ) : (
          <i className="fa-solid fa-heart" onClick={() => addFav(recipe!)}></i>
        )}
        <i className="fa-brands fa-pinterest"></i>{" "}
      </div>

      <a href={recipe?.sourceUrl}>
        <h2>
          {/* make link to take to original Url */}
          {recipe?.title}
        </h2>
      </a>

      <div className="icons">
        {showKey && (
          <div className="key">
            {/* <h3> Key: </h3> */}
            <div>
              <p>Vegan: </p>
              <span
                className="iconify V"
                data-icon="emojione-monotone:letter-v"
              ></span>
            </div>
            <div>
              <p>Dairy Free: </p>
              <span className="iconify dairy" data-icon="mdi:cow-off"></span>
            </div>
            <div>
              <p>Gluten Free: </p>
              <span className="iconify GF" data-icon="mdi:barley-off"></span>
            </div>
            <div>
              <p>Vegetarian: </p>
              <span
                className="iconify veggie"
                data-icon="charm:plant-pot"
              ></span>
            </div>
          </div>
        )}
        <p onClick={() => setShowKey((prev) => !prev)}>
          <span
            className="iconify question-mark"
            data-icon="fluent:book-question-mark-20-regular"
          ></span>
        </p>
        {recipe?.vegan && (
          <span
            className="iconify V"
            data-icon="emojione-monotone:letter-v"
          ></span>
        )}

        {recipe?.dairyFree && (
          <span className="iconify dairy" data-icon="mdi:cow-off"></span>
        )}
        {recipe?.glutenFree && (
          <span className="iconify GF" data-icon="mdi:barley-off"></span>
        )}
        {recipe?.vegetarian && (
          <span className="iconify veggie" data-icon="charm:plant-pot"></span>
        )}

        {/* <span
        className={`iconify heart${isFav ? " fav" : ""}`}
        data-icon="akar-icons:heart"
        onClick={() => addFav()}
      ></span> */}
      </div>
      <p className="clock-section">
        <span className="iconify clock" data-icon="akar-icons:clock"></span>{" "}
        <span>{recipe?.readyInMinutes}</span>
      </p>
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul className="ingredients-list">
          {recipe?.extendedIngredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient} />
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h3>Instructions:</h3>
        <ol>
          {recipe?.analyzedInstructions.map((instruction) =>
            instruction.steps.map((step) => <li>{step.step}</li>)
          )}
        </ol>
      </div>
      {recipe?.id && <SimilarItems id={recipe?.id!} />}
    </div>
  );
};

export default Details;
