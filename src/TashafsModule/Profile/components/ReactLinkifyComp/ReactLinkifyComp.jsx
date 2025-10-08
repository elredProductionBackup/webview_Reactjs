import React from "react";
import ReactLinkify from "react-linkify";
import { getBrowserType } from "../../../../globalFunctions";


const matchDecorator = (text) => {
  const urlRegex = /((https?:\/\/)?[a-z0-9-]+\.[a-z0-9-]+\.[a-z0-9-]+[^ \n]*)/gi;
  const ignoredPattern = /abc\.xyz/gi;

  const matches = [];
  let match;
  while ((match = urlRegex.exec(text)) !== null) {
    if (!ignoredPattern.test(match[0])) {
      matches.push({
        href: match[0],
        index: match.index,
        lastIndex: urlRegex.lastIndex,
      });
    }
  }
  return matches;
};



const ReactLinkifyComp = ({ data }) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  const browserType = getBrowserType();


  return (
    // <ReactLinkify
    //   componentDecorator={(decorateHref, decoratedText, key) => {
    //     if (decorateHref.startsWith("mailto:")) {
    //       const email = decorateHref.replace("mailto:", "");
    //       if (isIOS || browserType === "safari mac") {
    //         return (
    //           <a
    //             target="_top"
    //             rel="noopener noreferrer"
    //             href={`mailto:${email}`}
    //             key={key}
    //           >
    //             {decoratedText}
    //           </a>
    //         );
    //       } else if (isAndroid) {
    //         return (
    //           <a
    //             target="_blank"
    //             href={`intent://send?to=${email}#Intent;scheme=mailto;package=com.google.android.gm;end`}
    //             key={key}
    //           >
    //             {decoratedText}
    //           </a>
    //         );
    //       } else {
    //         return (
    //           <a
    //             target="_blank"
    //             href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
    //             key={key}
    //           >
    //             {decoratedText}
    //           </a>
    //         );
    //       }
    //     } else {
    //       return (
    //         <a target="_blank" href={decorateHref} key={key}>
    //           {decoratedText}
    //         </a>
    //       );
    //     }
    //   }}
    // >
    //   {data}
    // </ReactLinkify>
    <ReactLinkify
      componentDecorator={(decorateHref, decoratedText, key) => {
        // Pattern to exclude text in the form "word.word"
        const excludePattern = /^[a-z0-9]+\.[a-z0-9]+$/i;

        if (excludePattern.test(decoratedText)) {
          return <span key={key} style={{fontFamily:'AvenirNextLTPro-Regular'}}>{decoratedText}</span>;
        }

        if (decorateHref && decorateHref.startsWith('mailto:')) {
          const email = decorateHref.replace('mailto:', '');
          if (isIOS || browserType === 'safari mac') {
            return (
              <a
                target="_top"
                rel="noopener noreferrer"
                href={`mailto:${email}`}
                key={key}
              >
                {decoratedText}
              </a>
            );
          } else if (isAndroid) {
            return (
              <a
                target="_blank"
                href={`intent://send?to=${email}#Intent;scheme=mailto;package=com.google.android.gm;end`}
                key={key}
              >
                {decoratedText}
              </a>
            );
          } else {
            return (
              <a
                target="_blank"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                key={key}
              >
                {decoratedText}
              </a>
            );
          }
        } else if (decorateHref) {
          return (
            <a target="_blank" href={decorateHref} key={key}>
              {decoratedText}
            </a>
          );
        } else {
          return <span key={key}>{decoratedText}</span>;
        }
      }}
    >
      {data}
    </ReactLinkify>
  );
};

export default ReactLinkifyComp;
