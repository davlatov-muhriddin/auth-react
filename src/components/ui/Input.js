import React from "react";

function Input({ type, placeholder, state, setState }) {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      className="form-control mb-3"
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export default Input;
