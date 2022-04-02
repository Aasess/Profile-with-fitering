import React from "react";

//ICONS
import { AiOutlineTable } from "react-icons/ai";

const NoDataFound = () => {
  return (
    <div className="data-not-found">
      <AiOutlineTable className="data-not-found-image" />
      <span>No Data Found</span>
      <h3>Please Select Desired Filter</h3>
    </div>
  );
};

export default NoDataFound;
