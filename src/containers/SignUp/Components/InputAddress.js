import React from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "../../../redux/features/userSlice";

function InputAddress({ value, onChange }) {
  const dispatch = useDispatch();

  const handleAddressChange = (e) => {
    dispatch(setAddress(e.target.value));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="col-12 mb-3">
      <label htmlFor="address">Address <span>*</span></label>
      <input
        type="text"
        className="form-control mb-3"
        id="address"
        value={value}
        onChange={handleAddressChange}
        required  
      />
    </div>
  );
}

export default InputAddress;
