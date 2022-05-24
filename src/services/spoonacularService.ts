import axios from "axios";
import RandomRecipeResponse from "../models/RandomRecipeResponse";
import RecipeInformation from "../models/RecipeInformation";
import RecipeResponseSearch from "../models/RecipeResponseSearch";
import SimilarRecipeResponse from "../models/SimilarRecipeResponse";

const apiKey: string = process.env.REACT_APP_RECIPE_API_KEY || "";

export const getRecipesBySearch = (
  searchTerm: string,
  restrictions: string,
  genre: string
): Promise<RecipeResponseSearch> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: { apiKey, query: searchTerm, diet: restrictions, type: genre },
    })
    .then((res) => res.data);
};
export const getRandomRecipe = (): Promise<RandomRecipeResponse> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/random`, {
      params: { apiKey },
    })
    .then((res) => res.data);
};

export const getSimilarRecipes = (
  id: number
): Promise<SimilarRecipeResponse[]> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/similar`, {
      params: { apiKey },
    })
    .then((res) => res.data);
};
export const getInfoById = (id: string): Promise<RecipeInformation> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { apiKey },
    })
    .then((res) => res.data);
};
