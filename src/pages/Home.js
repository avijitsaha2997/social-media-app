import React from "react";
import "./Home.css";
import ProfileSide from "../components/ProfileSide";
import PostSide from "../components/PostSide";
function Home() {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <div className="rightSide">RightSide</div>
    </div>
  );
}

export default Home;
