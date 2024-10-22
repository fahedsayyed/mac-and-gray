import { axiosInstance } from "../../Axios";
import { tokenConfig } from "./auth";
import { returnErrors } from "./error";
import { returnMessages } from "./message";

const initialState = {
    cases: [],
}

const supportReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "SET_CASES":
            return {
                cases: action.payload
            }
        case "CLEAR_SUPPORT":
            return initialState;
        default:
            return state;
    }
}

export const setCases = (payload) => ({
    type: "SET_CASES",
    payload
})

export const clearSupport = () => ({
    type: "CLEAR_SUPPORT"
})

export const getSupportCases = () => async (dispatch, getState) => {
    try {
        const { data, status } = await axiosInstance.get('/support/user-case/', tokenConfig(getState));
        if(status>399) throw(data);
        console.log(data)
        dispatch(clearSupport());
        dispatch(setCases(data));
    } catch (error) {
        console.log(error)
        dispatch(returnErrors(error.response.data?.detail,error.response.status))
        throw(error.response.data)
    }
}

export const createSupportCase = (payload) => async (dispatch, getState) => {
    try {
        const {data, status} = await axiosInstance.post(`/support/create-case/`, payload, tokenConfig(getState));
        if(status>399) throw(data);
        const msg = data?.message?data.message:"Support case submitted!";
        console.log(msg)
        dispatch(returnMessages(msg, 200))
    } catch (error) {
        console.log(error)
        dispatch(returnErrors(error.response.data?.detail,error.response.status));
        throw(error.response.data);
    }
}

export const getSupportDetails = (id) => async (dispatch, getState) => {
    try {
        const {data, status} = await axiosInstance.get(`/support/case-history/${id}`, tokenConfig(getState));
        if(status>399) throw(data);
        return data
    } catch (error) {
        console.log(error)
        throw(error)
    }
}

export default supportReducer;