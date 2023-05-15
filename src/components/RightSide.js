import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from "./TrendCard";
import ShareModal from "./ShareModal";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { Link } from "react-router-dom";

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
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

      <img
        className="loader"
        src={
          "https://cdn.dribbble.com/users/563824/screenshots/4268258/untitled_180_3.gif"
        }
        alt=""
      />

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}

export default RightSide;
