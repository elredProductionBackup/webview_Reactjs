export const openProfile = (user) => {
  const time = new Date().getTime().toString().slice(-6)
  // const url = `https://webviewtestnext.elred.io/shareProfile?userCode=${user}&t=${time}`;
  const url = `${process.env.REACT_APP_URL}/shareProfile?userCode=${user}&t=${time}`;
  window.open(url, "_blank");
};

export const searchRatinghandler = (e, setSearchText, setLoading, searchHandler, type, makeLoad, page, prevSearchText, dataLength, searchMore) => {
 // let reg = /^(\w+\s?)*\s*$/;
  let text = e;
  //reg.test(e) ? e.replace(/\s+$/, ' ') : e;
  setSearchText(text)
  if (makeLoad) {
    if (type === 'ethical' || type === 'Meet') {
      setLoading({ ethical: type === 'ethical' ? true : false, Meet: type === 'ethical' ? false : true })
    } else {
      if (type === "work") {
        setLoading({ ethicalsearchNetwork: false, workSearch: true })

      } else {
        setLoading({ ethicalsearchNetwork: true, workSearch: false })

      }

      // setLoading({ ethicalsearchNetwork: type === "ethical-network" ? true : false, workSearch: type !== "ethical-network" ? true : false })
    }
    searchHandler(text, 1, prevSearchText, dataLength, searchMore)
  }

}

export const closePopUphandler = (close, setSearchText, closePopUp, type, fetchMoreData) => {
  close(false);
  setSearchText("")
  closePopUp()
 
  if (type === "ethical-network" || type === "work") {
    fetchMoreData("")
  }
}
export const SearchHandlers = (e, setSearchText, setLoading, searchHandler, type, searchText, page, prevSearchText, dataLength, searchMore) => {

  // let reg = /^[a-zA-Z]+$/;
  // if (!e.nativeEvent.data || e?.nativeEvent?.data?.match(reg) || e?.nativeEvent.inputType === "deleteContentBackward" || e?.nativeEvent?.data === " " || e.nativeEvent.data === '-') {

     let text = e.target.value
    //.replace(/[&\/\\#,+()$~%.'":+*?<>{}\d+]/g, '')
    searchRatinghandler(text, setSearchText, setLoading, searchHandler, type, true, page, prevSearchText, dataLength, searchMore)
  // } else {
  //   searchRatinghandler(searchText, setSearchText, setLoading, searchHandler, type, false, page, prevSearchText, dataLength, searchMore)
  // }
}


