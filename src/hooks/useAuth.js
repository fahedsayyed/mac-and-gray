import { store } from "../store/index";

export const useAuth = () => {
    const idToken = store.getState().auth.idToken;
    return idToken;
}