const initialState = {
    is_loading: false
};

const loaderReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {is_loading: action.payload};
        default:
            return state;
    }
}

export const setLoading = (payload) => ({type: 'SET_LOADING', payload});


export default loaderReducer;