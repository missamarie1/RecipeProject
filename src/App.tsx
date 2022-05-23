import "./App.css";
import {
  getRandomRecipe,
  getRecipesBySearch,
} from "./services/spoonacularService";

function App() {
  getRecipesBySearch().then((res) => {
    console.log(res.results);
  });
  getRandomRecipe().then((res) => {
    console.log(res.recipes);
  });
  return <div className="App"></div>;
}

export default App;
