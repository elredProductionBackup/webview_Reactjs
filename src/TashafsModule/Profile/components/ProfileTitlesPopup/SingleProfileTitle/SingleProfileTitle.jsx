import { useRef } from "react";
import { transformText } from "../../../../../globalFunctions";

const SingleProfileTitle = ({ title, index, titlesArray, titlesContainerWidth }) => {
    const titleRef = useRef(null);

    return (
        <span ref={titleRef} className={titleRef?.current?.offsetWidth + 1 > titlesContainerWidth ? 
            "titles-popup-title break-titles-popup-title" : "titles-popup-title"}>
            {index === titlesArray?.length - 1 ? 
            transformText(title?.value) : transformText(title?.value) + " | "}
        </span>
    )
}

export default SingleProfileTitle;