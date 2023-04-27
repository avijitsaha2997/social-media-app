import React from "react";
import "./PostSide.css";
import PostShare from "./PostShare";
import Post from "./Posts";
function PostSide() {
  return (
    <div className="postSide">
      <PostShare />
      <Post />
    </div>
  );
}

export default PostSide;
