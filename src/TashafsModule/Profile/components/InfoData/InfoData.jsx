import './infodata.scss'

const InfoData = ({rgba,data}) => {
  return (
    <div className='infodata' style={{ background: `${rgba}` }}>
        I am <span>a <span className='titlecase-span'>{data?.profession}</span></span>.{data?.industry?.industryName && <> My industry is <span className='titlecase-span'>{data?.industry?.industryName}</span></>}. My company / business name is <span className='titlecase-span'>{data?.organizationName}</span>
    </div>
  )
}

export default InfoData