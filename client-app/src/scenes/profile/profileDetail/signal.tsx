import React from "react";

//ENUMS
import {
  SignalBgColorCode,
  SignalTextCode,
  SignalValue,
} from "enum/signalCodeEnum";

//INTERFACES
import { ISignalProps } from "ts";

const Signal: React.FC<ISignalProps> = (props: ISignalProps) => {
  const { data } = props;
  const signalName = SignalValue[data];

  return (
    <div
      className="card-signal"
      style={{
        backgroundColor: `${SignalBgColorCode[signalName]}`,
        color: `${SignalTextCode[signalName]}`,
      }}
    >
      {signalName}
    </div>
  );
};

export default Signal;
