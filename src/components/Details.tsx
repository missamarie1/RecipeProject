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
    window.scrollTo(0, 0);
    getInfoById(id).then((res) => setRecipe(res));
  }, [id]);
  return (
    <>
      {recipe ? (
        <div className="Details">
          <div className="section-container">
            <section className="section-1">
              <img
                className="picture"
                src={recipe?.image}
                alt={recipe?.title}
              />
              <div
                className="symbols"
                onClick={() => console.log("div was clicked")}
              >
                {isFav ? (
                  <i
                    className="fa-solid fa-heart fav"
                    onClick={() => deleteFav(recipe?.id!)}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-heart"
                    onClick={() => addFav(recipe!)}
                  ></i>
                )}
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-pinterest"></i>
                </a>{" "}
              </div>

              <h2 className="similar-heading">
                <a href={recipe?.sourceUrl}>{recipe?.title}</a>
              </h2>

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
                      <span
                        className="iconify dairy"
                        data-icon="mdi:cow-off"
                      ></span>
                    </div>
                    <div>
                      <p>Gluten Free: </p>
                      <span
                        className="iconify GF"
                        data-icon="mdi:barley-off"
                      ></span>
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
                {(recipe?.dairyFree ||
                  recipe?.glutenFree ||
                  recipe?.vegetarian ||
                  recipe?.vegan) && (
                  <p onClick={() => setShowKey((prev) => !prev)}>
                    <span
                      className="iconify question-mark"
                      data-icon="fluent:book-question-mark-20-regular"
                    ></span>
                  </p>
                )}
                {recipe?.vegan && (
                  <p>
                    <span
                      className="iconify V"
                      data-icon="emojione-monotone:letter-v"
                    ></span>
                  </p>
                )}

                {recipe?.dairyFree && (
                  <p>
                    <span
                      className="iconify dairy"
                      data-icon="mdi:cow-off"
                    ></span>
                  </p>
                )}
                {recipe?.glutenFree && (
                  <p>
                    <span
                      className="iconify GF"
                      data-icon="mdi:barley-off"
                    ></span>
                  </p>
                )}
                {recipe?.vegetarian && (
                  <p>
                    <span
                      className="iconify veggie"
                      data-icon="charm:plant-pot"
                    ></span>
                  </p>
                )}
              </div>

              <p className="clock-section">
                <span
                  className="iconify clock"
                  data-icon="akar-icons:clock"
                ></span>{" "}
                <span>{recipe?.readyInMinutes}</span>
              </p>
            </section>
            <section className="section-2">
              <div className="ingredients">
                <h3>Ingredients:</h3>
                <ul className="ingredients-list">
                  {recipe?.extendedIngredients.map((ingredient, index) => (
                    <Ingredient
                      key={`${ingredient.id}${index}`}
                      ingredient={ingredient}
                    />
                  ))}
                </ul>
              </div>
              {recipe.analyzedInstructions.length > 0 ? (
                <div className="instructions">
                  <h3>Instructions:</h3>
                  <ol className="instructions-list">
                    {recipe?.analyzedInstructions.map((instruction) =>
                      instruction.steps.map((step) => (
                        <li key={Math.floor(Math.random() * 1000)}>
                          {step.step}
                        </li>
                      ))
                    )}
                  </ol>
                </div>
              ) : (
                <p className="alternative">Instructions not available.</p>
              )}
            </section>
          </div>
          <div className="similar">
            {recipe?.id && <SimilarItems id={recipe?.id!} />}
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  );
};

export default Details;
