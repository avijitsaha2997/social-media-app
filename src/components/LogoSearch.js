import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";
function LogoSearch() {
  return (
    <div className="logoSearch">
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
        alt=""
      />
      <div className="search">
        <input type="text" placeholder="Search" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
