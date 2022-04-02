import { ISignalValue, ISignalColorCode } from "ts";

export const SignalValue: ISignalValue = {
  1: "Ok",
  2: "Ok",
  3: "Solid",
  4: "Good",
  5: "Good",
};

export const SignalBgColorCode: ISignalColorCode = {
  Solid: "#F3AD63",
  Ok: "#0F60DA",
  Good: "#5FDBA7",
};

export const SignalTextCode: ISignalColorCode = {
  Solid: "#000",
  Ok: "#fff",
  Good: "#000",
};
