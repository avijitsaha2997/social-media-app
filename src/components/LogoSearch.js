import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";
function LogoSearch() {
  return (
    <div className="logoSearch">
      <img
        className="logo"
        src="https://cdn.pixabay.com/photo/2020/03/10/18/41/blue-4919864_960_720.png"
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
