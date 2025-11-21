import React, { useEffect, useState } from 'react'
import LeadscardBottom from './LeadscardBottom'
import LeadsCardProfile from './LeadsCardProfile'
import moment from 'moment'
import noImageLeads from '../../../../../../../../assets/images/leads-no-img-background.png'
function LeadsCard({ data, setShowVerifiedPopup }) {
  const [errorImage, setErrorImage] = useState(false)

  useEffect(() => {
    if(data?.backgroundImages?.length>0){
      const img = new Image();
      img.onload = () => {
  
        setErrorImage(true)
       
      };
      img.onerror = () => {
        setErrorImage(false)
     
      };
      img.src = data?.backgroundImages[0]
    }else{
      const img = new Image();
      img.onload = () => {
  
        setErrorImage(true)
       
      };
      img.onerror = () => {
        setErrorImage(false)
     
      };
      img.src = noImageLeads
    }
  
  
  }, [])

  return (
    <div className="leads-reply-card">
      <div
        className="card_wrapper"
        style={data?.backgroundImages.length > 0 && errorImage ? {
          "background": ` linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 50%), url(${data?.backgroundImages?.[0]}),no-repeat`,
          "backgroundColor":"#1A1D27"
        } : { "background": `linear-gradient(180deg, rgba(0, 0, 0, 0.80), rgba(0, 0, 0, .80)),  url(${noImageLeads})`,  "backgroundColor":"#1A1D27" }}
      >
        <LeadsCardProfile data={data} setShowVerifiedPopup={setShowVerifiedPopup} />

        <div className="profile-card-border-bottom"></div>
        <div className='leadscreatedDate' >{`Created on ${moment(data?.leadCreatedAt).format('ddd, DD MMM YYYY')}`}</div>
        <LeadscardBottom data={data} />


      </div>

    </div>
  )
}

export default LeadsCard
