import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { openEmojiAtPosition } from '../../../Profile/components/Leads/LeadsGlobalFunctions'

export const  InputEmojiIcon=({ openEmoji, isMobile, emojiLoader, emoji, setEmojiLoader, setopenEmoji, setCurrentPosition, closeIcon })=> {
    const [crossLoader, setcrossLoader] = useState(true)

    return (
        <>
            {!openEmoji && !isMobile ? (
                <span> <Spinner animation="border" variant="secondary" size="sm" className={emojiLoader ? 'show-img-loader spinneremoji' : 'hide-img-loader'} />
                    <img className={!emojiLoader ? 'show-image-after-loader smile-img-1' : "hide-img-loader"}
                        src={emoji} alt="" onLoad={() => setEmojiLoader(false)}
                        onClick={() => openEmojiAtPosition(setopenEmoji, setCurrentPosition, "leads-text")} /></span>) : !isMobile && (
                            <>
                                <span> 
                                    <Spinner animation="border" variant="secondary" size="sm" className={crossLoader ? 'show-img-loader spinner-cross' : 'hide-img-loader'} />
                                </span>
                                <img
                                    className={!crossLoader ? 'show-image-after-loader close-img' : "hide-img-loader"}
                                    src={closeIcon} alt=""
                                    onLoad={() => setcrossLoader(false)}
                                    onClick={() => setopenEmoji(false)} 
                                />
                            </>
                        )}
        </>
    )
}


