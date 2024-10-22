import {Box, Typography} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {returnErrors} from "../../../store/reducers/error";
import {returnMessages} from "../../../store/reducers/message";
import {checkPaymentStatus} from "../../../store/reducers/payment";

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const paymentMethod = localStorage.getItem("payMethod");
    if (paymentMethod) {
      dispatch(checkPaymentStatus(paymentMethod))
        .then((res) => {
          dispatch(
            returnMessages(
              "coinbase transactions are crypto transactions, it will take some time to reflect in the blockchain, your account will be funded soon",
              200,
              "Congratulations"
            )
          );
          navigate("/payments/history");
          localStorage.removeItem("payMethod");
        })
        .catch((error) => {
          dispatch(returnErrors(error, 400));
          navigate("/payments/history");
        });
    } else {
      dispatch(checkPaymentStatus())
        .then((res) => {
          dispatch(
            returnMessages("Payment successfull", 200, "Congratulations")
          );
          navigate("/payments/history");
        })
        .catch((error) => {
          dispatch(returnErrors(error, 400));
          navigate("/payments/history");
        });
    }
  }, [dispatch, navigate]);

  return (
    <Box>
      <Typography component={"h1"} textAlign="center" fontSize={"38px"}>
        Please wait.....
      </Typography>
      <Typography textAlign="center" color={"gray"}>
        Don't reload this page
      </Typography>
    </Box>
  );
};

export default Success;
