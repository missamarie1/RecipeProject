import { useEffect, useState } from "react";
import RecipeInformation from "../models/RecipeInformation";
import RecipeResponseSearch from "../models/RecipeResponseSearch";
import SearchResult from "../models/SearchResult";
import {
  getRandomRecipe,
  getRecipesBySearch,
} from "../services/spoonacularService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [recipeArray, setRecipeArray] = useState<SearchResult[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [genre, setGenre] = useState("");
  useEffect(() => {
    getRecipesBySearch(searchTerm, restrictions, genre).then((res) => {
      // console.log(res);
      // console.log(res.results);
      setRecipeArray(res.results);
    });
  }, [searchTerm, restrictions, genre]);

  const updateSearchTerm = (query: string): void => {
    setSearchTerm(query);
  };
  const updateRestrictions = (query: string): void => {
    setRestrictions(query);
  };
  const updateGenre = (query: string): void => {
    setGenre(query);
  };
  const getAndSetRandomRecipe = () => {
    getRandomRecipe().then((res) => {
      setRecipeArray(res.recipes);
    });
  };
  return (
    <div className="Main">
      <SearchForm
        updateSearchTerm={updateSearchTerm}
        updateRestrictions={updateRestrictions}
        updateGenre={updateGenre}
      />
      <button className="random" onClick={getAndSetRandomRecipe}>
        Random Recipe
      </button>
      <ResultsList recipeArray={recipeArray} />
    </div>
  );
};

export default Main;
