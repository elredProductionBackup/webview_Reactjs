import { useEffect, Header, CommentsScroll, useCommentPaginations
} from './ImportsViewAllComments'

function NetworkComments({ productionUrl, isLive, showVerifiedPopup, setShowVerifiedPopup, isNetwork }) {
  let fetchNumber = window.innerHeight< 575? 10 : 15
  const {
    data,
    setData,
    loading,
    setLoading,
    hasMore,
    getData,
    showMoreReplies,
    getComments,
    replyLoader
  } = useCommentPaginations(
    `${isLive ? productionUrl : ""}/webViewGetNetworkComments`,
    `${isLive ? productionUrl : ""}/webViewGetNetworkReplies`, fetchNumber
  );

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const onClikShowMore = (index, status) => {
    const arr = [...data];
    const d = arr[index];
    d.showReplies = !status;
    setData([...arr]);
  };

  return (
    <div>
      <Header title={"Comments"} isNetwork={isNetwork} isLive={isLive} productionUrl={productionUrl} 
       screen={"Network - See All Comments - Webview"}/>
      <CommentsScroll
        hasMore={hasMore}
        data={data}
        getData={getComments}
        loading={loading}
        showMoreReplies={showMoreReplies}
        onClikShowMore={onClikShowMore}
        showVerifiedPopup={showVerifiedPopup}
        setShowVerifiedPopup={setShowVerifiedPopup}
        replyLoader={replyLoader}
      />
    </div>
  );
}

export default NetworkComments;
