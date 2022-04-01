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

  const { profile } = useSelector(
    (state: rootStateProps) => state.profileReducer
  );

  useEffect(() => {
    console.log("I am called twice");
    dispatch(fetchProfileData("users.json"));
  }, [dispatch]);

  return (
    <div className="profile">
      <Filter />
      <ProfileDetail />
    </div>
  );
};

export default Profile;
