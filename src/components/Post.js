import React from "react";
import "./Post.css";
import Comment from "../img/comment.png";
import Share from "../img/share.png";
import NotLike from "../img/notlike.png";
import { useSelector } from "react-redux";

function Post({ data }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <div className="post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          className="like"
          src={
            data.liked
              ? "https://cdn.pixabay.com/photo/2012/04/28/18/26/hearts-43887__340.png"
              : NotLike
          }
          alt=""
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
}

export default Post;
