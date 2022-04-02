import { ISignalOptions, IStatusOptions } from "../commonInterfaces";
import { ISourceValue } from "./profile";

export interface IInputProps {
  name: string;
  options: IStatusOptions[] | ISignalOptions[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IInputRadio extends IInputProps {
  value: string;
}

export interface IInputCheckBox extends IInputProps {
  values: any;
}
