import React from "react";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <OtherHousesOutlinedIcon />
      </Link>
      <SettingsOutlinedIcon />
      <IosShareOutlinedIcon />
      <Link to="../chat">
        <ForumOutlinedIcon />
      </Link>
    </div>
  );
};

export default NavIcons;
