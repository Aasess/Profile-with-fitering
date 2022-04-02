import React from "react";

//COMPONENTS
import ProfileCard from "./profileCard";

const ProfileDetail = (props: any) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="profile-detail">
      {data.map((profile: any, index: number) => (
        <ProfileCard data={profile} key={index} />
      ))}
    </div>
  );
};

export default ProfileDetail;
