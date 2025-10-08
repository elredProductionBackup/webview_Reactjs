import React from 'react'
import { isMacOs } from 'react-device-detect';
import ReactLinkify from 'react-linkify';

const FormatmessageandLink = ({msg}) => {
    const formattedText = msg.split('\n').map((line, index) => (
        <>
            {line}
            {index < msg?.split('\n').length - 1 ? <br /> : null}
        </>
    ));
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

  return (
    <ReactLinkify
      componentDecorator={(decorateHref, decoratedText, key) => {
        if (decorateHref.startsWith("mailto:")) {
          const email = decorateHref.replace("mailto:", "");
          if (isIOS) {
            return (
              <a
                target="_top"
                rel="noopener noreferrer"
                href={`mailto:${email}`}
                key={key}
                onClick={(e) => e.stopPropagation()} 
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
                onClick={(e) => e.stopPropagation()} 
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
                onClick={(e) => e.stopPropagation()} 
              >
                {decoratedText}
              </a>
            );
          }
        } else {
          return (
            <a onClick={(e) => e.stopPropagation()}  target="_blank" href={decorateHref} key={key}>
              {decoratedText}
            </a>
          );
        }
      }}
    >
      {formattedText}
    </ReactLinkify>
  );
}

export default FormatmessageandLink
