import React from "react";
import "./profileshimmer.scss";
import Skeleton from "react-loading-skeleton";
import starLoader from "../../../assets/images/starLoader.svg";

const ProfileShimmer = ({ color, isLoading, highlight }) => {
  return (
    <div className="profile-shimmer">
      <div
        className="top_h d-flex align-items-center justify-content-between"
        style={{ height: "40px", padding: "0 32px" }}
      >
        <div className="d-flex gap-1">
          <Skeleton
            height={17}
            width={13}
            borderRadius={6}
            baseColor={color}
            highlightColor={highlight}
          />
          <Skeleton
            height={17}
            width={8}
            borderRadius={6}
            baseColor={color}
            highlightColor={highlight}
          />
          <Skeleton
            height={17}
            width={15}
            borderRadius={6}
            baseColor={color}
            highlightColor={highlight}
          />
        </div>
        <div>
          <Skeleton
            height={17}
            width={96}
            borderRadius={6}
            baseColor={color}
            highlightColor={highlight}
          />
        </div>
      </div>
      <div className="profile-shimmer-title">
        <Skeleton
          height={19}
          width={51}
          borderRadius={6}
          baseColor={color}
          highlightColor={highlight}
        />
      </div>
      <div className="wrapper">
        <div className="shimmer-user">
          <Skeleton
            circle
            height={60}
            width={60}
            className="user-img"
            baseColor={color}
            highlightColor={highlight}
          />
          <Skeleton
            width={"80%"}
            height={10}
            className="user-name"
            borderRadius={10}
            baseColor={color}
            highlightColor={highlight}
          />
          <div className="circle-name">
            <div className="icon">
              <Skeleton
                circle
                height={16}
                width={16}
                baseColor={color}
                highlightColor={highlight}
              />
            </div>
            <div className="location">
              <Skeleton
                height={8}
                baseColor={color}
                highlightColor={highlight}
              />
            </div>
          </div>
          <div className="circle-name">
            <div className="icon">
              <Skeleton
                circle
                height={16}
                width={16}
                baseColor={color}
                highlightColor={highlight}
              />
            </div>
            <div className="location-2">
              <Skeleton
                height={8}
                baseColor={color}
                highlightColor={highlight}
              />
            </div>
          </div>
        </div>
        <div className="cards">
          <Skeleton
            height={89}
            width={59}
            className="card"
            baseColor={color}
            highlightColor={highlight}
          />
        </div>

        <div className="tags-shimmer">
          <Skeleton
            height={7}
            width={86}
            baseColor={color}
            highlightColor={highlight}
          />
          <div className="d-flex" style={{ gap: 12, marginTop: 10 }}>
            <Skeleton
              width={109}
              height={24}
              baseColor={color}
              borderRadius={16}
              highlightColor={highlight}
            />
            <Skeleton
              width={109}
              height={24}
              baseColor={color}
              borderRadius={16}
              highlightColor={highlight}
            />
          </div>
        </div>
        <div className="share-shimmer">
          <Skeleton
            circle
            height={36}
            width={36}
            baseColor={color}
            highlightColor={highlight}
          />
          <Skeleton
            width={36}
            height={5}
            baseColor={color}
            highlightColor={highlight}
          />
        </div>
        <div className="needs-shimmer">
          <div className="top-needs">
            <Skeleton
              baseColor={color}
              height={7}
              width={84}
              highlightColor={highlight}
            />
            <Skeleton
              baseColor={color}
              height={7}
              width={48}
              highlightColor={highlight}
            />
          </div>
          <div className="cards-shimmer">
            <div className="needs-card-shimmer">
              <div className="inner-shimmer">
                <Skeleton
                  width={50}
                  height={7}
                  borderRadius={6}
                  baseColor={"#242939"}
                  style={{ backgroundColor: "#1a1d27" }}
                  highlightColor={highlight}
                />
                <Skeleton
                  width={100}
                  height={7}
                  borderRadius={6}
                  baseColor={"#242939"}
                  style={{ backgroundColor: "#1a1d27" }}
                  highlightColor={highlight}
                />
                <Skeleton
                  width={110}
                  height={7}
                  borderRadius={6}
                  baseColor={"#242939"}
                  style={{ backgroundColor: "#1a1d27" }}
                  highlightColor={highlight}
                />

                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#242939"
                    borderRadius={6}
                    style={{ backgroundColor: "#1a1d27" }}
                    highlightColor={highlight}
                  />
                </div>
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#242939"
                    borderRadius={6}
                    style={{ backgroundColor: "#1a1d27" }}
                    highlightColor={highlight}
                  />
                </div>
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor="#242939"
                    borderRadius={6}
                    style={{ backgroundColor: "#1a1d27" }}
                    highlightColor={highlight}
                  />
                </div>
              </div>
            </div>
            <div className="needs-card-shimmer">
              <div className="inner-shimmer">
                <Skeleton
                  width={50}
                  height={7}
                  borderRadius={6}
                  baseColor={"#242939"}
                  style={{ backgroundColor: "#1a1d27" }}
                  highlightColor={highlight}
                />
                <Skeleton
                  width={100}
                  height={7}
                  borderRadius={6}
                  baseColor={"#242939"}
                  style={{ backgroundColor: "#1a1d27" }}
                  highlightColor={highlight}
                />
                <Skeleton
                  width={110}
                  height={7}
                  borderRadius={6}
                  baseColor={"#242939"}
                  style={{ backgroundColor: "#1a1d27" }}
                  highlightColor={highlight}
                />
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    borderRadius={6}
                    baseColor={"#242939"}
                    style={{ backgroundColor: "#1a1d27" }}
                    highlightColor={highlight}
                  />
                </div>
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    baseColor={"#242939"}
                    style={{ backgroundColor: "#1a1d27" }}
                    borderRadius={6}
                    highlightColor={highlight}
                  />
                </div>
                <div style={{ lineHeight: "10px" }}>
                  <Skeleton
                    width={150}
                    height={4}
                    style={{ backgroundColor: "#1a1d27" }}
                    baseColor={"#242939"}
                    borderRadius={6}
                    highlightColor={highlight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ratings-shimmer">
          <div className="star-loading">
            <img src={starLoader} alt="" />
          </div>
          <Skeleton
            width={85}
            height={7}
            baseColor={color}
            className="ratings-start"
            highlightColor={highlight}
          />
          <Skeleton
            width={"80%"}
            height={7}
            baseColor={color}
            className="ratings-middle"
            highlightColor={highlight}
          />
          <Skeleton
            width={"60%"}
            height={7}
            baseColor={color}
            className="ratings-end"
            highlightColor={highlight}
          />
        </div>
        <div className="testimonials-shimmer">
          <Skeleton
            width={100}
            height={7}
            baseColor={color}
            highlightColor={highlight}
          />
          <div className="inner-card">
            <div className="right-item">
              <Skeleton
                width={120}
                height={10}
                className="first"
                baseColor={color}
                highlightColor={highlight}
              />
            </div>
            <Skeleton
              className="middle-item"
              width={255}
              height={10}
              count={2}
              baseColor={color}
              highlightColor={highlight}
            />
            <div className="last-item">
              <Skeleton
                circle
                width={24}
                height={24}
                className="last-circle"
                baseColor={color}
                highlightColor={highlight}
              />
              <Skeleton
                width={110}
                height={10}
                className="last-shimmer"
                baseColor={color}
                highlightColor={highlight}
              />
            </div>
          </div>
        </div>
        <div className="super-skills-big">
          <div>
            <Skeleton
              circle
              width={68}
              height={68}
              className="super1"
              baseColor={color}
              highlightColor={highlight}
            />
          </div>
          <div className="super-div">
            <Skeleton
              width={100}
              height={7}
              className="super2"
              baseColor={color}
              highlightColor={highlight}
            />
            <Skeleton
              width={53}
              height={7}
              className="super2"
              baseColor={color}
              highlightColor={highlight}
            />
          </div>
        </div>
        <div className="shimmer-single">                 
          <Skeleton baseColor="#292939" width={100} height={7} highlightColor={highlight}/>
        </div>

        {/* <div className="i-need">
          <div className="i-need-top">
            <Skeleton height={7} width={50} baseColor={color} />
            <Skeleton height={7} width={50} baseColor={color} />
          </div>
          <div className="i-need-cards">
            <div className="card">
              <Skeleton
                height={7}
                width={64}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={10}
                width={205}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={10}
                width={120}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "26px", marginBottom: "30px" }}
              />
            </div>
            <div className="card">
              <Skeleton
                height={7}
                width={64}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={10}
                width={205}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={10}
                width={120}
                borderRadius={6}
                baseColor={color}
                style={{ marginTop: "26px", marginBottom: "30px" }}
              />
            </div>
          </div>
        </div> */}
        <div className="super-skills">
          <div
            style={{ textAlign: "left", width: "100%", padding: "0 0 6px 6px" }}
          >
            <Skeleton
              baseColor={color}
              width={100}
              height={7}
              borderRadius={6}
              highlightColor={highlight}
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
                highlightColor={highlight}
              />
            </div>
            <div className="super-div">
              <Skeleton
                width={240}
                height={7}
                className="super2"
                baseColor={color}
                highlightColor={highlight}
              />
              <Skeleton
                width={175}
                height={7}
                className="super2"
                baseColor={color}
                highlightColor={highlight}
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
                highlightColor={highlight}
              />
            </div>
            <div className="super-div">
              <Skeleton
                width={240}
                height={7}
                className="super2"
                baseColor={color}
                highlightColor={highlight}
              />
              <Skeleton
                width={175}
                height={7}
                className="super2"
                baseColor={color}
                highlightColor={highlight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileShimmer;
