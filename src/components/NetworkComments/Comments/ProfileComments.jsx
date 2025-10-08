import {useContext, useEffect, useSearchParams, ScrollComments,CardHeader,CommentsShimmer, 
    useCommentPaginations,AadharPopupContext} from './ImportsProfileComments'

const NetworkComments = ({ isLive, productionUrl, rgba}) => {
    let [searchParams] = useSearchParams();
    const networkCode = searchParams.get("networkCode");
    const isProfile = true;
    const baseColor = "rgba(97, 74, 127, 0.5)"
    const { setShowVerifiedPopup } = useContext(AadharPopupContext);

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
        `${isLive ? productionUrl : ""}/webViewGetNetworkReplies`, 10
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
        <div style={{ backgroundColor: rgba, marginBottom: "12px" }} className={"comments-section "}>
            <CardHeader loading={loading} data={data} networkCode={networkCode} />
            {loading ? (
                <CommentsShimmer
                    profile={true}
                    className="shimmer_container"
                    color={rgba}
                    baseColor={baseColor}
                />
            ) : data?.length ? (
                <div
                    id="comments_horizontals_container"
                    className="comments-hor-container"
                >
                    <ScrollComments
                        data={data}
                        getData={getComments}
                        hasMore={hasMore}
                        loading={loading}
                        onClikShowMore={onClikShowMore}
                        showMoreReplies={showMoreReplies}
                        networkCode={networkCode}
                        isProfile={isProfile}
                        replyLoader={replyLoader}
                        setShowVerifiedPopup={setShowVerifiedPopup}
                    />
                </div>
            ) : (
                <div className="no-comment">No Comments Available Yet </div>
            )}
        </div>
    );
};
export default NetworkComments;
