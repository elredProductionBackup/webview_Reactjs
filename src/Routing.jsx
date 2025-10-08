import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./TashafsModule/Profile/Profile";
import Testimonal from "./UmeshModule/Testimonial/Testimonal";
import TestimonaDetails from "./UmeshModule/Testimonial/TestimonalDetails/TestimonalDetails";
import MySuperSkills from "./TashafsModule/MySuperSkills/MySuperSkills";
import Bio from "./TashafsModule/Bio/Bio";
import ResumeView from "./TashafsModule/Bio/pages/ResumeView/ResumeView";
import AwardView from "./TashafsModule/Bio/pages/AwardView/AwardView";
import ViewAllAwards from "./TashafsModule/Bio/pages/ViewAllAwards/ViewAllAwards";
import ShareCard from "./TashafsModule/ShareCard/ShareCard";
import Comments from "./UmeshModule/comments/Comments";
import CertificateView from "./TashafsModule/Bio/pages/CertificateView/CertificateView";
import SearchTestimonials from "./UmeshModule/Testimonial/search/SearchTestimonials";
import LeadsView from "./TashafsModule/Bio/pages/LeadsView/LeadsView";
import NeedsView from "./TashafsModule/Bio/pages/NeedsView/NeedsView";
import ImageCertificateView from "./TashafsModule/Bio/pages/ImageCertificateView/ImageCertificateView";
import Invite from "./UmeshModule/events/invite";
import Information from "./UmeshModule/events/info";
import Member from "./UmeshModule/events/member";
import Details from "./UmeshModule/events/details/Details";
import Chat from "./UmeshModule/events/chat/Chat";
import { getNetworkCode, getUserCode } from "./globalFunctions";
import ErrorPage from "./TashafsModule/components/ErrorPage/ErrorPage";
import Page404 from "./TashafsModule/components/Page404/Page404";
import NeedsCard from "./TashafsModule/Profile/components/Needs/NeedsCard/NeedsCard";
import SignupPage from "./TashafsModule/Bio/pages/SignupPage/SignupPage";
import EnterOTP from "./TashafsModule/Bio/pages/EnterOTP/EnterOTP";
import RespondingLeads from "./TashafsModule/Profile/components/Leads/Pages/RespondingLeads/RespondingLeads"
import LeadsReply from "./TashafsModule/Profile/components/Leads/Pages/Leadsreply/LeadsReply"
import NoInternet from './TashafsModule/components/NoInternet/NoInternet'
import { useContext } from "react";
import { AadharPopupContext } from "./TashafsModule/Profile/components/AadhaarVerifiedPopup/AadharPopupContext";
import ViewProfilePicture from "./TashafsModule/Profile/components/ViewProfilePicture/ViewProfilePicture";
import EducationCertificateView from "./TashafsModule/Bio/pages/EducationCertificateView/EducationCertificateView";
import Networks from "./Networks/Networks";
import NetworkComments from "./components/NetworkComments/Comments/ViewAllComments";
import Network_ViewProfileImage from "./components/Network_ViewProfileImage/Network_ViewProfileImage";
import NetworkShareCard from "./components/NetworkShareCard/NetworkShareCard";
import NeedAttachment from "./components/NeedAttachment/NeedAttachment";
import NetworkClusterViewProfileImage from "./components/NetworkClusterViewProfileImage/NetworkClusterViewProfileImage";

const Routing = ({ productionUrl, isLive, isOffline, setisOffline }) => {
  const { showVerifiedPopup, setShowVerifiedPopup } = useContext(AadharPopupContext);

  const userCode = getUserCode()
  const networkCode = getNetworkCode()

  return (

    <React.Suspense>
      <Router>
        {isOffline ? <NoInternet isOffline={isOffline} setisOffline={setisOffline} /> :
          <Routes>
            <Route path="/testEvent" element={<Invite />} />
            <Route path="/testEvent/info" element={<Information />} />
            <Route path="/testEvent/members" element={<Member />} />
            <Route path="/testEvent/details" element={<Details />} />
            <Route path="/testEvent/chat" element={<Chat />} />

            <Route
              path="/testimonials"
              element={<Testimonal productionUrl={productionUrl} isLive={isLive} />}
            />
            <Route
              path="/testimonials/search"
              element={
                <SearchTestimonials productionUrl={productionUrl} isLive={isLive} />
              }
            />
            <Route
              path="/testimonials/details"
              element={
                <TestimonaDetails productionUrl={productionUrl} isLive={isLive} />
              }
            />
            <Route
              path="/comments"
              element={<Comments productionUrl={productionUrl} isLive={isLive} showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} />}
            />
            <Route
              path="/network-comments"
              element={<NetworkComments productionUrl={productionUrl} isLive={isLive} showVerifiedPopup={showVerifiedPopup} setShowVerifiedPopup={setShowVerifiedPopup} isNetwork={true}/>}
            />

            <Route
              exact
              path="/"
              element={userCode !== null ? <Profile productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />}
            />
            <Route path="/share-card" element={userCode !== null ?
              <ShareCard productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
            <Route
              path="/my-super-skills"
              element={
                <MySuperSkills isLive={isLive} productionUrl={productionUrl} />
              }
            />
            <Route
              path="/my-bio"
              element={<Bio isLive={isLive} productionUrl={productionUrl} />}
            />
            <Route path="/my-bio/resume-view" element={<ResumeView />} />
            <Route path="/my-bio/award-view" element={<AwardView />} />
            <Route path="/leads" element={<LeadsView isLive={isLive} productionUrl={productionUrl} />} />
            <Route path="/my-bio/needs" element={<NeedsView isLive={isLive} productionUrl={productionUrl} />} />
            <Route
              path="/leads/responding-leads"
              element={<RespondingLeads isLive={isLive} productionUrl={productionUrl} />}
            />
            <Route path="/leads/leads-reply" element={<LeadsReply isLive={isLive} productionUrl={productionUrl} userCode={userCode} />} />
            <Route path="/my-bio/needs/need" element={<NeedsCard isLive={isLive} productionUrl={productionUrl} userCode={userCode} />} />
            <Route
              path="/my-bio/view-awards-certificates"
              element={<ViewAllAwards isLive={isLive} productionUrl={productionUrl} />}
            />
            <Route
              path="/my-bio/award-view/certificate"
              element={<CertificateView />}
            />
            <Route
              path="/my-bio/award-view/view-certificate"
              element={<ImageCertificateView />}
            />
            <Route
              path="/page-not-found"
              element={<Page404 />}
            />
            <Route
              path="/signup"
              element={<SignupPage productionUrl={productionUrl} isLive={isLive} userCode={userCode} />}
            />
            <Route
              path="/validate-otp"
              element={<EnterOTP productionUrl={productionUrl} isLive={isLive} userCode={userCode} />}
            />
            {/* <Route path="/view-profile-picture" element={<ViewProfilePicture />} />
            <Route path="/view-network-picture" element={<Network_ViewProfileImage />} /> */}
            <Route path="/view-profile-picture" element={userCode !== null ?
              <ViewProfilePicture productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
            <Route path="/view-network-picture" element={networkCode !== null ?
              <Network_ViewProfileImage productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
            <Route path="/view-network-cluster-picture" element={networkCode !== null ?
              <NetworkClusterViewProfileImage productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
            <Route path="/my-bio/view-education-certificate" element={userCode !== null ?
              <EducationCertificateView productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
            {/* <Route path="/network-profile" element={<Networks productionUrl={productionUrl} isLive={isLive} />} /> */}
            <Route path="/network-profile" element={networkCode !== null ? <Networks productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
            <Route path="/network-share-card" element={networkCode !== null ? <NetworkShareCard productionUrl={productionUrl} isLive={isLive} /> : <ErrorPage />} />
            <Route path="/need-attachment" element={<NeedAttachment/>} />
          </Routes>}
      </Router>
    </React.Suspense>
  );
};

export default Routing;
