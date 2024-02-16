import React from "react";
import { useDispatch } from "react-redux";
import { setPassword } from "../../../redux/features/userSlice"; 

function InputPassword({ value, onChange }) {
  const dispatch = useDispatch();

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="col-12 mb-3">
      <label htmlFor="name">Password <span>*</span></label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={value}
        onChange={handlePasswordChange}
        required
      />
    </div>
  );
}

export default InputPassword;