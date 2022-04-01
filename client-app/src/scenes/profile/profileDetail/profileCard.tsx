import React from "react";

//COMPONENTS
import Status from "./status";
import Signal from "./signal";

const ProfileCard = (props: any) => {
  const { data } = props;

  return (
    <div className="profile-card card">
      <div className="card-status">
        <Status data={data.status} />
      </div>
      <div className="card-other-details">
        <div className="card-image">
          <div className="card-image__display">
            <img
              src="https://user-images.githubusercontent.com/19557538/160559733-5e9f673e-0eb3-4990-b787-511c43f7aa91.png"
              alt="person"
            />
          </div>
        </div>
        <div className="card-name">
          <p>{`${data.firstName ? data.firstName : ""} ${
            data.lastName ? data.lastName : ""
          }`}</p>
        </div>
        <Signal data={data.signal} />
      </div>
    </div>
  );
};

export default ProfileCard;
