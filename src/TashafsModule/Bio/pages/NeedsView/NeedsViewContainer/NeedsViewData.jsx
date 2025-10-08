import InfiniteScroll from "react-infinite-scroll-component";
import { Col, Row } from "react-bootstrap";
import { GlobalData } from '../../../../../App';
import  {BackgroundFilter, RedLoader, dummyBg, useNavigate, useContext} from './ImportsNeedsViewData'
import moment from "moment";
import { useEffect, useState } from "react";
import ShimmerNeeds from "../NeedsShimmer/NeedsShimmer";

function NeedsViewData({ data, fetchMoreNeeds, hasMore, navigateToNeeds, userCode,loader }) {
  const navigate = useNavigate();
  const {setFormData} = useContext(GlobalData)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(data){
      const promises = data?.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve();
          };
          img.src =  item?.profileBannerImageURL !==""?item?.profileBannerImageURL:dummyBg;
        });
      });
  
      Promise.all(promises).then(() => {
        setIsLoading(false);
      });
    }
   
  }, []);
  return (
    <>

     {isLoading ? <ShimmerNeeds />: <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreNeeds}
        hasMore={hasMore}
        scrollableTarget='abcd'
        loader={loader 
          
          && <RedLoader />}
      >
        <div className={data.length%2===1?"leads-div-container oddcontainer":"leads-div-container evenContainer"} id="abcd">
          <Row className="leads-div">
            {data?.map((item, id) => (
              <Col sm={6} className={`dynamic-div ${id % 2 === 1 ? "even-div box" : "odd-div box"}`} key={id}
                onClick={() => navigateToNeeds(item?.needId, userCode, navigate, setFormData)}>                  
                <div className="bg-filter-needs-view" ></div>
                <div className="background-needs-card"
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${item?.profileBannerImageURL || dummyBg})`}}
                ></div>
                <div className="needs-cards-view-date-top">{moment(item?.needCreatedAt)?.format("ddd, DD MMM YYYY")}</div>
                <div className="leads-title">
                  {item?.titleTags?.slice(0, 5).map((item, id) => (
                    <div className="tag" key={id}>{item}</div>
                  ))}
                </div>
                {item?.colorFilter?.length !== 0 ? (
                   <BackgroundFilter filterValues={item?.colorFilter?.toString()} />
                ) : null}
              </Col>
            ))}
          </Row>
        </div>
      </InfiniteScroll>}
    </>
  )
}

export default NeedsViewData
