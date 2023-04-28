import React from "react";
import LogoSearch from "./LogoSearch";
import FollowersCard from "./FollowersCard";
import InfoCard from "./InfoCard";
import "./ProfileLeft.css";
function ProfileLeft() {
  return (
    <div className="profileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
}

export default ProfileLeft;
