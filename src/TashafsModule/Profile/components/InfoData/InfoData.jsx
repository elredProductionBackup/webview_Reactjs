import './infodata.scss'

const InfoData = ({ rgba, data }) => {

  const startsWithVowel = (word) => /^[aeiou]/i.test(word);
  const profession = data?.profession || "";
  const article = startsWithVowel(profession) ? "an" : "a";

  // Custom display text for profession
  const getProfessionLabel = (prof) => {
    const p = prof.toLowerCase();

    switch (p) {
      case "professional":
        return "professional / employee";
      case "freelancer":
        return "freelancer / work for myself";
      case "promoter":
        return "part of a family owned business";
      case "entrepreneur":
        return "entrepreneur, founder";
      default:
        return prof;
    }
  };

  return (
    <div className='infodata' style={{ background: `${rgba}` }}>
      I am <span className='lowercase-span'>{profession !== 'Promoter' && article} {getProfessionLabel(profession)}</span>.

      {data?.industry?.industryName && (
        <> My industry is <span className='lowercase-span'>{data?.industry?.industryName}</span>.</>
      )}

      {data?.organizationName && (
        profession.toLowerCase() === "student"
          ? (
            <> My high school / college name is <span>{data?.organizationName}</span>.</>
          )
          : (
            <> My company / business name is <span>{data?.organizationName}</span>.</>
          )
      )}
    </div>
  )
}

export default InfoData;
