import React from 'react'
import { formatPricing } from '../../../../../../../../globalFunctions'
import { useState } from 'react';
import SubLeadsCardBottom from './SubLeadsCardBottom';

function LeadscardBottom({ data }) {
  const formattedPricing = data?.pricingRange?.currency!==""? formatPricing(data?.pricingRange?.minValue, data?.pricingRange?.maxValue, data?.pricingRange?.currency):"";
  const [locationLoader, setlocationLoader] = useState(true)
  const [shareLoader, setshareLoader] = useState(true)

  return (
    <>
      <div className={ "leads-reply-subcard "}>
        <SubLeadsCardBottom data={data}
          shareLoader={shareLoader}
          locationLoader={locationLoader}
          setlocationLoader={setlocationLoader}
          formattedPricing={formattedPricing}
          setshareLoader={setshareLoader} />
      </div>
    </>
  )
}

export default LeadscardBottom
