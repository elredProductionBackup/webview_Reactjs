import { useState } from "react";
import Skeleton from "react-loading-skeleton"
import defaultImg from "../../../../assets/images/group_default.png"

const NetworkIconBadgeSingle = ({ item, baseColor, highlightColor }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="network-icon-badge">
    <Skeleton
      circle
      height={31}
      width={31}
      baseColor={baseColor}
      highlightColor={highlightColor} 
      className={
        isLoading ? "d-block network-icon-badge-shimmer" : "d-none"
      }
    />
    <img
      src={imageError ? defaultImg : item?.logo}
      alt=""
      className={isLoading ? "d-none" : "d-block"}
      onLoad={() => setIsLoading(false)}
      onError={() => setImageError(true)}
    />
  </div>
  )
}

export default NetworkIconBadgeSingle