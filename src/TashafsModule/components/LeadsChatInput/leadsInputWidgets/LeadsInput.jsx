import React, { useEffect } from 'react'
import {InputEmojiIcon,Sendbutton,onKeyDownHandler, setCurrentPosval,Spinner } from '../LeadsInputImports'

export const  LeadsInput=({ openEmoji, isMobile, emojiLoader, emoji, setEmojiLoader, setopenEmoji, setCurrentPosition, crossLoader, closeIcon,
    setcrossLoader, accessEmpty, data, navigate, value, leadId, sendMessageProps, userCode, setName, name, formData, onChange,
    inputHandlerChatProps, sendOverlay, inputRef, sendLoader, sendDisable, send, sendBlueLoader, setSendLoader, setSendBlueLoader
})=> {
    let inputEmojiIconProps={ openEmoji, isMobile, emojiLoader, emoji, setEmojiLoader, setopenEmoji, setCurrentPosition, crossLoader, closeIcon, setcrossLoader }
    let sendButtonProps={sendOverlay,Spinner,value,sendDisable,sendLoader,setSendLoader,sendBlueLoader,send,setSendBlueLoader,accessEmpty, data, navigate, leadId, sendMessageProps, userCode, setName, name}

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
        <>
            <div className={`input_comp `}>
                <div className="input_emoji">
                   <InputEmojiIcon {...inputEmojiIconProps} />
                    <textarea id="leads-text" onKeyDown={(e) => onKeyDownHandler(e, inputHandlerChatProps,setCurrentPosition)} 
                        className={!isMobile ? "withemoji" : "withoutemoji"} placeholder="Type here..."
                        rows={1}
                        value={formData.message} onChange={(e) => onChange(e.target.value, inputHandlerChatProps, setCurrentPosition,e)}
                        disabled={sendOverlay} ref={inputRef}  autoComplete="off"
                      onClick={() => setCurrentPosval(openEmoji, setopenEmoji, setCurrentPosition, "leads-text")} />
                </div>
                <Sendbutton {...sendButtonProps} />
               
            </div>

        </>
    )
}

export default LeadsInput
