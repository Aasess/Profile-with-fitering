import React, { FC, useState } from "react";

//ICONS
import { BiSearch } from "react-icons/bi";

import Select from "react-select";
import InputRadio from "components/inputRadio";
import InputCheckBox from "components/inputCheckBox";

const Filter = (props: any) => {
  const [state, setState] = useState<any>({
    search: "",
    status: "",
    signal: [], //since signal contains multiple values
    source: [],
  });
  const { statusOptions, signalOptions, sourceOptions } = props;

  const handleChange = (e: any) => {
    let newState = { ...state };
    //signal is a checkbox that contains multiple value
    if (e.target.name === "signal") {
      //if already checked then on click remove from the state
      if (newState[e.target.name].indexOf(e.target.value) >= 0) {
        let result = newState[e.target.name].filter(
          (signal: any) => signal != e.target.value
        );
        newState[e.target.name] = result;
      } else {
        //append the result
        newState[e.target.name] = [...newState[e.target.name], e.target.value];
      }
    }
    //if it is status then replace the value
    else {
      newState[e.target.name] = e.target.value;
    }

    setState(newState);
  };

  const handleChangeSelect = (values: any) => {
    let newState = { ...state };
    // const result = values.map((value: any) => value.value);
    newState["source"] = values;
    setState(newState);
  };

  return (
    <div className="profile-filter">
      <p className="text-bold">Filter</p>
      <div className="searchbar">
        <label htmlFor="search">
          <BiSearch className="searchbar-icon" />
        </label>
        <input
          type="search"
          autoComplete="off"
          placeholder="Search..."
          id="search"
          name="search"
          className="search"
          value={state.search}
          onChange={handleChange}
        />
      </div>
      <div className="profile-filter-options">
        <InputRadio
          handleChange={handleChange}
          options={statusOptions}
          name="status"
          values={state.status}
        />

        <InputCheckBox
          handleChange={handleChange}
          options={signalOptions}
          name="signal"
          value={state.signal}
        />
      </div>

      <div className="profile-filter-select">
        <p className="text-bold">By Source</p>
        <Select
          options={sourceOptions}
          isMulti
          isClearable
          className="select"
          value={state.source}
          onChange={(value) => handleChangeSelect(value)}
        />
      </div>
    </div>
  );
};

export default Filter;
