import React, { FC, useState, useEffect } from "react";

//COMPONENTS
import Filter from "./filter";
import ProfileDetail from "./profileDetail";
import BeatLoader from "react-spinners/BeatLoader";
import NoDataFound from "components/noDataFound";
//REUDX
import { fetchProfileData } from "store/actions/profileActions";
import { useDispatch, useSelector } from "react-redux";

//HELPERS
import { onFilter } from "helpers/filter";
import { sortObj } from "helpers/sortObj";

//INTERFACE
import {
  rootStateProps,
  ProfileState,
  IProfileState,
  IStatusOptions,
  ISignalOptions,
  ISourceOptions,
} from "ts";

const statusOptions: IStatusOptions[] = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "All", value: "All" },
];

const signalOptions: ISignalOptions[] = [
  { label: "Solid", value: "Solid" },
  { label: "Good", value: "Good" },
  { label: "Ok", value: "Ok" },
];

const sourceOptions: ISourceOptions[] = [
  { label: "Google", value: 0 },
  { label: "Linkedin", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Twitter", value: 3 },
  { label: "Office365", value: 4 },
];

const Profile: FC = () => {
  const dispatch: Function = useDispatch();

  const [state, setState] = useState<ProfileState>({
    search: "",
    status: "All",
    signal: ["Solid", "Good", "Ok"], //since signal contains multiple values
    source: [],
  });

  const [profileData, setProfileData] = useState<IProfileState[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { profiles } = useSelector(
    (state: rootStateProps) => state.profileReducer
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let newState: ProfileState | any = { ...state };
    //signal is a checkbox that contains multiple value
    if (e.target.name === "signal") {
      //if already checked then on click remove from the state
      if (newState[e.target.name].indexOf(e.target.value) >= 0) {
        let result = newState[e.target.name].filter(
          (signal: string) => signal != e.target.value
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

  const handleChangeSelect = (values: [] | string[]): void => {
    let newState: ProfileState | any = { ...state };
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
    const sortedProfile: IProfileState[] = profiles.map(
      (profile: IProfileState) => {
        const sortedarr = profile.photos.sort(sortObj);
        return { ...profile, photos: [...sortedarr] };
      }
    );
    setProfileData(sortedProfile);
  }, [profiles]);

  useEffect(() => {
    const filteredData = onFilter(state, profiles);
    setProfileData(filteredData);
  }, [state]);

  return (
    <>
      <div className="loader">
        <BeatLoader color="#005CC8" loading={isLoading} />
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
        {!isLoading && profileData.length === 0 ? (
          <NoDataFound />
        ) : (
          <ProfileDetail data={profileData} />
        )}
      </div>
    </>
  );
};

export default Profile;
