import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import AddressPopup from '../../../Cards/AddressPopup/AddressPopup'

const ShareCardAddressPopup = ({locationEnable, setLocationEnable, userDetail}) => {
  return (
    <Offcanvas
      show={locationEnable}
      className="bottomPopSmallShareCard"
      placement="bottom"
     onClick={() => setLocationEnable(false)}
      onHide={() => setLocationEnable(false)}
    >
      <AddressPopup
        address={userDetail?.address?.fullAddress}
        setLocationEnable={setLocationEnable}
        status={userDetail?.addressDisplayStatus}
        data={userDetail}
      />
    </Offcanvas>
  )
}

export default ShareCardAddressPopup
