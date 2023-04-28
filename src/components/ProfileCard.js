import React from "react";
import "./ProfileCard.css";
function ProfileCard() {
  const ProfilePage = true;
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/721c896d-b5ec-42fd-ba05-037c4b0df524/d4pzrbs-84be116e-05c9-4ca8-babf-a6a53ccfd544.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyMWM4OTZkLWI1ZWMtNDJmZC1iYTA1LTAzN2M0YjBkZjUyNFwvZDRwenJicy04NGJlMTE2ZS0wNWM5LTRjYTgtYmFiZi1hNmE1M2NjZmQ1NDQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aHFQL0F40oh7VZgjG2KAEtyGJogVuGV1zlDFX3ICUN8"
          alt=""
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1057/1057231.png"
          alt=""
        />
      </div>

      <div className="profileName">
        <span>Avijit Saha</span>
        <span>Software Enginner</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
}

export default ProfileCard;
