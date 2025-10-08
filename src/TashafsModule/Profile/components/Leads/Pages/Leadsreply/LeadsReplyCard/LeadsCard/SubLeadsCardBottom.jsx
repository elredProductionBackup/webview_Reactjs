import React from 'react'
import { handleShareProfile } from '../../../../LeadsGlobalFunctions'
import { Spinner } from 'react-bootstrap'
import FormatText from '../../../../components/LeadsCards/FormatText'
import ShareIcon from "../../../../../../../../assets/images/share-arrow.svg";
import LeadsCardLocation from './LeadsCardLocation'
import FormatTextForTitle from '../../../../components/LeadsCards/FormatTextForTitle';
import { capitalizeLeadIndustry } from '../../../../../../../../globalFunctions';


function SubLeadsCardBottom({ data, shareLoader, locationLoader, setlocationLoader, formattedPricing, setshareLoader }) {

    return (
        <>
            <div className="subcard-header">
                <span className="subcard-header-left">
                    <span className='industryName'>{capitalizeLeadIndustry(data?.industry?.value)}</span>
                </span>
                <span className="subcard-header-right" onClick={() => handleShareProfile(data)}>
                    <Spinner animation="border" variant="light" size="sm" className={shareLoader ? 'show-img-loader subcard-share-iconloader' : 'hide-img-loader'} />
                    <img className={!shareLoader ? 'show-image-after-loader subcard-share-icon' : "hide-img-loader "} src={ShareIcon} alt="share" onLoad={() => setshareLoader(false)} />
                    <span className="subcard-header-right-text">Share </span>
                </span>
            </div>

            <LeadsCardLocation locationLoader={locationLoader}
                setlocationLoader={setlocationLoader} data={data}
                formattedPricing={formattedPricing} type='leads' />

            <FormatTextForTitle data={data?.leadTitle} classStyle='subcard-title' />
            <div className="subcard-text-content">
                <FormatText data={data?.leadsDescription} />

            </div>
        </>
    )
}

export default SubLeadsCardBottom
