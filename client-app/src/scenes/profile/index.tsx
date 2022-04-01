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
import { SignalValue } from "enum/signalCodeEnum";
import { valueContainerCSS } from "react-select/dist/declarations/src/components/containers";

const Profile: FC = () => {
  const dispatch: Function = useDispatch();

  const [state, setState] = useState<any>({
    search: "",
    status: "all",
    signal: ["Good"], //since signal contains multiple values
    source: [],
  });

  const [profileData, setProfileData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { profiles } = useSelector(
    (state: rootStateProps) => state.profileReducer
  );

  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "All", value: "all" },
  ];

  const signalOptions = [
    { label: "Solid", value: "Solid" },
    { label: "Good", value: "Good" },
    { label: "Ok", value: "Ok" },
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
      // filterReport(e.target.name, e.target.value);
    }

    setState(newState);
  };

  const handleChangeSelect = (values: any) => {
    let newState = { ...state };
    // const result = values.map((value: any) => value.value);
    newState["source"] = values;
    setState(newState);
    // filterReport("source", values);
  };

  // const filterReport = (name: string, values: any) => {
  //   var filteredData: any = [];
  //   if (name === "source") {
  //     profiles.forEach((profile: any) => {
  //       var tempData: any = [];
  //       profile.photos.forEach((image: any) => {
  //         values.forEach((value: any) => {
  //           if (value?.label?.toLowerCase() === image.source?.toLowerCase()) {
  //             tempData.push(image);
  //           }
  //         });
  //       });
  //       if (tempData.length !== 0) {
  //         filteredData.push({ ...profile, photos: tempData });
  //       }
  //     });
  //     if (filteredData.length === 0) {
  //       filteredData = [...profiles];
  //     }
  //     compareFilterData("source", filteredData);
  //   } else if (name === "search") {
  //     profiles.forEach((profile: any) => {
  //       if (
  //         profile.firstName?.toLowerCase().indexOf(values.toLowerCase()) >= 0 ||
  //         profile.lastName?.toLowerCase().indexOf(values.toLowerCase()) >= 0
  //       ) {
  //         filteredData.push(profile);
  //       }
  //     });
  //     // if (filteredData.length === 0) {
  //     //   filteredData = [...profileData];
  //     // }
  //     compareFilterData("search", filteredData);
  //   }
  // };

  // const compareFilterData = (name: string, filteredData: any) => {
  //   // console.log("compare only " + name + "of " + profileData, filteredData);
  //   console.log("profile Data", profileData, "filtered data", filteredData);
  //   //if length of profileData is same as API result then we can directly set filtered value
  //   if (filteredData.length === profiles.length) {
  //     setProfileData(filteredData);
  //   } else if (profileData.length === 0) {
  //     setProfileData(filteredData);
  //   } else {
  //     let hawaData: any = [];
  //     // if (name === "search") {
  //     profileData.forEach((fProfile: any) => {
  //       var tempData: any = [];
  //       filteredData.forEach((profile: any) => {
  //         if (
  //           fProfile.firstName === profile.firstName &&
  //           fProfile.lastName === profile.lastName
  //         ) {
  //           tempData.push(profile);
  //         }
  //       });
  //       if (tempData.length !== 0) {
  //         hawaData.push(...tempData);
  //       }
  //       // hawaData.push(tempData);
  //     });
  //     // }
  //     // if(name==="source"){
  //     //   profileData.forEach((fProfile:any) =>{
  //     //     var tempData:any = []

  //     //   })
  //     // }
  //     setProfileData(hawaData);
  //   }
  //   // if (state.search === "" && state.source.length === 0) {
  //   //   setProfileData(profiles);
  //   // }
  // };

  useEffect(() => {
    setIsLoading(true);
    //on load call the get api
    dispatch(fetchProfileData("users.json"));
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    setProfileData(profiles);
  }, [profiles]);

  useEffect(() => {
    testahileLai();
  }, [state]);

  const testahileLai = async () => {
    let tempData: any = [];
    let tempData2: any = [];
    let tempData3: any = [];
    let tempData4: any = [];

    if (
      state.status === "all" &&
      state.signal[0] === "Good" &&
      state.source.length === 0 &&
      state.search === ""
    ) {
      console.log("I am empty ");
      setProfileData(profiles);
    } else {
      //yo vayo search ko lagi
      await profiles.forEach((profile: any) => {
        if (
          profile?.firstName
            ?.toLowerCase()
            ?.indexOf(state.search?.toLowerCase()) >= 0 ||
          profile?.lastName
            ?.toLowerCase()
            ?.indexOf(state.search?.toLowerCase()) >= 0
        ) {
          tempData.push(profile);
        }
      });

      // console.log(tempData);
      //note yedi tempData ko value or length yesmai null aaucha vane sakiyo check garna parena
      //yo aba status ko lagi
      // tempData = tempData.filter(
      //   (profile: any) =>
      //     state?.status?.toLowerCase() === profile?.status?.toLowerCase()
      //   //active
      // );

      await tempData.forEach((profile: any) => {
        if (profile.status === state.status) {
          tempData2.push(profile);
        } else if (state.status === "all") {
          tempData2 = tempData;
        }
      });

      await tempData2.forEach((profile: any) => {
        // console.log(state.signal);
        if (state.signal.length === 3) {
          tempData3 = tempData2;
        } else {
          state.signal.forEach((signal: any) => {
            if (signal === SignalValue[profile.signal]) {
              tempData3.push(profile);
            }
          });
        }
      });

      await tempData3.forEach((profile: any) => {
        if (state.source.length === 0) {
          tempData4 = tempData3;
        } else {
          let tempData5: any = [];
          // console.log(profile)
          profile.photos?.forEach((image: any) => {
            state.source.forEach((value: any) => {
              if (value?.label?.toLowerCase() === image.source?.toLowerCase()) {
                tempData5.push(image);
              }
            });
          });
          // console.log(tempData5);
          if (tempData5.length !== 0) {
            tempData4.push({ ...profile, photos: tempData5 });
          }
        }
      });
      setProfileData(tempData4);
    }

    //signal ko lagi aba

    console.log(tempData, tempData2, tempData3, tempData4);
  };

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
