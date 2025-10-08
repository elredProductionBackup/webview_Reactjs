import { useState } from "react"
import bluetick from "../../../../assets/images/blue_tick.svg"
import { calcTextLength } from "../../../../globalFunctions"
import Skeleton from "react-loading-skeleton";
import css from '../../../../App.scss'
const ProfileBioAwardList = ({ item, viewAward, userCode, navigate }) => {
    const [awardIconLoader, setAwardIconLoader] = useState(true)
    return (
        <div className="list-item"
            onClick={() => viewAward(item, userCode, navigate)} >
            <div className={awardIconLoader ? "d-none" : "logo-div"}>
                <img src={item?.awardIconURL} alt="" 
                onLoad={() => setAwardIconLoader(false)}
                 />
            </div>
            <div className={awardIconLoader ? "logo-div-shimmer" : "d-none"}>
                <Skeleton width={44} height={44} baseColor={css.theme_shimmer} highlightColor="#1e212b"/>
            </div>
            <div className="description-div">
                <div className="title1">{item?.awardTitle}</div>
                <div className="subtitle-div">
                    <div className={item?.issuedOrgVerifiedStatus ? "subtitle1" : "subtitle1 subtitle_withoutBlue1"}>Issued by : {calcTextLength(item?.issuedBy.length, item?.issuedBy)}</div>
                    <div className="bluetick">
                        {item?.issuedOrgVerifiedStatus && (
                            <img src={bluetick} alt="" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBioAwardList