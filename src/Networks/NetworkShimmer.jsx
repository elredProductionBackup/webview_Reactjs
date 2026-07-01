import React from "react";
import "../TashafsModule/Profile/ProfileShimmer/profileshimmer.scss";
import Skeleton from "react-loading-skeleton";
import starLoader from "../assets/images/dark_star.svg";

const NetworkShimmer = ({ isLoading }) => {
    const color = "#d4d4d4";
    return (
        <div className="profile-shimmer" style={{ paddingBottom: "155px" }}>
            <div className="top_h d-flex align-items-center justify-content-between" style={{ height: '40px', padding: "0 32px"}}>
                <div className="d-flex gap-1">
                    <Skeleton height={17} width={13} borderRadius={6} baseColor={color} highlightColor="#eeeeee"/>
                    <Skeleton height={17} width={8} borderRadius={6} baseColor={color} highlightColor="#eeeeee"/>
                    <Skeleton height={17} width={15} borderRadius={6} baseColor={color} highlightColor="#eeeeee"/>
                </div>
                <div>
                    <Skeleton height={17} width={96} borderRadius={6} baseColor={color} highlightColor="#eeeeee"/>
                </div>
            </div>
            <div className="network-profile-shimmer-title">
                <Skeleton height={19} width={115} borderRadius={6} baseColor={color} highlightColor="#eeeeee" />
                {/* Network Profile */}

            </div>
            <div className="wrapper">
                <div className="shimmer-user">
                    <Skeleton
                        circle
                        height={60}
                        width={60}
                        className="user-img"
                        baseColor={color}
                        highlightColor="#eeeeee"
                    />

                    <span className="networkLogoNameShimmerContainer">
                        <Skeleton
                            circle
                            height={20}
                            width={20}
                            className="user-img"
                            baseColor={color}
                            highlightColor="#eeeeee"
                        />
                            <Skeleton
                            width={187}
                            height={10}
                            className="user-name"
                            borderRadius={10}
                            baseColor={color}
                            highlightColor="#eeeeee"
                        />
                    </span>

                    <Skeleton
                        width={"80%"}
                        height={10}
                        className="user-name"
                        borderRadius={10}
                        baseColor={color}
                        highlightColor="#eeeeee"
                    />
                    <div className="circle-name">
                        <div className="icon">
                            <Skeleton circle height={16} width={16} baseColor={color}   highlightColor="#eeeeee"/>
                        </div>
                        <div className="location">
                            <Skeleton height={8} baseColor={color}   highlightColor="#eeeeee"/>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <Skeleton height={85} width={55} className="card" baseColor={color}  highlightColor="#eeeeee" />
                </div>
                <div className="networkShareDisclaimerShimmerContainer">
                    <div className="network-share-shimmer">
                        <Skeleton circle height={36} width={36} baseColor={color}  highlightColor="#eeeeee" />
                        <Skeleton width={36} height={5} baseColor={color}  highlightColor="#eeeeee" />
                    </div>
                    <div className="network-share-shimmer">
                        <Skeleton circle height={36} width={36} baseColor={color}  highlightColor="#eeeeee" />
                        <Skeleton width={36} height={5} baseColor={color}  highlightColor="#eeeeee" />
                    </div>
                    </div>
                <div className="network-ratings-shimmer">
                    <div className="star-loading">
                        <img src={starLoader} alt="" />
                    </div>
                    <Skeleton
                        width={85}
                        height={7}
                        baseColor={color}
                        highlightColor="#eeeeee"
                        className="ratings-start"
                    />
                    <Skeleton
                        width={"80%"}
                        height={7}
                        baseColor={color}
                        highlightColor="#eeeeee"
                        className="ratings-middle"
                    />
                    <Skeleton
                        width={"60%"}
                        height={7}
                        baseColor={color}
                        highlightColor="#eeeeee"
                        className="ratings-end"
                    />
                </div>





                <div className="super-skills" style={{ backgroundColor: `#ebebeb` }}>
                    <div
                        style={{ textAlign: "left", width: "100%", padding: "0 0 6px 6px" }}
                    >
                        <Skeleton
                            baseColor={color}
                            highlightColor="#eeeeee"
                            width={100}
                            height={7}
                            borderRadius={6}
                        />
                    </div>
                    <div className="one-dim">
                        <div>
                            <Skeleton
                                circle
                                width={42}
                                height={42}
                                className="super1"
                                baseColor={color}
                                highlightColor="#eeeeee"
                            />
                        </div>
                        <div className="super-div">
                            <Skeleton
                                width={240}
                                height={7}
                                className="super2"
                                baseColor={color}
                                highlightColor="#eeeeee"
                            />
                            <Skeleton
                                width={175}
                                height={7}
                                className="super2"
                                baseColor={color}
                                highlightColor="#eeeeee"
                            />
                        </div>
                    </div>
                    <div className="one-dim">
                        <div>
                            <Skeleton
                                circle
                                width={42}
                                height={42}
                                className="super1"
                                baseColor={color}
                                highlightColor="#eeeeee"
                            />
                        </div>
                        <div className="super-div">
                            <Skeleton
                                width={240}
                                height={7}
                                className="super2"
                                baseColor={color}
                                highlightColor="#eeeeee"
                            />
                            <Skeleton
                                width={175}
                                height={7}
                                className="super2"
                                baseColor={color}
                                highlightColor="#eeeeee"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetworkShimmer;
