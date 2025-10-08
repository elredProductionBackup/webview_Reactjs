import React from "react";
import "./index.scss";
import Header from "../../components/header/Header";
import MembersCard from "../component/card/MembersCard";
import amit from "../../../assets/images/events/chat/amit.png";
import brahmini from "../../../assets/images/events/chat/brahmini.png";
import nilima from "../../../assets/images/events/chat/nilima.png";
import rajesh from "../../../assets/images/events/chat/rajesh.png";
import sanjay from "../../../assets/images/events/chat/sanjay.png";
import sourabh from "../../../assets/images/events/chat/sourabh.png";
import trista from "../../../assets/images/events/chat/trista.png";

function Member() {
  const data = [
    {
      name: "Saurabh Goswamy",
      img: sourabh,
      status: "Accepted",
    },
    {
      name: "Amit Ramani",
      img: amit,
      status: "Accepted",
    },
    {
      name: "Brahmini Narra",
      img: brahmini,
      status: "Accepted",
    },
    {
      name: "Nilima Divi",
      img: nilima,
      status: "Accepted",
    },
    {
      name: "Rajesh Kharbanda",
      img: rajesh,
      status: "Accepted",
    },
    {
      name: "Sanjay Shah",
      img: sanjay,
      status: "Maybe",
    },
    {
      name: "Trista",
      img: trista,
      status: "Maybe",
    },
  ];
  return (
    <div className="main_conta">
      <Header title="Members" />
      <div className="members_cont">
        {data.map((item, index) => {
          return <MembersCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Member;
