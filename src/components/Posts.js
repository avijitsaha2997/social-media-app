import React from "react";
import "./Posts.css";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePosts } from "../actions/PostAction";
function Posts() {
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className="posts">
      {loading
        ? "Fetching posts...."
        : posts?.map((post, id) => {
            return <Post data={post} id={id} key={Math.random()} />;
          })}
    </div>
  );
}

export default Posts;
