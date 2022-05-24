export interface Ingredients {
  name: string;
  original: string;
  id: string;
}
interface Steps {
  step: string;
}
interface Instructions {
  steps: Steps[];
}

export default interface RecipeInformation {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  readyInMinutes: number;
  id: string;
  title: string;
  image: string;
  analyzedInstructions: Instructions[];
  extendedIngredients: Ingredients[];
  sourceUrl: string;
}
