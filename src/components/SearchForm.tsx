import { FormEvent, useState } from "react";
import "./SearchForm.css";

export interface Props {
  updateSearchTerm: (s: string) => void;
  updateRestrictions: (s: string) => void;
  updateGenre: (s: string) => void;
}

const SearchForm = ({
  updateSearchTerm,
  updateRestrictions,
  updateGenre,
}: Props) => {
  const [search, setSearch] = useState("");
  const [diet, setDiet] = useState("");
  const [type, setType] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    updateSearchTerm(search);
    updateRestrictions(diet);
    updateGenre(type);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <div className="search-bar">
        {" "}
        <button className="search-button">
          {" "}
          <span
            className="iconify search-icon"
            data-icon="akar-icons:search"
          ></span>
        </button>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <select
        name="diets"
        id="diets"
        onChange={(e) => setDiet(e.target.value)}
        value={diet}
      >
        {" "}
        <option className="sort" value="">
          Sort By Diet
        </option>
        <option value="vegetarian">Vegetarian</option>
        <option value="gluten-free">Gluten Free</option>
        <option value="ketogenic">Ketogenic</option>
      </select>
      <select
        name="type"
        id="type"
        onChange={(e) => setType(e.target.value)}
        value={type}
      >
        <option className="sort" value="">
          Sort By Type
        </option>
        <option value="breakfast">Breakfast</option>
        <option value="main-course">Main Course</option>
        <option value="appetizer">Appetizer</option>
        <option value="side-dish">Side Dish</option>
      </select>
    </form>
  );
};

export default SearchForm;
