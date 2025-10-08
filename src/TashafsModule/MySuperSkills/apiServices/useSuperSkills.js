import { useState, useEffect } from "react";
import axios from "axios";

const useSuperSkills = (userCode, isLive, productionUrl) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [bg, setBg] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState("");

  const fetchSkills = () => {
    setIsLoading(true);
    axios
      .post(
        `${
          isLive ? productionUrl : ""
        }/noSessionViewSuperSkills?userCode=${userCode}`
      )
      .then((res) => {
        const superSkills = res?.data?.result?.[0]?.superSkills;
        setData(superSkills);
        if (superSkills && superSkills.length > 0) {
          const firstSkill = superSkills[0];
          setBg(firstSkill.bgImageURL);
          setQuestion(firstSkill.question);
          setAnswer(firstSkill.answer);
          setSelected(firstSkill._id);
        }
        setIsLoading(false);
      })
      .catch((err) => {
       // console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchSkills();
  }, [userCode, isLive, productionUrl]);

 
  return {
    isLoading,
    data,
    bg,
    question,
    answer,
    selected,
    fetchSkills,
    setBg,
    setQuestion,
    setAnswer,
    setSelected,
  };
};

export default useSuperSkills;
