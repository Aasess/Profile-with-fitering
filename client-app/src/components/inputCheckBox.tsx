import React from "react";

const InputCheckBox = (props: any) => {
  const { handleChange, options, values, name } = props;
  // console.log(values, options);
  return (
    <div className="options-checkbox">
      <p className="text-bold">By Signal</p>

      <div>
        {options.map((option: any, index: number) => {
          const checkedData = values.filter((value: any) => {
            return value === option.value;
          });

          return (
            <div key={index}>
              <input
                type="checkbox"
                value={option.value}
                name={name}
                checked={checkedData.length > 0 ? checkedData[0] : false}
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
