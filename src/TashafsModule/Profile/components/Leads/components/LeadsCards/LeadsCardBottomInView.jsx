import React from 'react'
import moment from "moment";
import { Spinner } from 'react-bootstrap'
import { calcTextLength } from '../../../../../../globalFunctions'
import map from "../../../../../../assets/images/mapIcon.svg";
import FormatTextForTitle from './FormatTextForTitle';
function LeadsCardBottomInView({ locationLoader, item, setlocationLoader }) {
  return (
    <>
      <div className="leadsdate zIndex-leadsBottom">
        {moment(item?.leadCreatedAt).format("ddd, DD MMM YYYY")}
      </div>
      <div className="title-card-leads-view zIndex-leadsBottom">
        <div className="locate">
          <div>
            <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'show-img-loader location-loader-spinn' : 'hide-img-loader'} />

            <img src={map} alt="" className={!locationLoader ? 'show-image-after-loader' : "hide-img-loader"} onLoad={() => setlocationLoader(false)} />
          </div>

          <div className="name-place">
            {
              (typeof (item?.location) === 'string' && item?.location === "") || item?.location?.fullAddress === "" ?
                <span>Remote</span> : <span>
                  {typeof (item?.location) === 'string' ? calcTextLength(28,item?.location) : ` ${calcTextLength(28,item?.location?.fullAddress)}`}
                </span>
            }

          </div>
        </div>
        <div className="description-wrapper">
          <FormatTextForTitle data={calcTextLength(36, item?.leadTitle)} classStyle='title-Description-leads' />
        </div>

      </div>
    </>
  )
}

export default LeadsCardBottomInView
