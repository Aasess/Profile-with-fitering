import React, { FC } from "react";

//COMPONENTS
import Filter from "./filter";
import ProfileDetail from "./profileDetail";

const Profile: FC = () => {
  return (
    <div className="profile">
      <Filter />
      <ProfileDetail />
    </div>
  );
};

export default Profile;
