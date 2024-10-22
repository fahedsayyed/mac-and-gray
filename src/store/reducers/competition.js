import { axiosInstance } from "../../Axios";
import { tokenConfig } from "./auth";
import { returnErrors } from "./error";
import { returnMessages } from "./message";

const initialState = {
  message: "",
  competitionList: {
    Upcoming: [],
    Ongoing: [],
    End: [],
    Participated: [],
  },
  competitionLeaderboard: {
    leaderboard: [],
  },
  competitionStats: {
    user: [],
  },
};

const compReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_PARTICIPATE":
      return {
        ...state,
        message: action.payload,
      };
    case "SET_CHALLENGE_LIST":
      return {
        ...state,
        competitionList: action.payload,
      };
    case "SET_LEADERBOARD_DATA":
      return {
        ...state,
        competitionLeaderboard: action.payload,
      };
    case "SET_STATS":
      return {
        ...state,
        competitionStats: action.payload,
      };
    default:
      return state;
  }
};

const setCompParticipate = (payload) => ({
  type: "SET_USER_PARTICIPATE",
  payload,
});

const setChallengeList = (payload) => ({
  type: "SET_CHALLENGE_LIST",
  payload,
});

const setCompLeaderboard = (payload) => ({
  type: "SET_LEADERBOARD_DATA",
  payload,
});

const setCompStats = (payload) => ({
  type: "SET_STATS",
  payload,
});

export const getCompetitionList = () => async (dispatch, getState) => {
  try {
    const { data, status } = await axiosInstance.get(
      "/competition/list/",
      tokenConfig(getState)
    );
    if (status > 399) throw data;
    dispatch(setChallengeList(data));
  } catch (error) {
    dispatch(returnErrors(error.response.data?.detail, error.response.status));
    throw error.response.data;
  }
};

export const userCompParticipate = (payload) => async (dispatch, getState) => {
  try {
    const { data, status } = await axiosInstance.post(
      "/competition/user-competition/",
      payload,
      tokenConfig(getState)
    );
    if (status > 399) throw data;
    dispatch(setCompParticipate(data));
  } catch (error) {
    dispatch(returnErrors(error.response.data?.detail, error.response.status));
    throw error.response.data;
  }
};

export const seeCompLeaderboard = (payload) => async (dispatch, getState) => {
  console.log(payload, "getStategetStategetState", tokenConfig(getState));
  try {
    const headers = tokenConfig(getState);
    console.log({ ...headers, body: payload });
    const { data, status } = await axiosInstance.get(
      `/competition/leadboards?competition=${payload.competition}`,
      headers
    );
    if (status > 399) throw data;
    dispatch(setCompLeaderboard(data));
  } catch (error) {
    dispatch(returnErrors(error.response.data?.detail, error.response.status));
    throw error.response.data;
  }
};

export const seeCompStats = (payload) => async (dispatch, getState) => {
  console.log(payload, "getStategetStategetState", tokenConfig(getState));
  try {
    const { data, status } = await axiosInstance.get(
      `/competition/stats/?user_competition=${payload}`,
      tokenConfig(getState)
    );
    if (status > 399) throw data;
    dispatch(setCompStats(data));
  } catch (error) {
    dispatch(returnErrors(error.response.data?.detail, error.response.status));
    throw error.response.data;
  }
};

export const createSupportCase = (payload) => async (dispatch, getState) => {
  try {
    const { data, status } = await axiosInstance.post(
      `/support/create-case/`,
      payload,
      tokenConfig(getState)
    );
    if (status > 399) throw data;
    const msg = data?.message ? data.message : "Support case submitted!";
    console.log(msg);
    dispatch(returnMessages(msg, 200));
  } catch (error) {
    console.log(error);
    dispatch(returnErrors(error.response.data?.detail, error.response.status));
    throw error.response.data;
  }
};

export default compReducer;
