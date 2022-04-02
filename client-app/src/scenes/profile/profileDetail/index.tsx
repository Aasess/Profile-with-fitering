import React from "react";

//COMPONENTS
import ProfileCard from "./profileCard";

//INTERFACE
import { IProfileDetailsProps, IProfileState } from "ts";

const ProfileDetail: React.FC<IProfileDetailsProps> = (
  props: IProfileDetailsProps
) => {
  const { data } = props;
  return (
    <div className="profile-detail">
      {data.map((profile: IProfileState, index: number) => (
        <ProfileCard data={profile} key={index} />
      ))}
    </div>
  );
};

export default ProfileDetail;
