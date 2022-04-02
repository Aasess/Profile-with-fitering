import React from "react";

//INTERFACES
import { IInputRadio, IStatusOptions } from "ts";

const InputRadio: React.FC<IInputRadio> = (props: IInputRadio) => {
  const { handleChange, options, value, name } = props;

  return (
    <div className="options-radio">
      <p className="text-bold">By Status</p>
      <div>
        {options.map((option: IStatusOptions, index: number) => {
          return (
            <div key={index} className="input-select">
              <input
                type="radio"
                value={option.value}
                name={name}
                checked={value && option.value == value}
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

export default InputRadio;
