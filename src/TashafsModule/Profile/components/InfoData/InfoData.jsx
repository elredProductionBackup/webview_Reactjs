import './infodata.scss'

const InfoData = ({rgba}) => {
  return (
    <div className='infodata' style={{ background: `${rgba}` }}>
        I am <span>a professional / employee.</span> My industry is <span>Design</span>. My company / business name is <span>Rextone Industries Ltd.</span>
    </div>
  )
}

export default InfoData