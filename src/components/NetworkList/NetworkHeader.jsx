import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
//import back from "../../assets/images/backpage.svg";
import back from "../../assets/images/back-dark-theme.svg";
import Feedback from '../Feedback/Feedback';
import Contants from '../../utils/Contants';
import Skeleton from 'react-loading-skeleton';

const NetworkHeader = ({ setOpenNetworkList, setShowUserFeedbackPopup, count, loading }) => {
    const [backLoader, setbackLoader] = useState(true)
    return (
        <div className='networklist-header d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <Spinner animation="border" variant="light" size="sm" className={backLoader ? 'd-block network-list-back-loader' : 'd-none'} />
                <img src={back} alt="" className={backLoader ? 'd-none' : "network-list-back"} onLoad={() => setbackLoader(false)} onClick={() => setOpenNetworkList(false)} />
                <div className='network-list-title'>{Contants.NETWORK_NAME_PLURAL} List
                    {loading ? <Skeleton baseColor="#242939" highlightColor="#1e212b" height={21} width={21} className="count_list_shimmer" /> 
                       : <span className='count_list'>{count}</span>}
                </div>
            </div>
            <div className='d-flex' style={{paddingRight:20}}><Feedback setOpen={setShowUserFeedbackPopup} /></div>
        </div>
    )
}

export default NetworkHeader
