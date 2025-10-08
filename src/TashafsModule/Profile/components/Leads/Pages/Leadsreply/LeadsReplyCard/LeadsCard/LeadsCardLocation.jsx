import React from 'react'
import { Spinner } from 'react-bootstrap'
import locationIcon from "../../../../../../../../assets/images/location.svg";
import { calcTextLength, openLocationfromLeadsandNeeds } from '../../../../../../../../globalFunctions';
import './cardLocation.scss'
function LeadsCardLocation({ locationLoader, setlocationLoader, data, formattedPricing, type }) {


  return (
    <div className={type === 'leads' ? "subcard-location-price-container lead-location-padding" : "subcard-location-price-container need-location-padding"}>
      <div className="subcard-location" onClick={() => openLocationfromLeadsandNeeds(data?.location?.fullAddress ?? "", data?.location?.latitude, data?.location?.longitude)}>
        <span >
          <Spinner animation="border" variant="light" size="sm" className={locationLoader ? 'show-img-loader locationLoader' : 'hide-img-loader'} />
          <img
            className={!locationLoader ? 'show-image-after-loader subcard-location-icon' : "hide-img-loader"}
            src={locationIcon}
            alt="location"
            onLoad={() => setlocationLoader(false)}
            style={{
              cursor: (typeof (data?.location) === 'string' && data?.location === "") || data?.location?.fullAddress === "" ? 'default' : 'pointer'
            }}
          />
        </span>
        <span className={ (type === 'leads' ? 'subcard-location-text' : 'subcard-location-text-needs')} style={{
          cursor: (typeof (data?.location) === 'string' && data?.location === "") || data?.location?.fullAddress === "" ? '' : 'pointer'
        }} >
          {(typeof (data?.location) === 'string' && data?.location === "") || data?.location?.fullAddress === "" ? "Remote" : typeof (data?.location) === 'string' ? calcTextLength(28, data?.location) : `${calcTextLength(28, data?.location?.fullAddress)}`}
        </span>
      </div>

      {data?.pricingRange?.currency !== "" && formattedPricing!=="" && (data?.pricingRange?.currency === "INR" || data?.pricingRange?.currency === "USD" 
        || data?.pricingRange?.currency === "$" || data?.pricingRange?.currency === "₹") &&
        <div className={data?.pricingRange?.minValue !== "" && data?.pricingRange?.maxValue !== "" ? "subcard-amount" : "subcard-amount subcard-amount-margin"}>
          <span className="currency-value">{(data?.pricingRange?.currency === "USD" || data?.pricingRange?.currency === "$") ? '$' : '₹' }</span><span className="subcard-currency-amount">{`${formattedPricing}`}</span>
        </div>}
    </div>
  )
}

export default LeadsCardLocation
