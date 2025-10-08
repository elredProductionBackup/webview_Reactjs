import React, { useState } from 'react'
import NoDataText from '../../NoDataText/NoDataText'
import { navigateToResume } from '../../../bioGlobalFunctions'
import Skeleton from 'react-loading-skeleton'
import shimmer from '../../../../../assets/images/shimmer.png'
import { Spinner } from 'react-bootstrap'
import bloodDrop from "../../../../../assets/images/noto_drop-of-blood.svg"
import ReactLinkifyComp from '../../../../Profile/components/ReactLinkifyComp/ReactLinkifyComp'
const AboutContainer = ({ bio, logo, next, navigate, userCode }) => {
  const [resumeImg, setresumeImg] = useState(true)
  const [resumeBackImg, setresumeBackImg] = useState(true)

  return (
    <>
      <div className="about-me">
        <div className="title">About me</div>


        {(bio?.aboutUser == "  " || bio?.aboutUser == "") ? (
          <NoDataText msg={"No about me added yet"} />
        ) :

          <div className="desc_cover">
            <div className="desc">
              <div className="desc_wrapper">
                <div className="desc_content">
                  <ReactLinkifyComp data={bio?.aboutUser} />
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <div className="resume-div" onClick={() =>
        navigateToResume(userCode, bio, navigate, '/my-bio/resume-view')}>
        <div className="resume">

          <Spinner animation="border" variant="light" size="sm" className={resumeImg ? 'showing-img-loader resume-loader' : "hiding-img-loader "} />
          <img src={logo} alt="" onLoad={() => setresumeImg(false)} className={!resumeImg ? 'showing-img-loader' : "hiding-img-loader "} />
          <div className="title">Resume</div>
        </div>
        <Spinner animation="border" variant="light" size="sm" className={resumeBackImg ? 'showing-img-loader' : "hiding-img-loader "} />

        <div className={!resumeBackImg ? 'icon showing-img-loader' : "hiding-img-loader "}>

          <img src={next} alt="" onLoad={() => setresumeBackImg(false)} className="resume-right-icon" />
        </div>
      </div>

      <div className="blood-group">
        <div className="blood-group-left">
          <span className="blood-group-left-img"><img src={bloodDrop} alt="" /></span>
          <div className="title">Blood group</div>
        </div>
        <div className="desc">
          {bio?.bloodGroup !== "" ?
            bio?.bloodGroup?.slice(-1) == "+"
              ? <span className="bloodgroup-text-red">{bio?.bloodGroup} (Positive)</span>
              : <span className="bloodgroup-text-red">{bio?.bloodGroup} (Negative)</span>
            : <hr className="bloodgroup-text-white" />
          }

        </div>
      </div>
    </>
  )
}

export default AboutContainer
