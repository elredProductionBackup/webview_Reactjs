import React, { useEffect, useState } from "react";
import "./mysuperskills.scss";
import back from "../../assets/images/backpage.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import MySuperSkillsShimmer from "./MySuperSkillsShimmer/MySuperSkillsShimmer";
import useSuperSkills from "./apiServices/useSuperSkills";
import MySuperSkillsContainer from "./MySuperSkillsContainer/MySuperSkillsContainer";
import { clearToasts } from "react-simple-toasts";

const MySuperSkills = ({ isLive, productionUrl }) => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const [activeImageId, setActiveimageId] = useState(0);

  const { isLoading, data, bg, question, answer, selected, fetchSkills, setBg,
    setQuestion, setAnswer, setSelected } = useSuperSkills(userCode, isLive, productionUrl);

  const setActive = (data, id) => {
    setBg(data?.bgImageURL)
    setQuestion(data.question);
    setAnswer(data.answer);
    setSelected(data?._id);
    setActiveimageId(id);
  };

  useEffect(() => {
    clearToasts();
  }, []);

  return (
    <>
      {isLoading ?
        <MySuperSkillsShimmer color={"#242939"} highlightColor="#1e212b" /> :
        <MySuperSkillsContainer navigate={navigate} back={back} bg={bg} question={question}
          answer={answer} data={data} selected={selected} setActive={setActive} activeImageId={activeImageId} />}
    </>
  );
};

export default MySuperSkills;
