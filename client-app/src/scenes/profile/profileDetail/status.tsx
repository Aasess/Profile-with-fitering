import React from "react";

//ENUM
import { StatusCode } from "enum";

const Status = (props: any) => {
  const { data } = props;
  return (
    <div
      className="card-status-color"
      // borderLeft: `60px solid ${StatusCode[data]}`,
      // borderRight: "20px solid transparent",
      // borderBottom: "54px solid transparent",
      // height: 0,
      // width: 0,
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
