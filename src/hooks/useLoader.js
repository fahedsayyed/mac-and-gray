import { store } from "../store/index";
import { setLoading } from "../store/reducers/loader";

export const useLoader = () => {

    const dispatch = store.dispatch;

    const setLoader = (value) => {
        if(value === true || value === false){
            dispatch(setLoading(value));
        }
    }
    return setLoader;
}