import React from "react";

//INTERFACES
import { IInputCheckBox, ISignalOptions } from "ts";
const InputCheckBox: React.FC<IInputCheckBox> = (props: IInputCheckBox) => {
  const { handleChange, options, values, name } = props;

  return (
    <div className="options-checkbox">
      <p className="text-bold">By Signal</p>

      <div>
        {options.map((option: ISignalOptions, index: number) => {
          const checkedData = values.filter((value: any) => {
            return value === option.value;
          });

          return (
            <div key={index} className="input-select">
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
