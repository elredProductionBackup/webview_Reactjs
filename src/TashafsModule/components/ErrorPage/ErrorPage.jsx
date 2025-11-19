import React, { useEffect } from 'react'
import './errorpage.scss'
import errorScreen from '../../../assets/images/no_internet.svg'
import { clearToasts } from 'react-simple-toasts';

const ErrorPage = () => {
  useEffect(() => {
    clearToasts();
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className='errorPage'>
      <div className='ele_div'>
        <img src={errorScreen} alt="" />
        <div className='oops'>Oops!</div>
        <div className='error_msg'>Something went wrong,
          please try again</div>
        <button className="rel-btn" onClick={handleReload}>
          Reload
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
