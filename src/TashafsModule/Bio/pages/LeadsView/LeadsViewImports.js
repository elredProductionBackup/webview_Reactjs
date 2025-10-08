import { LeadsShimmer } from "./LeadsViewShimmer/LeadsViewShimmer";
import LeadsViewHeader from "./components/LeadsViewHeader/LeadsViewHeader";
import LeadsPaginated from "./components/LeadsPaginated/LeadsPaginated";
import useFetchLeads from "../../../hooks/useFetchLeads";
import noImageLeads from '../../../../assets/images/leads-no-img-background.png'
import { navigateToRespondingLeads,navigateToHomefromLeads } from "./fetchMoreLeads";
import LeadsviewCardBottom from "./components/LeadsData/LeadsviewCardBottom";
import mapIcon from "../../../../assets/images/mapIcon.svg";
//import back from "../../../../assets/images/backpage.svg";
import back from "../../../../assets/images/back-dark-theme.svg";
export {
    LeadsShimmer,
    LeadsViewHeader,
    useFetchLeads,
    LeadsPaginated,
    noImageLeads,
    navigateToRespondingLeads,
    LeadsviewCardBottom,
    mapIcon,
    navigateToHomefromLeads,
    back
}