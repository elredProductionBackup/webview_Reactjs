import React, { useState } from 'react'
import { navigateToImg, navigateToPdf } from '../../../bioGlobalFunctions'
import { Spinner } from 'react-bootstrap'
import { getFileExtension } from '../../../../../globalFunctions'

const AwardPreviewContainer = ({ data, pdfLable, imgLable, navigate, userCode }) => {
    const [pdfLoader, setpdfLoader] = useState(true)
    const [awardCertificateLoader, setAwardCertificateLoader] = useState(true)


    const fileType = getFileExtension(data?.awardCertificateURL)
    return (
        // <div className='award-view-Wrapper'>
            <div
                className="preview-container"
                onClick={data?.awardContentType == 'pdf' ? () =>
                    navigateToPdf(data, userCode, navigate, awardCertificateLoader,) : () => navigateToImg(data, userCode, navigate, awardCertificateLoader)}>
                {
                    data.awardContentType !== "none" && <div
                        className={awardCertificateLoader ? "preview-awards" : "preview-awards preview-cursor-pointer"}
                    >
                        <div className='overlayCert'> </div>
                        <Spinner animation="border" variant="danger" size="md" className={awardCertificateLoader ? 'show-img-loader-certificate pdf-spinner' : 'hide-img-loader'} />
                        <img src={data?.awardContentType == "pdf" ? data?.pdfPreview : data?.awardCertificateURL} alt="err"
                            className={!awardCertificateLoader ? 'certificateImage' : 'hide-img-loader'} onLoad={() => setAwardCertificateLoader(false)} />

                        <div className="label-certificate">
                            <Spinner animation="border" variant="light" size="sm" className={pdfLoader ? 'd-block pdf-spinner' : 'hide-img-loader'} />

                            <img className={!pdfLoader ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setpdfLoader(false)}
                                src={data?.awardContentType === "pdf" ? pdfLable : imgLable}
                                alt=""
                            />
                            <div className="name">
                                Award.{fileType}
                            </div>
                        </div>

                    </div>
                }
            </div>
        // </div>

    )
}

export default AwardPreviewContainer
