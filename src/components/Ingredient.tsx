import { Ingredients } from "../models/RecipeInformation";
import "./Ingredient.css";

interface Props {
  ingredient: Ingredients;
}
const Ingredient = ({ ingredient }: Props) => {
  return (
    <li className="Ingredient">
      <p>{ingredient.original}</p>
    </li>
  );
};

export default Ingredient;
