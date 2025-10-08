import { useState, back, searchRed, searchIcon, closeIcon, useNavigate, Spinner } from './ImportsAwardsHeader';
import { goBackfromSearch, searchAwards, searchClearAwards } from '../AwardsFunction';
import { removeFocus } from '../../../../../globalFunctions';

export const AwardsHeader = ({ SearchFunction, searchText, setSearchText, setStartLoad, isOpenSearch, openandCloseSearch }) => {
    const [sendBlueLoader, setSendBlueLoader] = useState(true)
    const [searchRedLoader, setSearchRedLoader] = useState(true)
    const [searchIconLoader, setSearchIconLoader] = useState(true)
    const navigate = useNavigate();


    return (
        <>
            <div className={isOpenSearch ? "header-without_Border" : "view-all-header"}>
                <Spinner animation="border" variant="light" size="sm" className={sendBlueLoader ? 'show-img-loader back-icon-awar-spinner' : 'hide-img-loader'} />
                <div className={sendBlueLoader ? 'd-none' : "view-back1"} onClick={() => goBackfromSearch(isOpenSearch, openandCloseSearch, navigate, setStartLoad, setSearchText, SearchFunction)}>
                    <img src={back} alt="" className={!sendBlueLoader ? 'show-image-after-loader' : 'hide-img-loader'} onLoad={() => setSendBlueLoader(false)} />
                </div>
                {!isOpenSearch ?
                    <>
                        <div className="title1">My awards & certificates</div>
                        <div className='search-icon' onClick={() => openandCloseSearch(!isOpenSearch)}>
                            <Spinner animation="border" variant="light" size="sm" className={searchRedLoader ? 'show-img-loader red-search-spinner' : 'hide-img-loader'} />
                            <img src={searchRed} className={!searchRedLoader ? 'show-image-after-loader' : 'hide-img-loader'} alt="" onLoad={() => setSearchRedLoader(false)} />
                        </div>
                    </>
                    : <>
                        <div className='searchbar-main'>
                        <Spinner animation="border" variant="light" size="sm" className={searchIconLoader ? 'showing-img-loader  searchIconLoader' : 'hiding-img-loader'} />
                            <img  className={!searchIconLoader ? 'showing-img-loader Search-img' : "hiding-img-loader" } src={searchIcon} alt=""  
                              onLoad={() => setSearchIconLoader(false)}
                              />
                            <input type='text' value={searchText}
                                onKeyUp={(e) => removeFocus(e)}
                                autoFocus
                                placeholder='Search by Title/Issued date/Issued by'

                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    if (/^[0-9A-Za-z_-]+(?:[\s_\-][0-9A-Za-z_-]+)*\s?$/.test(inputValue) || inputValue === "") {
                                        searchAwards(e, setSearchText, setStartLoad, SearchFunction, searchText)
                                    };
                                }}
                            />
                            {searchText.length > 0 && <img className='close-img' src={closeIcon} alt="" onClick={(e) => searchClearAwards("", setSearchText, setStartLoad, SearchFunction)} />}
                        </div>
                    </>}
            </div>
        </>

    )
}
