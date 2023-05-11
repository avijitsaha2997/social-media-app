import React from "react";
import LogoSearch from "./LogoSearch";
import ProfileCard from "./ProfileCard";
import "./ProfileSide.css";
import FollowersCard from "./FollowersCard";
function ProfileSide() {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard location={"homePage"} />
      <FollowersCard />
    </div>
  );
}

export default ProfileSide;
