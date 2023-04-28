import React, { useState } from "react";
import "./RightSide.css";
import Home from "../img/home.png";
import Noti from "../img/noti.png";
import Comment from "../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "./TrendCard";
// import TrendCard from "../TrendCard/TrendCard";
// import ShareModal from "../ShareModal/ShareModal";
function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <img
          src={
            "https://icon-library.com/images/white-house-icon-png/white-house-icon-png-26.jpg"
          }
          alt=""
        />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
    </div>
  );
}

export default RightSide;
