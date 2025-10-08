import Skeleton from "react-loading-skeleton";
import "./grouped-network-list-shimmer.scss";

const GroupedNetworkListShimmer = () => {
  const baseColor = "#242939";
  const highlightColor ="#1e212b";

  return (
    <div className="grouped-network-list-shimmer-container">
        <div className="grouped-network-list-card-container-shimmer">
            <span className="network-list-network-span-shimmer">
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton height={16} width={130} baseColor={baseColor} highlightColor={highlightColor} borderRadius={8} 
                    className="network-list-network-span-name"/>
            </span>
            <div className="grouped-network-list-card-shimmer">
                <div style={{ display: "flex", gap: "16px", borderBottom: "0.5px solid #242939", paddingBottom: "18px"}}>
                    <Skeleton circle height={48} width={48} baseColor={baseColor} highlightColor={highlightColor} />
                    <div className="grouped-network-list-card-title-subtitle">
                        <div style={{ height: "12px" }}>
                            <Skeleton  height={12} width={150} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                        <div style={{ height: "8px" }}>
                            <Skeleton  height={8} width={100} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "16px", borderBottom: "0.5px solid #242939", paddingBottom: "18px"}}>
                    <Skeleton circle height={48} width={48} baseColor={baseColor} highlightColor={highlightColor} />
                    <div className="grouped-network-list-card-title-subtitle">
                        <div style={{ height: "12px" }}>
                            <Skeleton  height={12} width={150} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                        <div style={{ height: "8px" }}>
                            <Skeleton  height={8} width={100} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "16px"}}>
                    <Skeleton circle height={48} width={48} baseColor={baseColor} highlightColor={highlightColor} />
                    <div className="grouped-network-list-card-title-subtitle">
                        <div style={{ height: "12px" }}>
                            <Skeleton  height={12} width={150} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                        <div style={{ height: "8px" }}>
                            <Skeleton  height={8} width={100} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grouped-network-list-card-container-shimmer">
            <span className="network-list-network-span-shimmer">
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton height={16} width={130} baseColor={baseColor} highlightColor={highlightColor} borderRadius={8} 
                    className="network-list-network-span-name"/>
            </span>
            <div className="grouped-network-list-card-shimmer">
                <div style={{ display: "flex", gap: "16px", borderBottom: "0.5px solid #242939", paddingBottom: "18px"}}>
                    <Skeleton circle height={48} width={48} baseColor={baseColor} highlightColor={highlightColor} />
                    <div className="grouped-network-list-card-title-subtitle">
                        <div style={{ height: "12px" }}>
                            <Skeleton  height={12} width={150} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                        <div style={{ height: "8px" }}>
                            <Skeleton  height={8} width={100} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "16px"}}>
                    <Skeleton circle height={48} width={48} baseColor={baseColor} highlightColor={highlightColor} />
                    <div className="grouped-network-list-card-title-subtitle">
                        <div style={{ height: "12px" }}>
                            <Skeleton  height={12} width={150} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                        <div style={{ height: "8px" }}>
                            <Skeleton  height={8} width={100} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grouped-network-list-card-container-shimmer">
            <span className="network-list-network-span-shimmer">
                <Skeleton circle height={30} width={30} baseColor={baseColor} highlightColor={highlightColor} />
                <Skeleton height={16} width={130} baseColor={baseColor} highlightColor={highlightColor} borderRadius={8} 
                    className="network-list-network-span-name"/>
            </span>
            <div className="grouped-network-list-card-shimmer">
                <div style={{ display: "flex", gap: "16px"}}>
                    <Skeleton circle height={48} width={48} baseColor={baseColor} highlightColor={highlightColor} />
                    <div className="grouped-network-list-card-title-subtitle">
                        <div style={{ height: "12px" }}>
                            <Skeleton  height={12} width={150} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                        <div style={{ height: "8px" }}>
                            <Skeleton  height={8} width={100} baseColor={baseColor} highlightColor={highlightColor} borderRadius={6} inline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GroupedNetworkListShimmer