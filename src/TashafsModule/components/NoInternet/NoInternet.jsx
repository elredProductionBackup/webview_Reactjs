import React,{useState} from 'react'
import noInternet from '../../../assets/images/no_dark.png'
import toast, { toastConfig } from "react-simple-toasts";
import {OffLineRetry} from '../../../globalFunctions'
import './nointernet.scss'

function NoInternet({ setisOffline}) {
    toastConfig({ theme: "dark" });
const[isButton,setIsButton]=useState(false)

    return (
        
        <div className="container-wrapper">
            <div className="centered-div ">
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <p className='somethingwent-wrong mt-4'>Something went wrong...</p>
                    <h5 className='noInternet'>No internet connection</h5>
                    <img className="no-Awards" alt="" src={noInternet} />
                    <button className="buttonRetry" disabled={isButton} onClick={() => OffLineRetry(toast,setisOffline,setIsButton)}>Try Again</button>

                </div>
            </div>
        </div>
    )
}

export default NoInternet
