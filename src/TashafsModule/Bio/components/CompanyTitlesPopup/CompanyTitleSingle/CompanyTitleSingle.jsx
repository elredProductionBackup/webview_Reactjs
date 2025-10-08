import { useEffect, useRef, useState } from "react";
import { transformText } from "../../../../../globalFunctions";

const CompanyTitleSingle = ({ title, index, titlesArray, titlesContainerWidth }) => {
    const titleRef = useRef(null);
    const [titleWidth, setTitleWidth] = useState(titleRef?.current?.offsetWidth + 1);

    useEffect(() => {
        setTitleWidth(titleRef?.current?.offsetWidth + 1);
    }, []);

    return (
        <span ref={titleRef} className={titleWidth > titlesContainerWidth ? 
            "company-titles-popup-title break-company-titles-popup-title" : "company-titles-popup-title"}>
            {index === titlesArray?.length - 1 ? transformText(title) : transformText(title) + " | "}
        </span>
    )
}

export default CompanyTitleSingle;