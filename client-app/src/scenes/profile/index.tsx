import React, { FC, useState, useEffect } from "react";

//COMPONENTS
import Filter from "./filter";
import ProfileDetail from "./profileDetail";
import BeatLoader from "react-spinners/BeatLoader";

//REUDX
import { fetchProfileData } from "store/actions/profileActions";
import { useDispatch, useSelector } from "react-redux";

//INTERFACE
import { rootStateProps } from "ts";

const Profile: FC = () => {
  const dispatch: Function = useDispatch();

  const [state, setState] = useState<any>({
    search: "",
    status: "2",
    signal: [], //since signal contains multiple values
    source: [],
  });

  const [profileData, setProfileData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { profile } = useSelector(
    (state: rootStateProps) => state.profileReducer
  );

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

  const handleChange = (e: any) => {
    let newState = { ...state };
    //signal is a checkbox that contains multiple value
    if (e.target.name === "signal") {
      //if already checked then on click remove from the state
      if (newState[e.target.name].indexOf(e.target.value) >= 0) {
        let result = newState[e.target.name].filter(
          (signal: any) => signal != e.target.value
        );
        newState[e.target.name] = result;
      } else {
        //append the result
        newState[e.target.name] = [...newState[e.target.name], e.target.value];
      }
    }
    //if it is status or search then replace the value
    else {
      newState[e.target.name] = e.target.value;
    }

    setState(newState);
  };

  const handleChangeSelect = (values: any) => {
    let newState = { ...state };
    // const result = values.map((value: any) => value.value);
    newState["source"] = values;
    setState(newState);
  };

  useEffect(() => {
    setIsLoading(true);
    //on load call the get api
    dispatch(fetchProfileData("users.json"));
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    setProfileData(profile);
  }, [profile]);
  return (
    <>
      <div className="loader">
        <BeatLoader color="blue" loading={isLoading} />
      </div>

      <div className="profile">
        <Filter
          statusOptions={statusOptions}
          signalOptions={signalOptions}
          sourceOptions={sourceOptions}
          state={state}
          handleChange={handleChange}
          handleChangeSelect={handleChangeSelect}
        />
        <ProfileDetail data={profileData} />
      </div>
    </>
  );
};

export default Profile;
