import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import './NetworkList.scss';
import GroupedNetworkListShimmer from '../../components/NetworkList/GroupedNetworkList/GroupedNetworkListShimmer/GroupedNetworkListShimmer';
import RedLoader from '../Profile/components/RedLoader/RedLoader';
import { getUserCode, goToNetworks } from '../../globalFunctions';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const NetworkList = ({ isLive, productionUrl }) => {
    const [networks, setNetworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const userCode = getUserCode()
    const navigate = useNavigate();
    const [parentImageShimmer, setParentImageShimmer] = useState(true)
    const [childImageShimmer, setChildImageShimmer] = useState(true)
    let offsetVal = window.innerHeight > 720 ? 12 : 10;

    const fetchData = async (pageNum, offsetVal) => {
        try {
            const response = await axios.get(`${isLive ? productionUrl : ""}/webViewGetUserNetworks?userCode=${userCode}&start=${pageNum}&offset=${offsetVal}`);
            if (response.data.success) {
                const newNetworks = response.data.result;
                setNetworks((prev) => [...prev, ...newNetworks]);
                setHasMore(newNetworks.length === offsetVal); // Set hasMore to false if no new data
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData(page, offsetVal);
    }, [page]);
    const loadMoreData = () => {
        if (hasMore && !loading) { // Prevent loading if already loading
            setPage((prev) => prev + offsetVal); // Increment page for the next fetch
        }
    };
    
    const handleImageLoad = (networkCode) => {
        setChildImageShimmer((prevState) => ({
            ...prevState,
            [networkCode]: false, // Set shimmer for this network image to false once it loads
        }));
    };

    // Group networks by networkClusterName
    const uniqueClusters = Array.from(
        new Set(
          networks.map(network => `${network.networkClusterName}|${network.networkClusterLogo}`)
        )
      ).map(item => {
        const [name, logo] = item.split('|');
        return { networkClusterName: name, networkClusterLogo: logo };
      });
    const groupedNetworks = uniqueClusters.map(clusterName => ({
        clusterName,
        networks: networks.filter(network => network.networkClusterName === clusterName.networkClusterName),
    }));
    if (loading && page === 1) return <GroupedNetworkListShimmer />; // Loading on initial load
    if (error) return <div>Error: {error.message}</div>;
    return (
        <InfiniteScroll
            dataLength={networks.length} // This is important to indicate the length of the data
            next={loadMoreData} // Function to fetch more data
            hasMore={hasMore} // Boolean to check if more data is available
            loader={<div style={{ marginBottom: "20px" }}><RedLoader /></div>} // Loader component
            height={"calc(100vh - 46px)"}
        >
            <div>
                {groupedNetworks.length > 0 ? (
                    groupedNetworks.map((item) => (
                        <div key={item.clusterName.networkClusterName} className='group_main_name_div'>
                            <p className='cluster-name'>
                            <div style={{ height: "30px", marginRight: parentImageShimmer ? "8px" : "0"}}>
                                <Skeleton
                                circle
                                height={30}
                                width={30}
                                baseColor={"#242939"}
                                highlightColor="#1E212B"
                                className={parentImageShimmer ? 'd-block' : 'd-none'}
                                /></div>
                        <img src={item.clusterName.networkClusterLogo} alt="" 
                          className={parentImageShimmer ? "d-none" : "network-list-network-thumbnail"} onLoad={() => setParentImageShimmer(false)}/>
                                {/* <img src={item.clusterName.networkClusterLogo} alt="cluster name"/> */}
                                <p className='networkClusterName'>{item.clusterName.networkClusterName}</p>
                            </p>
                            <ul>
                                {item.networks.map((network, index) => ( // Changed to item.networks
                                    <React.Fragment key={network.networkCode}>
                                        <li className='li_items' onClick={(e) => goToNetworks(navigate, network?.networkCode, e)}>
                                        <div style={{ height: "48px"}}>
                                            <Skeleton
                                                circle
                                                height={48}
                                                width={48}
                                                baseColor={"#242939"}
                                                highlightColor="#1E212B"
                                                className={childImageShimmer[network.networkCode] !== false ? 'd-block' : 'd-none'}
                                            /></div>
                                            <img
                                                src={network.logo}
                                                alt=""
                                                className={childImageShimmer[network.networkCode] === false ? "network-list-card-single-img" : "d-none"}
                                                onLoad={() => handleImageLoad(network.networkCode)} // Handle shimmer individually
                                            />
                                            <div className='network_details_div'>
                                                <p className='n_name'>{network.name}</p>
                                                <p className='n_location'>{network.location.city} 
                                                    {network.location.state.toLowerCase() !== network.location.city.toLowerCase() ? ", " + network.location.state : null} 
                                                    {", " + network.location.country}</p>
                                            </div>
                                        </li>
                                        {index < item.networks.length - 1 && <hr />}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : null}
            </div>
        </InfiniteScroll>
    );
};

export default NetworkList;
