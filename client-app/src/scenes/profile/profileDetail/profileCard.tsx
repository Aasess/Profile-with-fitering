import React from "react";

//COMPONENTS
import Status from "components/status";

const ProfileCard = (props: any) => {
  const { data } = props;

  return (
    <div className="profile-card card">
      <div className="card-status">
        <Status data={data.status} />
      </div>
    </div>
  );
};

export default ProfileCard;
