import { createContext } from "react";
import RecipeInformation from "../models/RecipeInformation";
import SearchResult from "../models/SearchResult";

//describing object
interface FavContextModel {
  favorites: SearchResult[];
  addFav: (r: SearchResult) => void;
  isThisFav: (id: number) => boolean;
  deleteFav: (id: number) => void;
}
//creating object
const defaultValue: FavContextModel = {
  favorites: [],
  addFav: () => {},
  isThisFav: () => false,
  deleteFav: () => false,
};

//providing obj as argument to function
//funciton will create our context obj
const FavoritesContext = createContext(defaultValue);

export default FavoritesContext;
