import React from "react";

//ENUM
import { StatusCode } from "enum";

//INTERFACE
import { IStatusProps } from "ts";

const Status: React.FC<IStatusProps> = (props: IStatusProps) => {
  const { data } = props;
  return (
    <div
      className="card-status-color"
      style={{
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "50px 50px 0 0",
        borderColor: `${StatusCode[data]} transparent transparent transparent`,
      }}
    ></div>
  );
};

export default Status;
