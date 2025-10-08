import React from "react";
import { useNavigate } from "react-router-dom";

function CardHeader({ loading, data, userCode, networkCode }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between" style={{ marginBottom: "15px" }}>
      <p className="section_test_text mb-0">Comments</p>
      {!loading && data.length ? (
        <div
          className="btn-see-more"
          onClick={() => navigate(userCode ?  `comments?userCode=${userCode}` : `/network-comments?networkCode=${networkCode}`)}>
          See all
        </div>
      ) : null}
    </div>
  );
}

export default CardHeader;
