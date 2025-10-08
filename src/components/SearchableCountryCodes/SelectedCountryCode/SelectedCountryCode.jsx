const SelectedCountryCode = ({ showList, setShowList, formData, DownIcon }) => {
  return (
    <div className="searchable-country-codes-top-field" onClick={() => setShowList(!showList)}>
        <span className="codes-top-field-text">{formData?.country_code}</span>
        <img src={DownIcon} alt="" className={showList ? "searchable-country-codes-down-icon searchable-country-codes-down-icon-rotate" 
          : "searchable-country-codes-down-icon"} />
    </div>
  )
}

export default SelectedCountryCode;