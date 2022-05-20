import axios from "axios";

const apiKey: string = process.env.REACT_APP_RECIPE_API_KEY || "";

export const getRecipes = (): Promise<> => {
  return axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
    params: { apiKey },
  });
};
