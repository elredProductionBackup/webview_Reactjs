import { useContext, useEffect, useRef, useState } from "react";
import "./signuppage.scss";
import logoSocial from "../../../../assets/images/globe_social.svg";
import whatsapp from "../../../../assets/images/whatsapp.svg";
import msg from "../../../../assets/images/msg.svg";
import { useNavigate, useLocation } from "react-router";
import toast, { toastConfig } from "react-simple-toasts";
import AlreadyAccountPopup from "../../../components/AlreadyAccountPopup/AlreadyAccountPopup";
import SignupInputs from "./SignupInputs/SignupInputs";
import SignupRadioOptions from "./SignupRadioOptions/SignupRadioOptions";
import SignupButton from "./SignupButton/SignupButton";
import SignupTop from "./SignupTop/SignupTop";
import { getOtp } from "../../../Profile/components/Needs/needsGlobalFunctions";
import { getOtpLeads } from "../../../Profile/components/Leads/LeadsGlobalFunctions";

export {
  useContext,
  useEffect,
  useRef,
  useState,
  logoSocial,
  whatsapp,
  msg,
  useNavigate,
  useLocation,
  toast,
  toastConfig,
  AlreadyAccountPopup,
  SignupInputs,
  SignupRadioOptions,
  SignupButton,
  SignupTop,
  getOtp,
  getOtpLeads,
};
