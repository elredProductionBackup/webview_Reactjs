import {skeleton, NoDataText, Skeleton, useNavigate, navigateTo, viewAward, ProfileBioAwardList, AwardsShimmer} 
from './ImportsBioAwardsContainer'

const BioAwardsContainer = ({ awardsLoader, awardsCount, awards, userCode }) => {
    const navigate = useNavigate()
    return (
        <>
            <hr className="hr-middle"/>
            <div className="awards-title">
                <div className="awards-text">
                    {awardsLoader ?
                        <Skeleton
                            width={200}
                            height={17}
                            borderRadius={13}
                            baseColor="#2A313F"
                            highlightColor="#1e212b"
                        /> : "My awards & certificates"}
                </div>
                <div className="view-all" onClick={() => navigateTo(userCode, navigate, '/my-bio/view-awards-certificates')}>
                    {awardsLoader ?
                        null : (awardsCount !== 0 && "See all")}
                </div>
            </div>
            { awardsLoader ? <AwardsShimmer/> : awardsCount !== 0 ? <div className="award-icons">
                {awards?.slice(0, 3)?.map((item, id, arr) => (
                    <div key={id} >
                      {awardsLoader ? <img src={skeleton} alt="" /> : <ProfileBioAwardList item={item} 
                        viewAward={viewAward} userCode={userCode} navigate={navigate} /> }
                    {item !== arr[arr.length - 1] ? <hr className='hr-middle'/> : null}
                    </div>
                    ))}
            </div> : null}
            { awardsLoader ? null : awardsCount === 0 && <NoDataText msg={"No awards and certificates added yet"} className={'no-awards-margin'}/> }
        </>
    )
}

export default BioAwardsContainer
