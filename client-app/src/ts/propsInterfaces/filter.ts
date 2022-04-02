import React from "react";
import {
  IStatusOptions,
  ISignalOptions,
  ISourceOptions,
} from "../commonInterfaces";
import { ProfileState } from "./profile";
export interface IFilterProps {
  statusOptions: IStatusOptions[];
  signalOptions: ISignalOptions[];
  sourceOptions: ISourceOptions[];
  state: ProfileState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSelect: (values: [] | string[]) => void;
}
