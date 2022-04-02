import React from "react";

//COMPONENTS
import Status from "./status";
import Signal from "./signal";
import Source from "./source";

//INTERFACES
import { IProfileCardProps } from "ts";

const ProfileCard: React.FC<IProfileCardProps> = (props: IProfileCardProps) => {
  const { data } = props;

  return (
    <div className="profile-card card">
      <div className="card-status">
        <Status data={data.status} />
      </div>
      <div className="card-other-details">
        <div className="card-image">
          <Source data={data.photos} />
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
