import {useState, useNavigate, AboutData, Skeleton, back, navigateToPath, Spinner} from './ImportsAboutBioHeaderContainer'

const AboutBioHeaderContainer = ({ bio, userCode, aboutLoader, skillsLoader }) => {
    const navigate = useNavigate()
    const [closeIconLoader, setCLoseIconLoader] = useState(true)
    return (
        <>
            <div className="bio-header" >
                <Spinner animation="border" variant="light" size="sm" className={closeIconLoader ? 'showing-img-loader back-icon-loader' : 
                    'hiding-img-loader'} />
                    <img src={back} alt="" className={!closeIconLoader ? 'showing-img-loader bioBack' : "hiding-img-loader"}
                        onLoad={() => setCLoseIconLoader(false)} onClick={() => navigateToPath(navigate, userCode, '/')}/>
            <div className="title">My Bio</div>
            </div>
            <AboutData bio={bio} userCode={userCode} loader={aboutLoader} />
            <hr className="hr-middle" />
            <div className="skills-title">
                {skillsLoader ?
                    <Skeleton
                        width={84}
                        height={17}
                        borderRadius={13}
                        baseColor="#2A313F"
                        highlightColor="#1e212b"
                    /> : "Skills"}
            </div>
        </>
    )
}

export default AboutBioHeaderContainer
