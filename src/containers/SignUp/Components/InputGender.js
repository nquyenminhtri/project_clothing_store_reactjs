import React from "react";
import { useDispatch } from "react-redux";
import { setGender } from "../../../redux/features/userSlice"; 

function InputGender({ value, onChange }) {
  const dispatch = useDispatch();

  const handleGenderChange = (e) => {
    dispatch(setGender(e.target.value));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="col-12 mb-3">
      <label htmlFor="gender">Gender <span>*</span></label>
      <select
        className="custom-select d-block w-100"
        id="gender"
        value={value}
        onChange={handleGenderChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default InputGender;
