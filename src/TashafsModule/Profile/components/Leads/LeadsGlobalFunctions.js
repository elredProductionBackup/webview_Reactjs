import axios from 'axios';
import _ from 'lodash';
import { byDate, capitalizeEachWord, ScrollToTop } from '../../../../globalFunctions'
import { reload } from '../../../../globalFunctions'
import moment from 'moment';
import toast from "react-simple-toasts";
import { isFirefox, isMacOs } from "react-device-detect";

export const scrollTop = (
    e,
    isChatLoading,
    setChatLoader,
    hasMore,
    debounceProps,
    setScrollDate,
    setShowscrollDate,
    overlay,
    ShowscrollDate,
    allChats
) => {


    if (!overlay) {

        let top = Math.round(e.target.scrollTop) === 0;
        if (top) {
            setScrollDate("");
            setShowscrollDate(false);
            if (hasMore && !isChatLoading) {
                if (debounceProps.conversationCount !== allChats.length) {
                    setChatLoader(true);

                    debounceAllCall(debounceProps);
                }

            }
        }
        else {


            if (Math.round(e?.target?.scrollTop) === (Math.round(e?.target?.scrollHeight) - Math.round(e?.target?.offsetHeight))) {
                setScrollDate("");
                setShowscrollDate(false);
            } else {

                debounceScroll(setScrollDate, setShowscrollDate)
                let dateLabels = document.querySelectorAll('#date');
                let currentLabel = null
                dateLabels.forEach((dateLabel) => {
                    if (e.target.scrollTop >= dateLabel.offsetTop) {
                        currentLabel = dateLabel
                    }
                })
                if (currentLabel) {

                    setScrollDate(currentLabel.innerText);
                    if (!ShowscrollDate) {
                        setShowscrollDate(true);

                    }

                }
            }


        }
    }
};



export const openEmojiAtPosition = (setopenEmoji, setCurrentPosition, id) => {
    setopenEmoji(true)
    let pose = document.getElementById(id).selectionStart;

    setCurrentPosition(pose)

}

export const setCurrentPosval = (openEmoji, setopenEmoji, setCurrentPosition, id) => {
    let pose = document.getElementById(id).selectionStart;
    if (openEmoji) {
        setopenEmoji(false)
    }
    setCurrentPosition(pose)
}





const debounceScroll = _.debounce((setScrollDate, setShowscrollDate) => {

    setScrollDate("");
    setShowscrollDate(false);
}, 1000)



export const onKeyDownHandler = (e, inputHandlerChatProps, setCurrentPosition) => {
    const { formData } = inputHandlerChatProps

    if (e.keyCode === 13 || e.key === 'Enter') {

        if (formData.message.length < 500) {
            inputHandlerChat(e.target.value, inputHandlerChatProps, setCurrentPosition, e)


        }

    }


}




export const sendMessage = (props, setName) => {

    const {
        accessToken,
        allChats,
        chatAdded,

        isLive,
        leadId,
        openEmoji,
        productionUrl,
        setAllChats,
        setChatAdded,
        setChatMsg,
        setSendOverlay,
        setopenEmoji,
        user,
        toaster,
        setToaster,
        toast,
        formData,
        setFormData,
        setAllChatsWithDate,
        setLeadsSessionExpired,
        setErrorMsg,
        setApiFail,
        leadsMappingId,
        setLeadsMappingId, setReset
    } = props;


    const message = props?.formData?.message?.trim()

    if (message !== "") {

        setSendOverlay(true);
        axios.post(
            `${isLive ? productionUrl : ""}/webViewPostResponseToLead`,
            {
                responseDescription: message,
                leadResponseMappingId: leadsMappingId,
                leadId: leadId,
            },
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        )
            .then((res) => {


                setLeadsMappingId(res?.data?.result?.[0]?.leadResponseMappingId)
                setAllChats([
                    {
                        responseDescription: message,
                        responseOwner_userCode: user,
                        responseId: res?.data?.result?.[0]?.responseId,
                        responseCreatedAt: res?.data?.result?.[0]?.responseCreatedAt
                    },
                    ...allChats,
                ]);
                setName({
                    firstname: res?.data?.result?.[0]?.responseOwner_firstname,
                    lastname: res?.data?.result?.[0]?.responseOwner_lastname
                })
                setAllChatsWithDate(
                    byDate([
                        {
                            responseDescription: message,
                            responseOwner_userCode: user,
                            responseId: res?.data?.result?.[0]?.responseId,
                            responseCreatedAt: res?.data?.result?.[0]?.responseCreatedAt
                        },
                        ...allChats,

                    ])
                )
                setFormData({ ...formData, message: "" });

                setChatMsg("");
                if (openEmoji) {
                    setopenEmoji(false);
                }
                setSendOverlay(false);
                setChatAdded(!chatAdded);

            })
            .catch((err) => {

                if (err?.response?.data?.errorCode === -1) {
                    setSendOverlay(false)
                    if (toaster === true) {
                        toast('Something went wrong with backend. Please refresh page to continue', 3000)

                        setToaster(false);
                        setTimeout(() => {
                            setToaster(true);
                        }, 3000);
                    }
                } else if (err?.response?.data?.errorCode === 3) {
                    setSendOverlay(false)
                    setApiFail(true)
                    setErrorMsg('Trying to Respond to Own Lead')

                } else if (err?.response?.data?.errorCode === 1) {
                    setSendOverlay(false);
                    setChatAdded(!chatAdded);
                    setLeadsSessionExpired(true);
                    setErrorMsg('Seems like you are not logged in. Please Retry')
                } else if (err?.response?.data?.errorCode === 6) {


                    setSendOverlay(false);
                    setChatAdded(!chatAdded);
                    setLeadsSessionExpired(true);
                    setReset(true)
                    setErrorMsg('Invalid mapping id! Please Retry.')
                }
                else {
                    setSendOverlay(false)
                    setLeadsSessionExpired(true);
                    setErrorMsg("Its not you, its us. Please retry to continue.")
                }

            });
    }
};


export const signUp = (leadId, chatMsg, navigate, leadsOwnerName, userCode) => {

    const time = new Date().getTime().toString().slice(-6)
    navigate(`/signup?leadId=${leadId}&userCode=${userCode}&t=${time}`, { state: { message: chatMsg, leadsOwnerName } });
};


export const checkAccess = (setAccessEmpty, setAccessToken, setUser) => {
    if (localStorage.getItem("accessToken")) {
        if (localStorage.getItem("accessToken") === "") {
            setAccessEmpty(true);
        } else {
            setAccessToken(localStorage.getItem("accessToken"));
        }
    } else {
        setAccessEmpty(true);
        localStorage.setItem("accessToken", "");
    }

    if (localStorage.getItem("loggedInUserCode")) {
        setUser(localStorage.getItem("loggedInUserCode"));
    } else {
        localStorage.setItem("loggedInUserCode", "");
    }
};



export const getOtpLeads = (props) => {
    const { setSending, isLive, productionUrl, leadId,
        navigate, setShow, setFirstNameError, setPhoneError, userCode, pageRef, toast, setDownloadURL } = props
    const { f_name, l_name, contact_type, message, phone_number, website1, website2, country_code } = props?.formData
    setSending(true)
    let socialMediaLinks = [{ url: website1 ?? "", type: "website" }, { url: website2 ?? "", type: "website" }]

    const shouldShowPhoneError = phone_number === "" || phone_number?.trim() === "";
    const shouldShowFirstNameError = f_name === "" || f_name?.trim() === "";
    if (shouldShowPhoneError && shouldShowFirstNameError) {
        setPhoneError(true);
        setFirstNameError(true);
        pageRef?.current.scrollIntoView({ behavior: 'smooth', block: "start" })
        setSending(false);
    } else if (phone_number !== "" && f_name !== "") {
        axios.post(`${isLive ? productionUrl : ""}/webViewSignUp`, {
            phoneNumber: country_code + phone_number,
            hashId: "elRed"
        }).then((res) => {
            const time = new Date().getTime().toString().slice(-6)
            navigate(`/validate-otp?leadId=${leadId}&userCode=${userCode}&t=${time}`, {
                state: {
                    data: {
                        firstname: f_name,
                        lastname: l_name,
                        phoneNumber: country_code + phone_number,
                        socialMediaLinks: socialMediaLinks,
                        contactMethod: contact_type,
                        responseDescription: message,
                    },

                    trnId: {
                        transactionId: res?.data?.result[0]?.transactionId
                    }
                }
            })
            setSending(false)
        })
            .catch((error) => {
                if (error?.response?.data?.errorCode === -1) {
                    toast("Something went wrong with backend. Please refresh page to continue")

                } else if (error?.response?.data?.errorCode === 2) {
                    setShow(true)
                    setDownloadURL(error?.response?.data?.result?.[0]?.downloadURL)
                } else if (error?.response?.data?.errorCode === 4) {
                    setPhoneError(true)
                    pageRef?.current.scrollIntoView({ behavior: 'smooth', block: "start" })
                } else if (error?.response?.data?.errorCode === 104 && error?.response?.status === 500) {
                    toast("OTP Service Down. Please try again after sometime")
                  } else if (error?.response?.data?.errorCode === 113 || error?.response?.data?.errorCode === 115) {
                    toast(error?.response?.data?.message)
                }
                setSending(false);
            })
    } else if (shouldShowFirstNameError) {
        setFirstNameError(true);
        setPhoneError(false);
        pageRef?.current.scrollIntoView({ behavior: 'smooth', block: "start" })
        setSending(false);
    } else if (shouldShowPhoneError) {
        setPhoneError(true);
        setFirstNameError(false);
        pageRef?.current.scrollIntoView({ behavior: 'smooth', block: "start" })
        setSending(false);
    } else {
        setPhoneError(false)
        setFirstNameError(false)
        setSending(false)
    }
}



export const verifyOtpLead = (props, setFormData, setShow, setOwnNeed, setValidationError) => {

    const { otp, data, setSending, isLive, productionUrl, leadId, navigate, setIncorrectOtp, toast, trn, userCode, setOtp, setOtpError } = props
    const { firstname, lastname, contactMethod, phoneNumber, responseDescription, socialMediaLinks } = data;
    const trimmedFirstname = capitalizeEachWord(firstname?.trim());
    const trimmedLastname = capitalizeEachWord(lastname?.trim());



    setValidationError(false);
    if (data?.contactMethod === "" || data?.firstname?.trim() === "" ||
        data?.phoneNumber?.trim() === "" || data?.responseDescription?.trim() === "") {
        setValidationError(true);
        toast("Crucial fields cannnot be empty", 2000)
        return;
    }


    let otpObject = {
        contactMethod: contactMethod,
        phoneNumber: phoneNumber,
        responseDescription: responseDescription,
        socialMediaLinks: socialMediaLinks,
        otp: otp,
        leadId: leadId,
        transactionId: trn,

        firstname: trimmedFirstname,
        lastname: trimmedLastname
    }

    if (otp.length === 6) {
        if (data?.data?.responseDescription !== "") {
            setSending(true)
            axios.post(`${isLive ? productionUrl : ""}/webViewVerifyOtpLeads`, otpObject).then((res) => {
                localStorage.setItem('loggedInUserCode', res?.data?.userCode)
                const time = new Date().getTime().toString().slice(-6)
                localStorage.setItem('accessToken', res?.data?.result?.[0]?.accessToken)
                navigate(`/leads/leads-reply?leadId=${leadId}&userCode=${userCode}&t=${time}`)
                setFormData({
                    message: "",
                    f_name: "",
                    l_name: "",
                    phone_number: '',
                    website1: '',
                    website2: '',
                    contact_type: 'whatsapp',
                    country_code: '+91',
                })
                setSending(false)
            }).catch((err) => {
                if (err?.response?.data?.errorCode === -1) {
                    toast("Something went wrong with backend. Please refresh page to continue")
                    setSending(false)
                } else if (err?.response?.data?.errorCode === 2) {
                    setShow(true)
                    setSending(false)
                } else if (err?.response?.data?.errorCode === 3) {
                    setOwnNeed(true)
                } else if (err?.response?.data?.errorCode === 5) {
                    setIncorrectOtp(true)
                    setOtp('')
                    setSending(false)
                    setOtpError('Invalid OTP entered')
                } else if (err?.response?.data?.errorCode === 8) {
                    setIncorrectOtp(true);
                    setOtp("");
                    setSending(false);
                    setOtpError('OTP expired')
                } else if (err?.response?.data?.errorCode === 115) {
                    toast(err?.response?.data?.message)
                    setSending(false);
                }
            })
        } else {
            toast.error('Message should not be empty')
        }
    }
}

export const scrollDown = (chatAreaRef) => {
    const ChatMessageDiv = document.getElementById('scroll_chat_div_lead');
    if (ChatMessageDiv) {
        ChatMessageDiv.scrollTop = ChatMessageDiv.scrollHeight;
    }


};






export const debounceAllCall = _.debounce((props) => {
    const {
        isLive,
        productionUrl,
        leadId,
        page,
        setAllChats,
        allChats,
        setPage,
        setChatLoader,
        setHasMore,
        setAllChatsWithDate,
        setApiFail,
        setErrorMsg,
        setLeadsSessionExpired,
        setLeadsMappingId,
        setConversationCount
    } = props;
    const accessToken = localStorage.getItem("accessToken");
    axios
        .post(
            `${isLive ? productionUrl : ""}/webViewFetchLeadAndSpecificConversation?leadId=${leadId}&start=${page}&offset=10`,
            {}, { headers: { Authorization: `Bearer ${accessToken}` }, })
        .then((res) => {



            setConversationCount(res?.data?.totalConversationCount);

            setAllChats([
                ...allChats,
                ...res?.data?.result?.[0]?.responseDetails?.conversations,
            ]);

            setAllChatsWithDate(byDate([
                ...allChats,
                ...res?.data?.result?.[0]?.responseDetails?.conversations,
            ]))
            setLeadsMappingId(res?.data?.result?.[0]?.responseDetails?.leadResponseMappingId)
            setPage(page + 10);

            setChatLoader(false);
            setHasMore(res?.data?.result?.[0]?.responseDetails?.conversations?.length < 10 ? false : true);
            ScrollToTop('scroll_chat_div_lead', allChats[allChats.length - 1].responseId)

        }).catch((err) => {

            setChatLoader(false);

            if (err.response?.data?.errorCode === 1) {


                setApiFail(true)
                setErrorMsg('Its not you, its us. Please retry to continue.')

            } else if (err?.response?.data?.errorCode === 1) {
                setLeadsSessionExpired(true);
                setErrorMsg('Seems like you are not logged in. Please Retry')
            }



        })
}, 500);





export const sendMessageFromInput = (accessEmpty, data, navigate, value, leadId, sendMessageProps, userCode, setName, name) => {

    if (accessEmpty) {
        if (value !== "") {
            signUp(leadId, value, navigate, data?.leadDetails?.leadOwnerDetails?.firstname, userCode)

        }
    } else {
        sendMessage(sendMessageProps, setName)
    }
}

export const deleteLeadsMessage = (props, id, setTopOverLay) => {
    const {
        setDeleting,
        isLive,
        productionUrl,
        leadId,
        accessToken,
        allChats,
        setZChat,
        setAllChats,
        toaster,
        setToaster,
        toast, setAllChatsWithDate,
        setLeadsSessionExpired,
        setErrorMsg,
        leadsMappingId

    } = props.deleteMessageProps;
    let { setOverLay, setEnable, selectedChat } = props

    setDeleting(true);
    axios
        .post(
            `${isLive ? productionUrl : ""}/webViewLeadDeleteSingleResponseFromConversation`,
            {
                responseId: id,
                leadResponseMappingId: leadsMappingId,
                leadId: leadId,
            },
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        )
        .then((res) => {
            const updatedChats = allChats.map((item) => {
                if (item.responseId === id) {
                    return { ...item, isDeleted: true };
                }

                return item;
            });
            setDeleting(false);

            setAllChats(updatedChats);
            setAllChatsWithDate(
                byDate(updatedChats)
            )
            setOverLay(false)
            setEnable(false)
            setTopOverLay(false)
            selectedChat('')
        })
        .catch((err) => {
            if (err?.response?.data?.errorCode === -1) {
                setDeleting(false)
                setZChat(null);
                setOverLay(false)
                setEnable(false)
                setTopOverLay(false)
                selectedChat('')
                if (toaster === true) {
                    toast('Something went wrong with backend. Please refresh page to continue', 3000)
                    setToaster(false);
                    setTimeout(() => {
                        setToaster(true);
                    }, 3000);
                }
            } else if (err?.response?.data?.errorCode === 1) {


                setLeadsSessionExpired(true);
                setErrorMsg('Seems like you are not logged in. Please Retry')
            }


        });
};


export const handleDisable = (idx, setEnable, deleteMessage, deleteMessageProps, setOverLay) => {
    setEnable(false);
    deleteMessage(deleteMessageProps, idx)
    setOverLay(false)
}


export const closePopup = (setOverLay, setEnable) => {
    setOverLay(false)
    setEnable(false)
}


export const handleShareProfile = (data) => {
    const leadDate = moment(data?.leadCreatedAt).format("ddd, DD MMM YYYY")
    const time = new Date().getTime().toString().slice(-6);

    (async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    text: `${leadDate}\n\nURL:`,
                    url: data?.shareLeadURL + `&t=${time}`,
                });
            } catch (error) {
                // console.error("Error Sharing:", error);
            }
        } else {
            if(navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Windows")){
                return toast('Web share not supported by Windows Firefox')
              }
            if (isMacOs && isFirefox) {
                return toast('Web share not supported by MacOS Firefox')
            }
              toast('Web share not supported by MacOS Chrome')
        }
    })(); // Add parentheses here to call the function immediately
};




export const inputHandlerChat = (val, props, setCurrentPosition, e) => {


  
    const { setChatMsg, toaster, toast, setToaster, formData, setFormData } = props;

    setChatMsg(val);

    let pose = document.getElementById('leads-text').selectionStart;
    let backSpace= val.length<formData?.message?.length? true:false;
    let getLength = 500 - formData?.message?.length;
    if (getLength >= e?.nativeEvent?.data?.length || e?.nativeEvent?.inputType === "insertFromPaste" || 
    e?.nativeEvent?.inputType === "deleteContentBackward" || e?.nativeEvent?.inputType ==='insertLineBreak' ||
     e.keyCode === 13 || e.key === 'Enter'|| backSpace || e?.nativeEvent?.inputType==='insertText'|| e?.nativeEvent?.inputType=== 'insertFromDrop' ) {
        if (val.length >= 500) {

            setFormData({ ...formData, message: val.slice(0, 500) });
            setCurrentPosition(pose)
            if (toaster === true) {
                toast("Oops! You have reached the maximum character limit.");
                setToaster(false);
                setTimeout(() => {
                    setToaster(true);
                }, 3000);
            }
            return
        } else {
            setFormData({ ...formData, message: val });
            setCurrentPosition(pose)
        }
    } else {
        if (toaster === true) {
            toast("Oops! You have reached the maximum character limit.");
            setToaster(false);
            setTimeout(() => {
                setToaster(true);
            }, 3000);
        }
    }


};


export const resetSessionHandler = (setResetSession, resetSession) => {
    localStorage.setItem("loggedInUserCode", "");
    localStorage.setItem("accessToken", "");
    setResetSession(!resetSession)

    reload()
};


export const lazyLoadImages = (
  setLazyLoadedIndices,
  setImageLoadingStates,
  leadsData,
  noImageLeads,isLazyLoadingError,setIsLazyLoadingError
) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetIndex = parseInt(
          entry.target.getAttribute("data-index"),
          10
        );

        setLazyLoadedIndices((prevIndices) => [...prevIndices, targetIndex]);

        setImageLoadingStates((prevLoadingStates) => ({
          ...prevLoadingStates,
          [targetIndex]: true,
        }));

        const img = new Image();
        img.onload = () => {
          setImageLoadingStates((prevLoadingStates) => ({
            ...prevLoadingStates,
            [targetIndex]: false,
          }));
          isLazyLoadingError[targetIndex]=false
          setIsLazyLoadingError(isLazyLoadingError)
        };
        img.onerror=()=>{
            setImageLoadingStates((prevLoadingStates) => ({
                ...prevLoadingStates,
                [targetIndex]: false,
              }));
              isLazyLoadingError[targetIndex]=true
              setIsLazyLoadingError(isLazyLoadingError)
        }
        img.src =
          leadsData[targetIndex]?.backgroundImages?.length !== 0
            ? leadsData[targetIndex]?.backgroundImages[0]
            : noImageLeads;
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll(".lazy-load-item");

  targets.forEach((target) => {
    observer.observe(target);
  });
};

export const ImgaeLoaderFunction = (
  leadsData,
  setIsLoading,
  noImageLeads,
  setIsError,
  isError
) => {
  const promises = leadsData?.slice(0, 2).map((item, index) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
    
        isError[index]=false
        setIsError(isError);
        resolve();
      };
      img.onerror = () => {
      
       isError[index]=true
        setIsError(isError);
        resolve();
      };
      img.src =
        item?.backgroundImages?.length !== 0
          ? item?.backgroundImages[0]
          : noImageLeads;
    });
  });

  Promise.all(promises).then(() => {
    setIsLoading(false);
  });
};

