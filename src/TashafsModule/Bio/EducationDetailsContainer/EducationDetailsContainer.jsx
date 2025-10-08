import React from 'react'
import NoDataText from '../components/NoDataText/NoDataText'
import WorkDetail from '../components/WorkDetail/WorkDetail'
import WorkEducationShimmer from '../components/AboutData/WorkEducationShimmer/WorkEducationShimmer'

const EducationDetailsContainer = ({eduCompLoader, eduComp}) => {
    return (
        <>
            <div className="edu-title">{eduCompLoader ?null: 'Education details'}</div>
            {eduComp?.totalEducationDetailsCount == 0 && (
                <NoDataText msg={"No education details added yet"} className={'education-margin'}/>
            )}
            {
                eduCompLoader ? <WorkEducationShimmer education={true} /> : <>{eduComp?.educationDetails?.sort((a, b) => a.sequence - b.sequence)?.map((item, id, arr) => (
                    <WorkDetail
                        titles={[item?.areaOfStudy]}
                        name={item?.institutionName}
                        city={item?.location?.city}
                        startYear={item?.startYear}
                        endYear={item?.endYear}
                        currentlyDoing={item?.currentlyStudying}
                        last={id === arr.length - 1}
                        isVerified={item?.institutionKYCVerifiedStatus}
                        greenTickVerification={item?.alumniVerifiedStatus}
                        key={id}
                        educationCertificatePreview={item?.educationCertificatePreview}
                        educationCertificateURL={item?.educationCertificateURL}
                        titleClickable={false}
                    />
                ))}</>
            }
        </>
    )
}

export default EducationDetailsContainer
