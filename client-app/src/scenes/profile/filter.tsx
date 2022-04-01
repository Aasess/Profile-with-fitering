import React, { FC, useState } from "react";

//ICONS
import { BiSearch } from "react-icons/bi";

import Select from "react-select";
import InputRadio from "components/inputRadio";
import InputCheckBox from "components/inputCheckBox";

const Filter = (props: any) => {
  const {
    statusOptions,
    signalOptions,
    sourceOptions,
    state,
    handleChange,
    handleChangeSelect,
  } = props;

  // React.useEffect(() => {
  //   console.log(state);
  // }, [state]);
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
          value={state.status}
        />

        <InputCheckBox
          handleChange={handleChange}
          options={signalOptions}
          name="signal"
          values={state.signal}
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
