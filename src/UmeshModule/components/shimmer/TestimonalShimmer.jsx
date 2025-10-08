import "./index.scss";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";
import { convertToRgbColor } from "../../../globalFunctions";

const TestimonalShimmer = ({ color, showCard = true, baseColor }) => {
  const finalColor = convertToRgbColor(baseColor);
  const finalBgColor = `rgba(${finalColor?.[0]},${finalColor?.[1]},${finalColor?.[2]},50%)`;
  const highlightColor = "#1e212b";

  return (
    <div className="testimonials-shimmer">
      {showCard ? (
        [1, 2, 3, 4,5,6].map((item) => {
          return (
            <div key={item} className={classNames("profile-shimmer overflw_verticle overflw_verticle_mb")} style={{ backgroundColor: finalBgColor}} >
              <div className="shimmer-user-testimonial">
                <div className="date-shimmer-testimonial"><Skeleton height={8} baseColor="#2A313F" highlightColor={highlightColor} width={105} /></div>
                <div className="testimonial-card-text-shimmer"><Skeleton height={8} baseColor="#2A313F" highlightColor={highlightColor} className="testimonial-card-text-shimmer" /></div>
                <div className="circle-name-testimonials">
                  <div className="icon">
                    <Skeleton circle height={24} width={24} baseColor="#2A313F" highlightColor={highlightColor} />
                  </div>
                  <div className="location">
                    <Skeleton height={8} baseColor="#2A313F" highlightColor={highlightColor} />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ backgroundColor: finalBgColor}}
          className={classNames("profile-shimmer", {
            "mt-3 overflw_verticle": !showCard,
          })}
        >
          <div className="shimmer-user-testimonial">
            <div className="date-shimmer-testimonial"><Skeleton height={8} baseColor={color} highlightColor={highlightColor} width={105}/></div>
            <div className="testimonial-card-text-shimmer"><Skeleton height={8} baseColor={color} highlightColor={highlightColor} /></div>
            <div className="circle-name-testimonials">
              <div className="icon">
                <Skeleton circle height={24} width={24} baseColor={color} highlightColor={highlightColor} />
              </div>
              <div className="location">
                <Skeleton height={8} baseColor={color} highlightColor={highlightColor} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonalShimmer;
