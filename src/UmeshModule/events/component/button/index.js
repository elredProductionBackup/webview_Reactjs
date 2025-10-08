import classNames from "classnames";
import React from "react";
import "./index.scss";

function Button({ className, onClick, title }) {
  return (
    <button
      onClick={onClick}
      className={classNames("", "btn_cont", { [className]: className })}
    >
      {title}
    </button>
  );
}

export default Button;
