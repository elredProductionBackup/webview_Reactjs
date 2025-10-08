import React from "react";

const BackgroundFilter = ({ filterValues }) => {
  return (
    // <svg viewBox="0 0 600 400" width="0" height="0" style={{ display: "none" }}>
    <svg viewBox="0 0 600 400" width="0" height="0" style={{ position: "absolute", height: "0", width: "0" }}>
      <filter id="filter">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values={filterValues}
        />
      </filter>
    </svg>
  );
};

export default BackgroundFilter;
