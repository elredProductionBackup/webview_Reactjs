import { useEffect } from 'react';
import {useSearchParams, useFetchSkills, useAwardsFetcher, useBioFetcher, useEducompFetcher, SkillsContainer, 
  BioAwardsContainer, EducationDetailsContainer,CompanyDetailsContainer,AboutBioHeaderContainer} from './ImportsBio'
import { clearToasts } from 'react-simple-toasts';

const Bio = ({ isLive, productionUrl }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const { bio, aboutLoader } = useBioFetcher(isLive, productionUrl, userCode);
  const { skills, skillsLoader } = useFetchSkills(isLive, productionUrl, userCode);
  const {awards, awardsLoader, awardsCount} = useAwardsFetcher(isLive, productionUrl, userCode);
  const { eduComp, eduCompLoader } = useEducompFetcher(isLive, productionUrl, userCode);

  useEffect(() => {
    clearToasts();
  }, []);

  return (
    <div className="bio">
      <AboutBioHeaderContainer bio={bio} userCode={userCode} aboutLoader={aboutLoader} skillsLoader={skillsLoader}/>
      <SkillsContainer skills={skills} skillsLoader={skillsLoader}/>
      <BioAwardsContainer awards={awards} awardsCount={awardsCount} awardsLoader={awardsLoader}
        userCode={userCode}/>
      <hr className="hr-middle"/>
      <EducationDetailsContainer eduCompLoader={eduCompLoader} eduComp={eduComp}/>
      <hr className="hr-middle"/>
      <CompanyDetailsContainer eduComp={eduComp} eduCompLoader={eduCompLoader}/>
    </div>
  );
};

export default Bio;
