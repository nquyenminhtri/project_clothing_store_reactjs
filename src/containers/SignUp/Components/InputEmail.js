import React from "react";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../redux/features/userSlice";

function InputEmail({ value, onChange }) {
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="col-12 mb-4">
      <label htmlFor="email">Email address <span>*</span></label>
      <input
        type="email"
        className="form-control"
        id="email_address"
        value={value}
        onChange={handleEmailChange}
        required  
      />
    </div>
  );
}

export default InputEmail;
