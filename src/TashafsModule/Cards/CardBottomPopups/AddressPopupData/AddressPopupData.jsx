import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import AddressPopup from '../../AddressPopup/AddressPopup'

const AddressPopupData = ({locationEnable, setLocationEnable, data, networkCardPopupStatus }) => {
    return (
        <Offcanvas
            show={locationEnable}
            className="bottomPopSmall"
            placement="bottom"
            onClick={() => setLocationEnable(false)}
            
        >
            <AddressPopup
                data={data}
                setLocationEnable={setLocationEnable}
                status={networkCardPopupStatus ? true : data?.cardInfo?.[0]?.addressDisplayStatus}
            />
        </Offcanvas>
    )
}

export default AddressPopupData
