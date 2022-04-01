interface IPhotos {
  source: string;
  url: string;
}

export interface IProfileState {
  firstName: string;
  lastName: string;
  photos: IPhotos[];
  signal: number;
  status: string;
}

export interface IProfileReducer {
  profile: IProfileState[];
}
