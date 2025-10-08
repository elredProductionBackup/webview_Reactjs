import React from 'react'
import './nodatatext.scss'

const NoDataText = ({msg, className}) => {
  return (
    <div className={className? `${className} nodata`: 'nodata'}>
      {msg}
    </div>
  )
}

export default NoDataText
