import React from "react";
import "./index.scss";

function TextInput({
  value,
  onChange,
  label,
  placeholder,
  error = "",
  name,
  img,
  ...props
}) {

  return (
    <div>
      {label ? <p className="input-lable">{label}</p> : null}
      <div className="d-flex inpu_icon_cont">
        <input
          name={name}
          className="input-container"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {img ? <img src={img} alt="" className="input_image" /> : null}
      </div>

      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default TextInput;
