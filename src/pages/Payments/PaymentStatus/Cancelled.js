import {Box, Typography} from "@mui/material";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {returnErrors} from "../../../store/reducers/error";
import {
  removePaymentCoinbaseId,
  removePaymentStripeId,
} from "../../../store/reducers/payment";

const Cancelled = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(returnErrors("Payment failed", 400));

    if (removePaymentStripeId) {
      dispatch(removePaymentStripeId());
    } else if (removePaymentCoinbaseId) {
      dispatch(removePaymentCoinbaseId());
    }

    navigate("/payments/history");
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

export default Cancelled;
