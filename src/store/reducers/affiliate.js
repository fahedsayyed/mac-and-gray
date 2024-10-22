import { axiosInstance } from "../../Axios";
import { tokenConfig } from "./auth";
import { returnErrors } from "./error";

const initialState = {};

const affiliateReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const pushleads = (referal_code) => async (dispatch, getState) => {
    try {
        const {data, status} = await axiosInstance.post("/affiliate/pushlead/", {referal_code}, tokenConfig(getState));
        if(status>399) throw(data);
        return true
    } catch (error) {
        console.log("Push leads API error")
        console.log(error)
        // dispatch(returnErrors(error.response.data?.message,error.response.status))
        throw(error.response.data)
    }
}

export default affiliateReducer;