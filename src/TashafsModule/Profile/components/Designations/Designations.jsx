import React, { useEffect, useRef, useState } from 'react'
import './designations.scss'
import DesignationPopup from './DesignationPopup/DesignationPopup';
import { capitalizeEachWord } from '../../../../globalFunctions';
import Skeleton from 'react-loading-skeleton';

const Designations = ({ baseColor, data, productionUrl, isLive, showDesignationsPopup, setShowDesignationsPopup }) => {
    const result = data?.result?.sort((a, b) => a.length - b.length);
    const firstDesignationChipRef = useRef(null);
    const thirdDesignationChipRef = useRef(null);
    const [designationChipWidth, setDesignationChipWidth] = useState([]);
    const [widths, setWidths] = useState([]);
    const [chipsLoader, setChipsLoader] = useState(true);

    useEffect(() => {
        if (data?.result?.length === 0) setChipsLoader(false);
        setDesignationChipWidth([firstDesignationChipRef?.current?.offsetWidth + 1,
        thirdDesignationChipRef?.current?.offsetWidth + 1]);
    }, [data]);

    useEffect(() => {
        if (designationChipWidth?.length !== 0) widthCalculator();
    }, [designationChipWidth]) // eslint-disable-line

    const widthCalculator = () => {
        if (result?.length === 1) {
            setWidths(["100%"]);
            setChipsLoader(false);
            return false;
        };
        if (result?.length === 2) {
            setWidths(["100%", "100%"]);
            setChipsLoader(false);
            return false;
        };
        const gapValue = 10;
        const minWidth = 40;
        const countChipWidth = 39;
        let maxWidth1 = `calc(100% - ${minWidth + gapValue}px)`;
        let maxWidth2 = `calc(100% - ${designationChipWidth?.[0] + gapValue}px`;
        let maxWidth3 = result?.length > 4 ? `calc(100% - ${minWidth + (2 * gapValue) + countChipWidth}px)`
            : result?.length === 3 ? "100%"
                : `calc(100% - ${minWidth + gapValue}px)`;
        let maxWidth4 = result?.length > 4 ? `calc(100% - ${designationChipWidth?.[1] + (2 * gapValue) + countChipWidth}px)` :
            `calc(100% - ${designationChipWidth?.[1] + gapValue}px)`;
        setWidths([maxWidth1, maxWidth2, maxWidth3, maxWidth4]);
        setChipsLoader(false);
    }

    return (
        <>
            <div className='designations_view' style={{ backgroundColor: `${baseColor}` }}>
                <div className="designation_title">
                    I can offer
                </div>
                {chipsLoader ? 
                <div className='chip_collab_tag_shimmer_container'>
                    <Skeleton height={24} baseColor="#242939" highlightColor="" className='chip_collab_tag_shimmer' />
                    <Skeleton height={24} baseColor="#242939" highlightColor="" className='chip_collab_tag_shimmer' />
                    <Skeleton height={24} baseColor="#242939" highlightColor="" className='chip_collab_tag_shimmer' />
                    <Skeleton height={24} baseColor="#242939" highlightColor="" className='chip_collab_tag_shimmer' />
                </div>
                : null}
                <div className='all_designations'>
                    {
                        result?.length > 4 ?
                            result?.slice(0, 4).map((item, id) => (
                                <span className="chip_designation" key={id} ref={id === 0 ? firstDesignationChipRef : id === 2 ? thirdDesignationChipRef : null}
                                    style={{ maxWidth: widths[id] }}
                                >
                                    {capitalizeEachWord(item)}
                                </span>
                            )) :
                            result?.map((item, id) => (
                                <span className="chip_designation" key={id} ref={id === 0 ? firstDesignationChipRef : id === 2 ? thirdDesignationChipRef : null}
                                    style={{ maxWidth: widths[id] }}
                                >
                                    {capitalizeEachWord(item)}
                                </span>
                            ))
                    }

                    {result?.length > 4 && <span className='chip_count' onClick={() => setShowDesignationsPopup(true)}>
                        +{result?.length - 4}
                    </span>}
                </div>
            </div>
            <DesignationPopup open={showDesignationsPopup} setOpen={setShowDesignationsPopup} designations={result} productionUrl={productionUrl} isLive={isLive} />
        </>
    )
}

export default Designations
