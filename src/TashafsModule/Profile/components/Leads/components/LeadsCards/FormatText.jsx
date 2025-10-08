import React from 'react'
import ReactLinkifyComp from '../../../ReactLinkifyComp/ReactLinkifyComp';

function FormatText({ data }) {
  const formattedDesc = data?.split('\n').map((line, index) => (
    <>
      {line}
      {index < data?.split('\n').length - 1 ? <br /> : null}
    </>
  ));

  return (
    <>
      <ReactLinkifyComp data={formattedDesc} />
    </>

  )
}
export default FormatText