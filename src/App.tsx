import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import RecipeInformation from "./models/RecipeInformation";
import {
  getRandomRecipe,
  getRecipesBySearch,
} from "./services/spoonacularService";

function App() {
  // const [recipe, setRecipe] = useState<RecipeInformation>();
  // getRecipesBySearch().then((res) => {});
  // getRandomRecipe().then((res) => {});
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
