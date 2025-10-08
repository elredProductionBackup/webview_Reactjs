
import LeadsData from "../../components/LeadsData/LeadsData";
import { scrollMsgToBottom } from "../../fetchMoreLeads";
import { useState } from "react";
import RedLoader from "../../../../../Profile/components/RedLoader/RedLoader";

const LeadsPaginated = ({ leadsData, isLive, productionUrl, userCode, page, setPage, hasMore, setHasMore, loader, setCountofLeads, getCOuntofLeads }) => {
  const [data, setData] = useState(leadsData);
  const [loading, setLoading] = useState(loader);
  const [isHitted, setisHitted] = useState(false)
  let fetchMoreProps = { isLive, productionUrl, userCode, setData, page, setPage, setHasMore, setLoading, hasMore, setCountofLeads, getCOuntofLeads, data, setisHitted, isHitted }

  return (
    <>
      <div className={data.length % 2 === 1 ? "leads-div-container-1 oddcontainer1" : "leads-div-container-1 evenContainer1"}
        onScroll={(e) => scrollMsgToBottom(e, loading, hasMore, fetchMoreProps, setLoading)} id="mapped_lead_data">
        <LeadsData
          userCode={userCode}
          isLive={isLive}
          productionUrl={productionUrl}
          data={data}
          loading={loading}
        />
      </div>
      {loading && <RedLoader />}
    </>
  );
};

export default LeadsPaginated;

