import React from "react";
import { useDispatch } from "react-redux";
import { setPhone } from "../../../redux/features/userSlice";

function InputPhone({ value, onChange }) {
  const dispatch = useDispatch();

  const handlePhoneChange = (e) => {
    dispatch(setPhone(e.target.value));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="col-12 mb-3">
      <label htmlFor="phone">Phone<span>*</span></label>
      <input
        type="number"
        className="form-control"
        id="phone"
        min="0"
        value={value}
        onChange={handlePhoneChange}
        required  
      />
    </div>
  );
}

export default InputPhone;
