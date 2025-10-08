import { useEffect, useState } from "react";
import "./enterotp.scss";
import { useNavigate, useLocation } from "react-router";
import { useCountdownTimer } from "../../../hooks/useCountdownTimer";
import toast, { toastConfig } from "react-simple-toasts";
import { handleResetOtp, verifyOtp } from "../../../../globalFunctions";
import { verifyOtpLead } from "../../../Profile/components/Leads/LeadsGlobalFunctions";
import EnterOTPData from "./EnterOTPData/EnterOTPData";

export {
  useEffect,
  useState,
  useNavigate,
  useLocation,
  useCountdownTimer,
  toast,
  toastConfig,
  handleResetOtp,
  verifyOtp,
  verifyOtpLead,
  EnterOTPData,
};
