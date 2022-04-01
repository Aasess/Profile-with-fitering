import React, { FC, useState, useEffect } from "react";

//COMPONENTS
import Filter from "./filter";
import ProfileDetail from "./profileDetail";

//REUDX
import { fetchProfileData } from "store/actions/profileActions";
import { useDispatch, useSelector } from "react-redux";

//INTERFACE
import { rootStateProps } from "ts";

const Profile: FC = () => {
  const dispatch: Function = useDispatch();

  const statusOptions = [
    { label: "Active", value: "0" },
    { label: "Inactive", value: "1" },
    { label: "All", value: "2" },
  ];

  const signalOptions = [
    { label: "Solid", value: "0" },
    { label: "Good", value: "1" },
    { label: "Ok", value: "2" },
  ];

  const sourceOptions = [
    { label: "Google", value: 0 },
    { label: "Linkedin", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Twitter", value: 3 },
    { label: "Office365", value: 4 },
  ];

  const { profile } = useSelector(
    (state: rootStateProps) => state.profileReducer
  );

  useEffect(() => {
    //on load call the get api
    dispatch(fetchProfileData("users.json"));
  }, [dispatch]);

  return (
    <div className="profile">
      <Filter
        statusOptions={statusOptions}
        signalOptions={signalOptions}
        sourceOptions={sourceOptions}
      />
      <ProfileDetail data={profile} />
    </div>
  );
};

export default Profile;
