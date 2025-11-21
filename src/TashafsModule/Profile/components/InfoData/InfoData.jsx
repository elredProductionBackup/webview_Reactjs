import './infodata.scss'

const InfoData = ({rgba,data}) => {

    const startsWithVowel = (word) => /^[aeiou]/i.test(word);

  const article = startsWithVowel(data?.profession) ? "an" : "a";

  return (
    <div className='infodata' style={{ background: `${rgba}` }}>
        I am <span>{article} <span className='titlecase-span'>{data?.profession}</span></span>.{data?.industry?.industryName && <> My industry is <span className='titlecase-span'>{data?.industry?.industryName}</span>.</>} {data?.organizationName && <>My company / business name is <span className='titlecase-span'>{data?.organizationName}</span></>}
    </div>
  )
}

export default InfoData