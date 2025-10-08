export const searchAwards = (e, setSearchText, setStartLoad, SearchFunction, searchText) => {

    // let reg = /^[a-zA-Z0-9]+$/;

    // if (!e.nativeEvent.data || e?.nativeEvent?.data?.match(reg) || e?.nativeEvent.inputType === "deleteContentBackward" || e?.nativeEvent?.data === " " || e.nativeEvent.data === '-') {

        //let regs= /^(\w+\s?)*\s*$/;
        let text = e.target.value;
        //regs.test(e.target.value) ? e.target.value.replace(/\s+$/, ' ') : e.target.value;
        setSearchText(text)

        if (searchText.trim() !== e.target.value.trim()) {

            setStartLoad(true)
            SearchFunction(e.target.value.toLowerCase())
        }

    // } else {

    //     setSearchText(searchText)
    //     setStartLoad(false)
    // }


}
export const searchClearAwards = (e, setSearchText, setStartLoad, SearchFunction) => {
    setSearchText(e)
    setStartLoad(true)
    SearchFunction(e)
}
export const goBackfromSearch = (isOpenSearch, setisOpenSearch, navigate, setStartLoad, setSearchText, SearchFunction) => {
    if (isOpenSearch) {
        setisOpenSearch(false)
        searchClearAwards("", setSearchText, setStartLoad, SearchFunction)
    } else {
        navigate(-1)
        setStartLoad(true)
    }

}