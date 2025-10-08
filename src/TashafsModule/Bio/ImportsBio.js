import "./bio.scss";
import { useSearchParams } from "react-router-dom";
import useFetchSkills from "./apiServices/useFetchSkills";
import useAwardsFetcher from "./apiServices/useAwardsFetcher";
import useBioFetcher from "./apiServices/useBioFetcher";
import useEducompFetcher from "./apiServices/useEducompFetcher";
import SkillsContainer from "./SkillsContainer/SkillsContainer";
import BioAwardsContainer from "./BioAwardsContainer/BioAwardsContainer";
import EducationDetailsContainer from "./EducationDetailsContainer/EducationDetailsContainer";
import CompanyDetailsContainer from "./CompanyDetailsContainer/CompanyDetailsContainer";
import AboutBioHeaderContainer from "./AboutBioHeaderContainer/AboutBioHeaderContainer";

export {
  useSearchParams,
  useFetchSkills,
  useAwardsFetcher,
  useBioFetcher,
  useEducompFetcher,
  SkillsContainer,
  BioAwardsContainer,
  EducationDetailsContainer,
  CompanyDetailsContainer,
  AboutBioHeaderContainer,
};
