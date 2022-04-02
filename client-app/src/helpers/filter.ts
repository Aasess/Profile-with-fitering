import { SignalValue } from "enum/signalCodeEnum";

export const onFilter = (state: any, profiles: any) => {
  let filteredSearch: any = [];
  let filteredStatus: any = [];
  let filteredSignal: any = [];
  let filteredSource: any = [];

  //if state has the original value the set the state to API original data
  if (
    state.status === "All" &&
    state.signal.length === 3 &&
    state.source.length === 0 &&
    state.search === ""
  ) {
    return profiles;
  } else {
    profiles.forEach((profile: any) => {
      if (
        profile?.firstName
          ?.toLowerCase()
          .indexOf(state.search?.toLowerCase()) >= 0 ||
        profile?.lastName?.toLowerCase().indexOf(state.search?.toLowerCase()) >=
          0
      ) {
        filteredSearch.push(profile);
      }
    });

    filteredSearch.forEach((profile: any) => {
      if (profile.status.toLowerCase() === state.status.toLowerCase()) {
        filteredStatus.push(profile);
      } else if (state.status === "All") {
        filteredStatus = filteredSearch;
      }
    });

    filteredStatus.forEach((profile: any) => {
      if (state.signal.length === 3) {
        filteredSignal = filteredStatus;
      } else {
        state.signal.forEach((signal: any) => {
          if (signal === SignalValue[profile.signal]) {
            filteredSignal.push(profile);
          }
        });
      }
    });

    filteredSignal.forEach((profile: any) => {
      if (state.source.length === 0) {
        filteredSource = filteredSignal;
      } else {
        let tempData: any = [];

        profile.photos?.forEach((image: any) => {
          state.source.forEach((value: any) => {
            if (value?.label?.toLowerCase() === image.source?.toLowerCase()) {
              tempData.push(image);
            }
          });
        });

        if (tempData.length !== 0) {
          filteredSource.push({ ...profile, photos: tempData });
        }
      }
    });

    return filteredSource;
  }
};
