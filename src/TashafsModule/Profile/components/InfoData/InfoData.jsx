import './infodata.scss'

const InfoData = ({rgba,data}) => {

const startsWithVowel = (word) => /^[aeiou]/i.test(word);
const profession = data?.profession || "";
const article = startsWithVowel(profession) ? "an" : "a";

return (
<div className='infodata' style={{ background: `${rgba}` }}>
I am <span>{article} <span className='lowercase-span'>{profession}</span></span>.

  {data?.industry?.industryName && (
    <> My industry is <span className='lowercase-span'>{data?.industry?.industryName}</span>.</>
  )}

  {data?.organizationName && (
    profession.toLowerCase() === "student"
      ? (
        <> My high school / college name is <span className='lowercase-span'>{data?.organizationName}</span>.</>
      )
      : (
        <> My company / business name is <span className='titlecase-span'>{data?.organizationName}</span>.</>
      )
  )}
</div>

)
}

export default InfoData
