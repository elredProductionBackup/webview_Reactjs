import React, { useEffect, useState } from "react";
import "./logotitle.scss";
import { Spinner } from "react-bootstrap";
import { getURlValid } from "../../../globalFunctions";

const LogoTitle = ({ logo, title, action, status, favicon, address, lat, lon, blankAddress, isValid }) => {

  const [imageLoading, setImageLoading] = useState(true);
  const faviconFetchLink = 'https://www.google.com/s2/favicons?domain='
  const [finalUrl, setfinalUrl] = useState('')
  const [showFavIcon, setshowFavIcon] = useState(true)
  useEffect(() => {
    let imgTitle = title; let finalUrla;
    if (favicon) {
      imgTitle = (title?.includes('www.')) ? title?.replaceAll('www.', '') : title;
      imgTitle = imgTitle.includes('http') || imgTitle.includes('https') ? imgTitle : `https://${imgTitle}`
      finalUrla = `${faviconFetchLink}${imgTitle}&sz=32`
      setfinalUrl(finalUrla)
      if (status) {
        try {
          getURlValid(title.includes('http') || title.includes('https') ? title : `https://${title}`).then((res) => {
            setshowFavIcon(res)
          }).catch((e) => { setshowFavIcon(false) })
        } catch (error) { setshowFavIcon(false) }
      }
    }
  }, [title])

  return (
    <div className="logotitle" onClick={status ? (title === blankAddress ? null : lat !== undefined ? () => action(lat, lon) : () => action(title)) : null}>
      <span className={imageLoading ? "spinner_box" : ""}><Spinner animation="border" variant="danger" size="sm" className={`${imageLoading ? "show-img mx-2 my-2 popup-spinner-small" : "hide-img"}`} /></span>
      <span className={!favicon ? 'img-icon-wrapper' : 'img-icon-wrapper-favIcon'} >
        {<img src={favicon ? (status && showFavIcon && finalUrl !== "" ? finalUrl : logo) : logo} alt="" className={`${imageLoading ? "hide-img " : "show-img logo"} 
        ${status ? (title === blankAddress ? 'title' : "title cursorDisplay") : "title"}`}
          onLoad={() => setImageLoading(false)}
          onError={() => setfinalUrl("")}
        />}

      </span>

      <div className={status ? (title === blankAddress ? "title" : "title cursorDisplay") : "title"} style={{ width: "100%" }}
      >{address ? title : title?.length <= 50 ? title : title?.slice(0, 50) + '...'}</div>
    </div>
  );
};

export default LogoTitle;
