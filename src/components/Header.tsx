import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <span className="iconify diner" data-icon="cil:dinner"></span>
      </Link>
      <h1 className="good-eats">Good Eats</h1>
      <div className="favorites">
        <p className="faves">Favorites: </p>
        <Link to="/favorites">
          {" "}
          <span className="iconify heart" data-icon="akar-icons:heart"></span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
