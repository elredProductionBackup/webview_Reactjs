import "./leads.scss";
import SeeAllLeads from "./components/SeeAllLeads/SeeAllLeads";
import { GlobalData } from "../../../../App";
import {useContext} from 'react'
import ScrollLeadsContainers from "./ScrollLeadsContainers";
const Leads = ({ rgba, userCode, leadsData, isLive, productionUrl ,baseColor}) => {
  const {formData, setFormData} = useContext(GlobalData)
  return (
    <div className="leads" style={{ background: `${rgba}` }}>
      <SeeAllLeads
        userCode={userCode}
        isLive={isLive}
        productionUrl={productionUrl}
      
      />
      <ScrollLeadsContainers
        leadsData={leadsData}
        userCode={userCode}
        isLive={isLive}
        productionUrl={productionUrl}
        setFormData={setFormData}
        baseColor={baseColor}
      />
    </div>
  );
};

export default Leads;
