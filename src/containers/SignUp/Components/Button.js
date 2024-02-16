import React from "react";

function Button({ label, onClick, disabled }) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
