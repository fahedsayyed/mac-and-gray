import { axiosInstance } from "../../Axios";
import { tokenConfig } from "./auth";
import { returnErrors } from "./error";
import { setLoading } from "./loader";

const initialState = {
    overview: {},
    metrics: false,
    user_accounts: [],
    metrics_login_id: ''
}

const dashboardReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_OVERVIEW':
            const overview_state = {
                ...state.overview
            }
            overview_state[action.payload.login_id] = action.payload
            return {
                ...state,
                overview: {
                    ...overview_state
                }
            }
        case 'SET_ACCOUNT_METRICS':
            return {
                ...state,
                metrics: action.payload
            }
        case 'SET_USE_ACCOUNTS':
            return {
                ...state,
                user_accounts: action.payload
            }
        case 'SET_LOGIN_ID':
            return {
                ...state,
                metrics_login_id: action.payload
            }
        case 'CLEAR_ACCOUNT_METRICS':
            return {
                ...state,
                metrics:false
            }
        case 'RESET_DASHBOARD':
            return initialState
        default:
            return state;
    }
}

const setOverview = (payload) => ({
    type: 'SET_OVERVIEW',
    payload
})

const setAccountMetrics = (payload) => ({
    type: 'SET_ACCOUNT_METRICS',
    payload
})

export const clearAccountMetrics = () => ({
    type: 'CLEAR_ACCOUNT_METRICS'
})

export const setLoginId = (payload) => ({
    type: 'SET_LOGIN_ID',
    payload
})

const setUserAccounts = (payload) => ({
    type: 'SET_USE_ACCOUNTS',
    payload
})

export const resetDashboard = (payload) => ({
    type: 'RESET_DASHBOARD',
    payload
})

export const getAccountsOverview = (login) => async (dispatch, getState) => {

    try {
        const {data, status} = await axiosInstance.get(`/accounts/overview/${login}/`, tokenConfig(getState));
        if(status>399) throw(data);
        dispatch(setOverview(data));
        return data
    } catch (error) {
        console.log(error)
        dispatch(returnErrors(error.response.data?.detail,error.response.status))
        throw(error.response.data)
    }

};

export const getAccountMetrics = (login) => async (dispatch, getState) => {
    const metrics = getState().dashboard.metrics;
    if(login && metrics && metrics.login_id !== login) dispatch(clearAccountMetrics());
    try {
        dispatch(setLoading(true));
        const {data, status} = await axiosInstance.get(`/accounts/accountmetrics/${login}/`, tokenConfig(getState));
        if(status>399) throw(data);
        dispatch(setAccountMetrics(data));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
        console.log(error)
        dispatch(returnErrors(error.response.data?.detail,error.response.status))
        throw(error.response.data)
    }

};

export const getUserAccounts = () => async (dispatch, getState) => {
    try {
        const {data, status} = await axiosInstance.get('/accounts/user-accounts/', tokenConfig(getState));
        if(status>399) throw(data);
        dispatch(setUserAccounts(data));
    } catch (error) {
        console.log(error)
        dispatch(returnErrors(error.response.data?.detail,error.response.status))
        throw(error.response.data)
    }
}

export default dashboardReducer;