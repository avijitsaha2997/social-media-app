import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "./ProfileModal";
import React, { useEffect, useState } from "react";
import "./InfoCard.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../api/UserRequests";
import { logout } from "../actions/AuthAction";

const InfoCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
        console.log(user);
      } else {
        console.log("fetching");
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <span>
          <b>Works at - </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in - </b>
        </span>
        <span>
          {profileUser.country}, {profileUser.livesIn}
        </span>
      </div>

      <div className="info">
        <span>
          <b>Relationship Status - </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>

      <button className="button logout-button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
