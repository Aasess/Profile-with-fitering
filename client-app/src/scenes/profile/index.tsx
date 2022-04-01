import React, { FC, useEffect } from "react";

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
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  const signalOptions = [
    { label: "Solid", value: "Solid" },
    { label: "Good", value: "Good" },
    { label: "Ok", value: "Ok" },
  ];

  const sourceOptions = [
    { label: "google", value: 0 },
    { label: "linkedin", value: 1 },
    { label: "facebook", value: 2 },
    { label: "twitter", value: 3 },
    { label: "office365", value: 4 },
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
      <ProfileDetail />
    </div>
  );
};

export default Profile;
