import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth";
import errorAlertReducer from "./error";
import msgAlertReducer from "./message";
import paymentReducer from "./payment";
import settingsReducer from "./settings";
import supportReducer from "./support";
import loaderReducer from "./loader";
import dashboardReducer from "./dashboard";
import compReducer from "./competition";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loader"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorAlertReducer,
  message: msgAlertReducer,
  competition: compReducer,
  settings: settingsReducer,
  support: supportReducer,
  payment: paymentReducer,
  loader: loaderReducer,
  dashboard: dashboardReducer,
});

export default persistReducer(persistConfig, rootReducer);
