import React from "react";
import { useDispatch } from "react-redux";
import { setName } from "../../../redux/features/userSlice"; 

function InputName({ value, onChange }) {
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="col-md-6 mb-3">
      <label htmlFor="name">Full Name <span>*</span></label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={value}
        onChange={handleNameChange}
        required
      />
    </div>
  );
}

export default InputName;