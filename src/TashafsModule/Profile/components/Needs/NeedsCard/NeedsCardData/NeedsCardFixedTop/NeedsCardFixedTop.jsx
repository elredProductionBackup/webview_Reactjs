import {useNavigate} from "react-router-dom";
import TopNavigation from "../../TopNavigation/TopNavigation";
import ProfileTop from "../../ProfileTop/ProfileTop";
import InnerContentDiv from "../../InnerContentDiv/InnerContentDiv";
import BackgroundFilter from "../../../../BackgroundFilter/BackgroundFilter";
import { isIOS, isMacOs } from "react-device-detect";
import pin from "../../../../../../../assets/images/attachment.svg";

const NeedsCardFixedTop = ({ needData }) => {
  const navigate = useNavigate()
  const bgGradient = "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))";
  
  return (
    <div className="fixed_top">
      <TopNavigation
        downloadUrl={
          isIOS || isMacOs
            ? needData?.needDetails?.downloadURL?.appstoreURL
            : needData?.needDetails?.downloadURL?.playstoreURL
        }
      />
      <div
        className="card_wrapper"
        style={{
          background: `${bgGradient}, url(${needData?.needDetails?.profileBannerImageURL})`,
        }}
      >
        <div className="bg-images-filter">
          <ProfileTop data={needData?.needDetails} />
          <div className="divider-padding-top"></div>
          <hr className="line" />
          <div className="divider-padding-bottom"></div>
          {
            needData?.needDetails?.attachments?.length !== 0 && <div className="attachment_div">
            <div className="attachment_content" style={{cursor:"pointer"}} onClick={()=>navigate("/need-attachment",{state:needData?.needDetails?.attachments?.[0]?.type == "pdf" ? needData?.needDetails?.attachments?.[0]?.pdfPreview : needData?.needDetails?.attachments?.[0]?.url})}>
              <img src={pin} alt="" />
              <span>My attachment.{needData?.needDetails?.attachments?.[0]?.type=="pdf" ? 'pdf' : 'jpg'}</span>
            </div>
          </div>
          }
          <InnerContentDiv data={needData?.needDetails} />
        </div>

        {needData?.needDetails?.needOwnerDetails?.colorFilter?.length !== 0 ? (
          <BackgroundFilter
            filterValues={needData?.needDetails?.needOwnerDetails?.colorFilter?.toString()}
          />
        ) : null}
      </div>
    </div>
  );
};

export default NeedsCardFixedTop;
