import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'

const InputEmojiComp = ({openEmoji, isMobile, smileyLoader, emoji, openEmojiAtPosition, setopenEmoji, setCurrentPosition, setSmileyLoader,
    closeIcon, onKeyDownHandler, sendMessageFromInputProps, value, inputRef, inputHandlerChatProps, sendOverlay, setCurrentPosval, onChange
}) => {

  useEffect(() => {
    const handleScroll = () => {
      if (inputRef.current === document.activeElement) {
        inputRef.current.blur(); 
      }
    };
    window.addEventListener('touchmove', handleScroll, { passive: true }); 

    return () => window.removeEventListener('touchmove', handleScroll); 
  }, []);

  return (
    <div className="input_emoji">
            {!openEmoji && !isMobile ? (
              <>
              <Spinner animation="border" variant="light" size="sm" className={smileyLoader ? 'show-img-loader needs-top-margin-loader shimmer-emoji-loader-right' : 'hide-img-loader'} style={{width:'21px', height:'19px'}}/>
              <img className={!smileyLoader?"smile-img":"hide-img-loader"} src={emoji} alt="" onClick={() => openEmojiAtPosition(setopenEmoji, setCurrentPosition, "needs-text")}
               onLoad={()=>setSmileyLoader(false)}
               />
              </>
            ) : !isMobile && (
              <img
                className="close-img"
                src={closeIcon}
                alt=""
                onClick={() => setopenEmoji(false)}
              />
            )}
            <textarea
             onKeyDown={(e)=>onKeyDownHandler(e,inputHandlerChatProps,setCurrentPosition)}
              type="text"
              id="needs-text"
              placeholder="Type here..."
              value={value}
              ref={inputRef}
              onChange={(e) => onChange(e.target.value, inputHandlerChatProps,setCurrentPosition,e)}
              style={{color:"white"}}
              disabled={sendOverlay}
              onClick={() => setCurrentPosval(openEmoji,setopenEmoji,setCurrentPosition,"needs-text")}
              autoComplete="off"
              className={!isMobile ? "withemoji" : "withoutemoji"} 
            />
          </div>
  )
}

export default InputEmojiComp
