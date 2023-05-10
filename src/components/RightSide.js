import React, { useState } from "react";
import "./RightSide.css";
import Home from "../img/home.png";
import Noti from "../img/noti.png";
import Comment from "../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "./TrendCard";
import ShareModal from "./ShareModal";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
// import TrendCard from "../TrendCard/TrendCard";
// import ShareModal from "../ShareModal/ShareModal";
function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <OtherHousesOutlinedIcon />
        <SettingsOutlinedIcon />
        {/* <ShareOutlinedIcon /> */}
        <IosShareOutlinedIcon />
        <ForumOutlinedIcon />
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
