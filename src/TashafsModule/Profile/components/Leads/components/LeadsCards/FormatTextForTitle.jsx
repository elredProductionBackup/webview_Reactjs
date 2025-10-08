import React from 'react'
function FormatTextForTitle({ data,classStyle }) {
  return (
    <>
      <pre className={classStyle}>
      {
          data?.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < data?.split('\n').length - 1 ? <br /> : null}
              </React.Fragment>
          ))}
      </pre>
    </>

  )
}

export default FormatTextForTitle
