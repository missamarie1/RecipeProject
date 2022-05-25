import { ReactNode, useState } from "react";
import RecipeInformation from "../models/RecipeInformation";
import SearchResult from "../models/SearchResult";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

export default function FavoriteContextProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<SearchResult[]>([]);
  const addFav = (recipe: SearchResult): void => {
    console.log("test");
    setFavorites((prev) => {
      console.log("addFav works!", [...prev, recipe]);

      return [...prev, recipe];
    });
  };
  const deleteFav = (id: number) => {
    setFavorites((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const isThisFav = (id: number): boolean => {
    return favorites.some((fav) => {
      return fav.id === id;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFav, isThisFav, deleteFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
