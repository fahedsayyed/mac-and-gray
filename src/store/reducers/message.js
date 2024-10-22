import i18next from '../../i18n/config';

const initialState = {
    title: null,
    msg: {},
    status: null,
  };
  
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_MESSAGES":
        return {
          title: i18next.t(action.payload.title),
          msg: i18next.t(action.payload.msg),
          status: action.payload.status,
        };
      case "CLEAR_MESSAGES":
          return initialState;
      default:
        return state;
    }
  }
  
  export const returnMessages = (msg, status, title='') => {
    return {
      type: "GET_MESSAGES",
      payload: { msg, status, title },
    };
  };
  
  export const clearMessages = () => {
      return {
        type: "CLEAR_MESSAGES",
      };
  };
  
  
  export default messageReducer;