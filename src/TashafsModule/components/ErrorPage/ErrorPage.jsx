import React, { useEffect } from 'react'
import './errorpage.scss'
import errorScreen from '../../../assets/images/no_internet.svg'
import { clearToasts } from 'react-simple-toasts';

const ErrorPage = () => {
  useEffect(() => {
    clearToasts();
  }, []);

  return (
    <div className='errorPage'>
      <div className='ele_div'>
        <img src={errorScreen} alt="" />
        <div className='oops'>Oops!</div>
        <div className='error_msg'>Something went wrong,
          please try again</div>
      </div>

    </div>
  )
}

export default ErrorPage
