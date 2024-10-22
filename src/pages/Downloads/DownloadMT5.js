import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TitleText from "../../components/Reusable/ReusableComponents/TitleText";
import GreenTick from "../../assets/images/Group 48096533.svg";
import GreenArrow from "../../assets/images/Vector 127.svg";
import CloseIcon from "@mui/icons-material/Close";
import { clearMessages } from "../../store/reducers/message";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useEffect } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "#111142",
  color: "#fff",
  borderRadius: "20px",
  // border: '1px solid #000',
  // boxShadow: 24,
};

const style2 = {
  p: 4,
  pt: 0,
  textAlign: "center",
};

const stylesClasses = {
  btnSx: {
    background: "#9292AB",
    color: "#000",
    borderRadius: "14px",
    marginTop: 3,
    fontFamily: "Urbanist",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#9292AB",
    },
  },
  closeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
};

function DownloadMT5() {
  useEffect(() => {
    if (window.navigator.platform.includes("Win")) {
       window.location.replace(
        "https://macandgray-product.s3.eu-west-2.amazonaws.com/downloads/windows/CBT+MT5+Client+Terminal.exe"
      );
    }
    if (window.navigator.platform.includes("Mac")) {
       window.location.replace(
        "https://macandgray-product.s3.eu-west-2.amazonaws.com/downloads/macos/MetaTrader5.dmg"
      );
    }
  }, []);

  return (
    <Box sx={style}>
      <img style={{ borderRadius: "20px" }} src={GreenArrow} alt=""></img>
      <Box sx={style2}>
        <TitleText textStyle={{ color: "#fff", fontSize: "2.5rem" }}>
          Thank you!
        </TitleText>
        <Typography id="modal-modal-description" sx={{ m: 2, mb: 0 }}>
          Your download is in progress and will be ready soon.
        </Typography>
      </Box>
    </Box>
  );
}

export default DownloadMT5;
