import Skeleton from 'react-loading-skeleton';
import "./networksharecardshimmer.scss";

const NetworkShareCardShimmer = () => {
  const baseColor = "#242939";
  const highlightColor = "#1e212b"; 

  return (
    <div className='network-share-card-shimmer'>
        <div className='network-card-shimmer-title-container'>
            <div className='network-card-shimmer-title'>
                <Skeleton width={147} height={16} baseColor="#1A1D27" highlightColor={highlightColor} />
            </div>
        </div>
        <div className="network-card-shimmer-body">
            <div className="network-card-shimmer-body-wrapper">
                <div className='network-card-shimmer-top-section'>
                    <Skeleton height={24} width={24} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-top-right-share-square" />
                    <Skeleton height={7} width={30} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-top-right-share-line" />
                </div>
                <div className='network-card-shimmer-middle-section'>
                    <Skeleton circle height={124} width={124} baseColor={baseColor} highlightColor={highlightColor} />                
                    <div className='network-card-shimmer-network-dp-and-name'>
                        <Skeleton height={30} circle width={30} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-network-dp" />
                        <Skeleton height={15} width={80} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-network-name" />
                    </div>
                    <Skeleton height={20} width={154} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-middle-top-text" />
                    <Skeleton height={10} width={121} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-middle-bottom-text" />
                    <div className="network-card-shimmer-square-icons">
                        <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-square" />
                        <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-square" />
                        <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-square" />
                        <Skeleton height={32} width={32} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-square" />
                    </div>
                </div>
                <div className='network-card-shimmer-bottom-section'>
                    <div className="network-card-shimmer-bottom-left-line" >
                        <Skeleton height={7} width={55} baseColor={baseColor} highlightColor={highlightColor} />
                    </div>
                    <div className="network-card-shimmer-bottom-right-container">
                        <Skeleton height={18} width={18} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-bottom-right-square" />
                        <Skeleton height={7} width={35} baseColor={baseColor} highlightColor={highlightColor} className="network-card-shimmer-bottom-right-line" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NetworkShareCardShimmer;