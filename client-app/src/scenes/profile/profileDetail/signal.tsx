import React from "react";
import {
  SignalBgColorCode,
  SignalTextCode,
  SignalValue,
} from "enum/signalCodeEnum";

const Signal = (props: any) => {
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
