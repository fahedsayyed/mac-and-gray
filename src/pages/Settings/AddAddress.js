import {Box, Button, Modal, Typography} from "@mui/material";
import TitleText from "../../components/Reusable/ReusableComponents/TitleText";
import CloseCircleIcon from "../../assets/images/closeCircle.svg";
import GreenArrow from "../../assets/images/Vector 127.svg";
import CloseIcon from "@mui/icons-material/Close";
import React, {useState} from "react";
import TextInput from "../../components/Form/TextInput";
import {useDispatch} from "react-redux";
import {returnMessages} from "../../store/reducers/message";

const AddAddress = ({open, onClose}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_num: "",
    billing_add: "",
    street_add: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveInfoClick = (e) => {
    e.preventDefault();
    console.log("btn click");
    onClose();
    dispatch(
      returnMessages(
        "Congratulation transaction was successful!",
        200,
        "Successful!!"
      )
    );
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="address-modal">
        <Box className="address-head">
          <Typography component={"h3"}>Add Address</Typography>
          <img
            src={CloseCircleIcon}
            onClick={onClose}
            alt="CloseCircleIcon"
            style={{cursor: "pointer"}}
          />
        </Box>
        <TextInput
          name="name"
          label="Name"
          placeholder="Daniel Radcliff"
          value={formData.value}
          onChange={handleChange}
        />
        <TextInput
          name="email"
          label="Email Address"
          placeholder="danielradcliff@gmail.com"
          value={formData.value}
          onChange={handleChange}
        />
        <TextInput
          name="contact_num"
          label="Contact Number"
          placeholder="+91 129192881293"
          value={formData.value}
          onChange={handleChange}
        />
        <TextInput
          name="billing_add"
          label="Billing Address"
          placeholder="1623 Hunningon Place"
          value={formData.value}
          onChange={handleChange}
        />
        <TextInput
          name="street_add"
          label="Street Address"
          placeholder="1129 New Castle Road"
          value={formData.value}
          onChange={handleChange}
        />
        <TextInput
          name="state"
          label="State"
          placeholder="Ontorio"
          value={formData.value}
          onChange={handleChange}
        />
        <TextInput
          name="zip"
          label="Zip Code"
          placeholder="42124"
          value={formData.value}
          onChange={handleChange}
        />
        <TextInput
          name="country"
          label="Country"
          placeholder="Canada"
          value={formData.value}
          onChange={handleChange}
        />
        <Button
          onClick={saveInfoClick}
          variant="contained"
          fullWidth
          type="submit"
        >
          Save Info
        </Button>
      </Box>
    </Modal>
  );
};

export default AddAddress;
