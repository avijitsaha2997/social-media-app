import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../actions/UserAction";

function User({ person }) {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState();

  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  useEffect(() => {
    const data = person.followers.includes(user._id);
    setFollowing(data);
  }, []);

  return (
    <div className="follower" key={Math.random()}>
      <div>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : "https://cdn-icons-png.flaticon.com/512/1057/1057231.png "
          }
          alt=""
          className="followerImage"
        />
        <div className="name">
          <span>
            {person.firstname} {person.lastname}
          </span>
        </div>
      </div>
      <button className="button fc-button" onClick={handleFollow}>
        {" "}
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default User;
