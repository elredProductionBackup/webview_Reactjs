import axios from "axios";
import _ from "lodash";
import { byDate, capitalizeEachWord, ScrollToTop } from "../../../../globalFunctions";
import moment from "moment";
import toast from "react-simple-toasts";
import { isFirefox, isMacOs } from "react-device-detect";

export const openNeedCard = (needId, userCode, navigate, setFormData) => {
  setFormData({
    message: "",
    f_name: "",
    l_name: "",
    phone_number: "",
    insta_link: "",
    linkedin_link: "",
    contact_type: "whatsapp",
    country_code: '+91',
    maxDigits: 10,
  });
  const time = new Date().getTime().toString().slice(-6);
  navigate(
    `/my-bio/needs/need?needId=${needId}&userCode=${userCode}&t=${time}`
  );
};


export const onKeyDownHandler = (e, inputHandlerChatProps, setCurrentPosition) => {

  const { formData } = inputHandlerChatProps

  if (e.keyCode === 13 || e.key === 'Enter') {

    if (formData.message.length < 500) {
      inputHandlerChat(e.target.value, inputHandlerChatProps, setCurrentPosition, e)

    }

  }

}

export const sendMessageFromInput = (props) => {
  let { accessEmpty, data, navigate, value, needId, sendMessageProps, userCode, setName, setSession, setOwnNeed, name, setInvalidMappingId } = props;
  if (accessEmpty) {
    if (value !== "") {
      signUp(needId, value, navigate, data?.needDetails?.needOwnerDetails?.firstname, userCode)
    }
  } else {
    sendMessage(sendMessageProps, setSession, setOwnNeed, setName, name, setInvalidMappingId)
  }
}


export const sendMessage = (props, setSession, setOwnNeed, setName, name, setInvalidMappingId) => {
  const {
    allChats,
    chatAdded,
    isLive,
    needId,
    openEmoji,
    productionUrl,
    setAllChats,
    setChatAdded,
    setSendOverlay,
    setopenEmoji,
    user,
    formData,
    setFormData,
    toast,
    setToaster,
    toaster,
    setAllChatsWithDate,
    mappingId,
    setMappingId,
    accessToken,
  } = props;
  const message = props?.formData?.message?.trim()

  if (message?.length > 0) {
    setSendOverlay(true);
    axios
      .post(
        `${isLive ? productionUrl : ""}/webViewPostResponseToNeed`,
        {
          responseDescription: formData?.message,
          needResponseMappingId: mappingId,
          needId: needId,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        setMappingId(res?.data?.result?.[0]?.needResponseMappingId);
        setName({
          firstname: res?.data?.result?.[0]?.responseOwner_firstname,
          lastname: res?.data?.result?.[0]?.responseOwner_lastname,
        });
        setAllChats([
          {
            responseDescription: formData?.message,
            responseOwner_userCode: user,
            responseId: res?.data?.result?.[0]?.responseId,
            responseCreatedAt: res?.data?.result?.[0]?.responseCreatedAt
          },
          ...allChats,
        ]);
        setAllChatsWithDate(
          byDate([
            {
              responseDescription: formData?.message,
              responseOwner_userCode: user,
              responseId: res?.data?.result?.[0]?.responseId,
              responseCreatedAt: res?.data?.result?.[0]?.responseCreatedAt
            },
            ...allChats,
          ])
        );
        setFormData({ ...formData, message: "" });
        if (openEmoji) {
          setopenEmoji(false);
        }
        setSendOverlay(false);
        setChatAdded(!chatAdded);
      })
      .catch((err) => {
        setSendOverlay(false);
        if (err?.response?.data?.errorCode === -1) {
          if (toaster === true) {
            toast("Something went wrong with backend. Please refresh page to continue", 3000);
            setToaster(false);
            setTimeout(() => {
              setToaster(true);
            }, 3000);
          }
        } else if (err?.response?.data?.errorCode === 1) {
          setSession(true);
        } else if (err?.response?.data?.errorCode === 3) {
          setOwnNeed(true);
        } else if (err?.response?.data?.errorCode === 6) {
          setInvalidMappingId(true)
        }
      });
  }
};

export const deleteMessage = (props, id, setTopOverLay) => {
  const {
    setDeleting,
    isLive,
    productionUrl,
    needId,
    allChats,
    setAllChats,
    setAllChatsWithDate,
    mappingId,
    accessToken,

  } = props.deleteMessageProps;
  const { toast, setToaster, toaster } = props.sendMessageProps;
  let { setOverLay, setSession, setEnable, selectedChat } = props;

  setDeleting(true);
  axios
    .post(
      `${isLive ? productionUrl : ""
      }/webViewDeleteSingleResponseFromConversation`,
      {
        responseId: id,
        needResponseMappingId:
          mappingId,
        needId: needId,
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
      setAllChatsWithDate(byDate(updatedChats));
      setOverLay(false);
      setEnable(false);
      setTopOverLay(false);
      selectedChat('')
    })
    .catch((err) => {
      setDeleting(false);
      setOverLay(false);
      setEnable(false);
      setTopOverLay(false);
      selectedChat('')

      if (err?.response?.data?.errorCode === -1) {
        if (toaster === true) {
          toast("Something went wrong with backend. Please refresh page to continue", 3000);
          setToaster(false);
          setTimeout(() => {
            setToaster(true);
          }, 1000);
        }
      } else if (err?.response?.data?.errorCode === 1) {
        setSession(true);
      }
    });
};

export const goBackToNeeds = (navigate, userCode) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/my-bio/needs?userCode=${userCode}&t=${time}`);
};

export const inputHandlerChat = (val, props, setCurrentPosition, e) => {
  const {
    setFormData,
    toaster,
    toast,
    setToaster,
    formData,
  } = props;

  
  let backSpace= val.length<formData?.message?.length? true:false;
  let pose = document.getElementById('needs-text').selectionStart;
  let getLength = 500 - formData?.message?.length;
  if (getLength >= e?.nativeEvent?.data?.length || e?.nativeEvent?.inputType === "insertFromPaste" ||
   e?.nativeEvent?.inputType === "deleteContentBackward" || e?.nativeEvent?.inputType ==='insertLineBreak' 
   || e.keyCode === 13 || e.key === 'Enter'|| backSpace || e?.nativeEvent?.inputType==='insertText'|| e?.nativeEvent?.inputType=== 'insertFromDrop') {
    
    if (val.length > 500) {

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

export const scrollDown = (chatAreaRef) => {
  if (chatAreaRef.current) {
    const lastChatMessage = chatAreaRef.current.lastChild;
    if (lastChatMessage) {
      lastChatMessage.scrollIntoView({ block: "end" });
      const ChatMessageDiv = document.getElementById("scroll_chat_div");
      ChatMessageDiv?.scrollBy(100, 100);
    }
  }
};

export const debounceScrollDelete = _.debounce((divRef) => {
  scrollMsgToBottom(divRef);
}, 100)

export const scrollMsgToBottom = (divRef) => {
  divRef?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
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

export const debounceAllCall = _.debounce((props) => {
  const {
    isLive,
    productionUrl,
    needId,
    page,
    setAllChats,
    allChats,
    setPage,
    setChatLoader,
    setHasMore,
    setAllChatsWithDate, setConversationCount
  } = props;
  const accessToken = localStorage.getItem("accessToken");
  axios
    .post(
      `${isLive ? productionUrl : ""
      }/webViewFetchNeedAndSpecificConversation?needId=${needId}&start=${page}&offset=10`,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )
    .then((res) => {
      setAllChats([
        ...allChats,
        ...res?.data?.result?.[0]?.responseDetails?.conversations,
      ]);
      setAllChatsWithDate(
        byDate([
          ...allChats,
          ...res?.data?.result?.[0]?.responseDetails?.conversations,
        ])
      );
      setConversationCount(res?.data?.totalConversationCount);
      setPage(page + 10);
      setChatLoader(false);
      setHasMore(
        res?.data?.result?.[0]?.responseDetails?.conversations?.length < 10
          ? false
          : true
      );
      ScrollToTop('scroll_chat_div', allChats[allChats.length - 1].responseId)

    });

}, 500);

export const signUp = (needId, chatMsg, navigate, needOwnerName, userCode) => {
  const time = new Date().getTime().toString().slice(-6);
  navigate(`/signup?needId=${needId}&userCode=${userCode}&t=${time}`, {
    state: { message: chatMsg, needOwnerName },
  });
};

export const scrollTop = (
  e,
  setChatLoader,
  hasMore,
  debounceAllCall,
  debounceProps,
  setScrollDate,
  setShowscrollDate,
  overlay,
  ShowscrollDate,
  chatLoader, allChats
) => {
  if (!overlay) {
    let top = Math.round(e.target.scrollTop) === 0;
    if (top) {
      setScrollDate("");
      setShowscrollDate(false);
      if (hasMore && !chatLoader && debounceProps.conversationCount !== allChats.length) {

        setChatLoader(true);

        debounceAllCall(debounceProps);
      }
    } else {
      if (
        Math.round(e.target.scrollTop) ===
        Math.round(e.target.scrollHeight) - Math.round(e.target.offsetHeight)
      ) {
        setScrollDate("");
        setShowscrollDate(false);
      } else {
        debounceScroll(setScrollDate, setShowscrollDate);
        let dateLabels = document.querySelectorAll("#date");
        let currentLabel = null;
        dateLabels.forEach((dateLabel) => {
          if (e.target.scrollTop >= dateLabel.offsetTop) {
            currentLabel = dateLabel;
          }
        });
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

const debounceScroll = _.debounce((setScrollDate, setShowscrollDate) => {
  setScrollDate("");
  setShowscrollDate(false);
}, 1000);

export const viewProfile = (data) => {
  const time = new Date().getTime().toString().slice(-6);
  window.open(`${data.shareProfileURL}&t=${time}`, "_blank");
};

export const handleShareProfile = (data) => {
  const needDate = moment(data?.needCreatedAt).format("ddd, DD MMM YYYY")
  const time = new Date().getTime().toString().slice(-6);

  (async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: `${needDate}\n\nURL:`,
          url: data?.shareNeedURL + `&t=${time}`,
        });
      } catch (error) {
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


export const handleEnable = (
  idx,
  setEnable,
  enable,
  setOverLay,
  selectedChat
) => {
  setEnable(!enable);
  setOverLay(true);
  selectedChat(idx);
};

export const handleDisable = (
  idx,
  setEnable,
  deleteMessage,
  deleteMessageProps,
  setOverLay,
  sendMessageProps
) => {
  setEnable(false);
  setOverLay(false);
};

export const handleDeleting = (
  idx,
  setEnable,
  deleteMessage,
  deleteMessageProps,
  setOverLay,
  sendMessageProps,
  setSession
) => {
  setEnable(false);
  deleteMessage(deleteMessageProps, idx, sendMessageProps, setSession);
  setOverLay(false);
};

export const closePopup = (setOverLay, setEnable) => {
  setOverLay(false);
  setEnable(false);
};

export const getOtp = (props) => {
  const {
    setSending,
    isLive,
    productionUrl,
    needId,
    navigate,
    toast,
    setShow,
    setFirstNameError,
    setPhoneError,
    pageRef,
    userCode,
    setDownloadURL,
    countrycode
  } = props;
  const { f_name, l_name, contact_type, message, phone_number, website1, website2, country_code } =
    props?.formData;

  const trimmedName = capitalizeEachWord(f_name?.trim());
  const trimmedLastName = capitalizeEachWord(l_name?.trim());
  setSending(true);
  const shouldShowPhoneError =
    phone_number === "" ||
    phone_number?.trim() === "" ;
  const shouldShowFirstNameError = trimmedName === "";
  let socialMediaLinks = [{ url: website1 ?? "", type: "website" }, { url: website2 ?? "", type: "website" }]

  if (shouldShowPhoneError && shouldShowFirstNameError) {
    setPhoneError(true);
    setFirstNameError(true);
    pageRef?.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setSending(false);
  } else if (
    phone_number !== "" &&
    trimmedName !== ""
    // phone_number?.length === 10
  ) {
    axios
      .post(`${isLive ? productionUrl : ""}/webViewSignUp`, {
        phoneNumber: (country_code === undefined ? '+91' : country_code) + phone_number,
        hashId: "elRed",
      })
      .then((res) => {
        const time = new Date().getTime().toString().slice(-6);
        navigate(
          `/validate-otp?needId=${needId}&userCode=${userCode}&t=${time}`,
          {
            state: {
              data: {
                firstname: trimmedName,
                lastname: trimmedLastName,
                phoneNumber:  (country_code === undefined ? '+91' : country_code) + phone_number,
                socialMediaLinks: socialMediaLinks,
                contactMethod: contact_type,
                responseDescription: message,
              },
              trnId: {
                transactionId: res?.data?.result[0]?.transactionId,
              },
            },
          }
        );
        setSending(false);
      })
      .catch((error) => {
        if (error?.response?.data?.errorCode === -1) {
          toast("Something went wrong with backend. Please refresh page to continue");
        } else if (error?.response?.data?.errorCode === 2) {
          setShow(true);
          setDownloadURL(error?.response?.data?.result?.[0]?.downloadURL)
        } else if (error?.response?.data?.errorCode === 4) {
          setPhoneError(true);
          pageRef?.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        else if (error?.response?.data?.errorCode === 104 && error?.response?.status === 500) {
          toast("OTP Service Down. Please try again after sometime")
        } else if (error?.response?.data?.errorCode === 113 || error?.response?.data?.errorCode === 115) {
          toast(error?.response?.data?.message)
        }
        setSending(false);
      });
  } else if (shouldShowFirstNameError) {
    setFirstNameError(true);
    setPhoneError(false);
    pageRef?.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setSending(false);
  } else if (shouldShowPhoneError) {
    setPhoneError(true);
    setFirstNameError(false);
    pageRef?.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setSending(false);
  } else {
    setPhoneError(false);
    setFirstNameError(false);
    setSending(false);
  }
};

export const handleOptionChange = (event, setFormData, formData) => {
  setFormData({ ...formData, contact_type: event.target.value });
};
