import React from "react";
import SearchBar from "../SearchBar/SearchBar";
//import styles from "../SearchBar/SearchBar.modules.css";
import { Link } from "react-router-dom";
import style from "../Nav/Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div>
      <nav>
        <SearchBar onSearch={onSearch} />
        <Link to="/about">
          <button className={style.botonNav} id={style.about}>
            About
          </button>
        </Link>

        <Link to="/home">
          <button className={style.botonNav} id={style.about2}>
            Home
          </button>
        </Link>
        <Link to="/Favorites">
          <button className={style.botonNav}>Favorites</button>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
