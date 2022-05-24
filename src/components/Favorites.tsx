import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import Result from "./Result";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((fav) => (
          <Result key={fav.id} recipe={fav} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
