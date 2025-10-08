import { useEffect } from "react";
import { navigateToNeeds, navigateToHomeFromNeeds} from "../../bioGlobalFunctions";
import { useNavigate, useSearchParams, NeedsViewContainer, useFetchNeeds, NeedsViewHeader } from "./ImportsNeedsView";
import { clearToasts } from "react-simple-toasts";

const NeedsView = ({ isLive, productionUrl }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const userCode = searchParams.get("userCode");
  const { data, loading, fetchMoreNeeds, hasMore, loader } = useFetchNeeds( isLive, productionUrl, userCode );
  const navigate = useNavigate();

  useEffect(() => {
    clearToasts();
  }, []);

  return (
    <div className="leads-view">
      <NeedsViewHeader
        navigateToHomeFromNeeds={navigateToHomeFromNeeds}
        userCode={userCode}
        navigate={navigate}
      />
      <NeedsViewContainer
        loading={loading}
        data={data}
        fetchMoreNeeds={fetchMoreNeeds}
        hasMore={hasMore}
        navigateToNeeds={navigateToNeeds}
        userCode={userCode}
        loader={loader}
      />
    </div>
  );
};

export default NeedsView;
