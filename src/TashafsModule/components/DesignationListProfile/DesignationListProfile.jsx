import { calcTextLength, transformArray, transformArrayRatings, transformText } from "../../../globalFunctions";

const DesignationListProfile = ({ designation, maxWidth }) => {
    // let designations = designation?.map((item) => item?.value);

    // const displayDesignations = () => {
    //   if (designations?.length === 0) {
    //     return "";
    //   } else if (designations?.length === 1) {
    //     if (designations?.[0].length * 8 > maxWidth) 
    //       return `${designations?.[0].slice(0, Math.floor(maxWidth / 8))}...`;
    //     else return designations?.[0];
    //   } else {
    //     let display = "";
    //     let remainingDesignationsCount = 0;
    //     let currentWidth = 0;

    //     // Handle the first designation if it's too long
    //     if (designations?.[0].length * 8 > maxWidth) {
    //       display += `${designations?.[0].slice(0, Math.floor(maxWidth / 8))}... | `;
    //       return display + `+${designations?.length - 1}`;
    //     }
    //     for (let i = 0; i < designations?.length; i++) {
    //       const designationWidth = designations?.[i]?.length * 8; // Approximating width based on characters (adjust as needed)
    //       if (currentWidth + designationWidth < maxWidth) {
    //         // Include the designation in the display
    //         display += `${designations?.[i]} | `;
    //         if(currentWidth > 128){
    //           currentWidth += designationWidth;
    //         }else{
    //           currentWidth += designationWidth + 10;
    //         }   
    //       } else {
    //         // Designation doesn't fit, increment the count of remaining designations
    //         remainingDesignationsCount = designations?.length - i;
    //         break;
    //       }
    //     }


    // const displayDesignations = () => {
    //     if (designations?.length === 0) {
    //         return "";
    //     } else if (designations?.length === 1) {
    //         if (designations?.[0].length * 8 > maxWidth)
    //             return transformArray(designations)?.slice(0, Math.floor(maxWidth / 8))+"...";
    //         else return transformArray(designations);
    //     } else {
    //         let display = "";
    //         let remainingDesignationsCount = 0;
    //         let currentWidth = 0;

    //         if (designations?.[0].length * 8 > maxWidth) {

    //             display += `${transformArray(designations).slice(0, Math.floor(maxWidth / 8))}... | `;
    //             return display + `+${designations?.length - 1}`;
    //         }
    //         for (let i = 0; i < designations?.length; i++) {
    //             let designation = designations[i];
    //             const designationWidth = designation?.length * 8; 
    //             if (designation.length <= 3) {
    //                 designation = transformText(designation)
    //             } else {
    //                 designation = transformText(designation)
    //             }

    //             if (currentWidth + designationWidth < maxWidth) {
    //                 display += `${transformText(designation)} | `;
    //                 if (currentWidth > 128) {
    //                     currentWidth += designationWidth;
    //                 } else {
    //                     currentWidth += designationWidth + 10;
    //                 }
    //             } else {
    //                 remainingDesignationsCount = designations?.length - i;
    //                 break;
    //             }
    //         }

    //         if (remainingDesignationsCount > 0) {
    //             display += `+ ${remainingDesignationsCount}`;
    //         } else {
    //             display = display?.slice(0, -3);
    //         }
    //         return display;
    //     }
    // };
    // return displayDesignations();

    const designations = designation?.map((item) => transformArrayRatings(item?.value));
    const displayDesignations = () => {
        if (designations?.length === 0) {
            return "";
        } else if (designations?.length === 1) {
            if (designations?.[0].length * 12 <= maxWidth) {
                if (designations?.[0].length * 7 > maxWidth) {
                    return `${designations?.[0].slice(0, Math.floor(maxWidth / 7))}...`
                } else {
                    return designations?.[0];
                }
            } else {
                // if((designations?.[0].length * 12 > maxWidth)){
                //     return `${designations?.[0].slice(0, Math.floor(maxWidth / 6))}...`

                // }
                // else{
                //     return designations?.[0];
                // }

                if ((designations?.[0].length * 12 > maxWidth)) {
                    if (designations?.[0].length * 7 > maxWidth) {
                        if (designations?.[0].length * 7 - 20 < maxWidth) {
                            return designations?.[0];
                        } else {
                            return `${designations?.[0].slice(0, Math.floor(maxWidth / 6))}...`
                        }
                    } else {
                        return `${calcTextLength(20, designations?.[0], "")}`
                    }
                }
                else {
                    return designations?.[0];
                }
            }
        } else if (designation?.length === 2) {

            if (designations?.[1].length * 12 <= maxWidth) {

                if (designations?.[1].length * 12 >= maxWidth / 2) {
                    return `${designations?.[0]} | + ${designations.length - 1} `;
                } else {
                    return `${designations?.[0]} | ${designations?.[1]} `;
                }


            } else {
                if (designations?.[0].length * 7 > maxWidth) {
                    if ((designations?.[0].length * 7 > maxWidth / 2)) {
                        return `${designations?.[0].slice(0, Math.floor(maxWidth / 8))}... | +${designations.length - 1}`
                    } else {
                       
                        return `${calcTextLength(18, designations?.[0], "")} | + ${designations.length - 1} `;
                    }

                    // return `${designations?.[0].slice(0, Math.floor(maxWidth / 7))}... | +${designations.length - 1}`
                } else {
                    return `${designations?.[0]} | + ${designations.length - 1} `;
                }
            }

        } else if (designation?.length === 3) {
            if (designations?.[0].length * 12 > maxWidth) {
                if (designations?.[0].length * 7 > maxWidth) {

                    return `${designations?.[0].slice(0, Math.floor(maxWidth / 7))}... | +${designations.length - 1}`
                } else {
                    return `${calcTextLength(22, designations?.[0], "")} | + ${designations.length - 1} `;

                }
            } else {
                if (designations?.[1].length * 12 > maxWidth) {
                    return `${designations?.[0]} | ${designations?.[1]} | + ${designations.length - 2}`;
                } else {
                    if (`${designations?.[0]} | ${designations?.[1]}`.length * 12 > maxWidth) {
                        return `${designations?.[0]} | ${designations?.[1]} |  + ${designations.length - 2}`;
                    } else {
                        if (designations?.[2].length * 15 > maxWidth) {
                            // ${designations?.[2].slice(0, Math.floor(maxWidth / 8))}...
                            return `${designations?.[0]} | ${designations?.[1]} | + ${designations.length - 2}`;
                        } else {
                            return `${designations?.[0]} | ${designations?.[1]} | ${designations?.[2]} `;
                        }
                    }
                }
            }

        }

        else {
            let display = "";
            let remainingDesignationsCount = 0;
            let currentWidth = 0;



            // Handle the first designation if it's too long
            if (designations?.[0].length * 15 > maxWidth) {

                if (designations?.[0].length * 7 > maxWidth) {

                    display += `${designations?.[0].slice(0, Math.floor(maxWidth / 7))}... | `
                } else {

                    display += `${designations?.[0]} | `;
                }


                return display + `+ ${designations?.length - 1}`;
            }


            for (let i = 0; i < designations?.length; i++) {
                const designationWidth = designations?.[i]?.length * 10; // Approximating width based on characters (adjust as needed)
                if (currentWidth + designationWidth < maxWidth) {
                    // Include the designation in the display
                    display += `${designations?.[i]} | `;
                    currentWidth += designationWidth;
                } else {
                    // Designation doesn't fit, increment the count of remaining designations

                    remainingDesignationsCount = designations?.length - i;
                    break;
                }
            }



            if (remainingDesignationsCount > 0) {

                display += `+ ${remainingDesignationsCount}`;
            } else {
                // Remove the trailing ' | ' if all designations fit
                display = display?.slice(0, -3);
            }

            return display;
        }
    };
    return displayDesignations();

};

export default DesignationListProfile;
