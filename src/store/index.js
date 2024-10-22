import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)