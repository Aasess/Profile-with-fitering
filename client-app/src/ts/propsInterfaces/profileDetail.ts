import { IProfileState } from "../interfaces/reducer";
import { IPhotos } from "../interfaces/reducer";

export interface IProfileDetailsProps {
  data: IProfileState[];
}

export interface IProfileCardProps {
  data: IProfileState;
}

export interface ISignalProps {
  data: number;
}

export interface ISourceProps {
  data: IPhotos[];
}

export interface IStatusProps {
  data: string;
}
