import React from "react";

const InputCheckBox = (props: any) => {
  const { handleChange, options, values, name } = props;
  console.log(values);
  return (
    <div className="options-checkbox">
      <p className="text-bold">By Signal</p>

      <div>
        {options.map((option: any, index: number) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={option.value}
                name={name}
                checked={
                  values &&
                  values.length !== 0 &&
                  values.filter((value: any) => value === options.value)
                }
                onChange={handleChange}
                id={option.label}
              />
              <label htmlFor={option.label} className="form-check-label">
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputCheckBox;
