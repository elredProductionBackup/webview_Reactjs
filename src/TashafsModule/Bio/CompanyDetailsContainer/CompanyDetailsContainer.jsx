import React from 'react'
import NoDataText from '../components/NoDataText/NoDataText'
import WorkDetail from '../components/WorkDetail/WorkDetail'
import WorkEducationShimmer from '../components/AboutData/WorkEducationShimmer/WorkEducationShimmer'

const CompanyDetailsContainer = ({eduCompLoader, eduComp}) => {
    return (
        <>
            <div className="comp-title">{eduCompLoader ? null : 'Company details'}</div>
            {eduComp?.totalCompanyDetailsCount == 0 && (
                <NoDataText msg={"No company details added yet"} />
            )}
            {
                eduCompLoader ? <WorkEducationShimmer/> : 
                <>
                {eduComp?.companyDetails?.sort((a, b) => a.sequence - b.sequence)?.map((item, id, arr) => (
                    <WorkDetail
                        titles={item?.designations}
                        extraTitlesCount={item?.designations?.length - 1}
                        departments={item?.departments}
                        extraDepartmentsCount={item?.departments?.length - 1}
                        name={item?.companyName}
                        city={item?.location?.city}
                        startYear={item?.startYear}
                        endYear={item?.endYear}
                        currentlyDoing={item?.currentlyWorking}
                        last={id === arr.length - 1}
                        isVerified={item?.orgKYCVerifiedStatus}
                        greenTickVerification={item?.employeeVerifiedStatus}
                        item={item}
                        key={id}
                        titleClickable={true}
                        isCompany={true}
                    />
                ))}</>
            }
        </>
    )
}

export default CompanyDetailsContainer
