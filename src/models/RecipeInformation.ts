interface Ingredients {
  name: string;
  original: string;
}

export default interface RecipeInformation {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  readyInMinutes: number;
  id: number;
  title: string;
  image: string;
  instructions: string;
  extendedIngredients: Ingredients[];
}
