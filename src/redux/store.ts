import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagasMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pandasSlice from "./pandas/pandasSlice";
import rootSaga from "./sagas";
import { reducer as formReducer } from "redux-form";
import history from "./services/history";

export const rootReducer = combineReducers({
  pandas: pandasSlice,
  form: formReducer,
  router: connectRouter(history),
});

const sagaMiddleware = createSagasMiddleware();

const initialState = {};
const persistConfig = {
  key: "pandas",
  storage: storage,
  whitelist: ["pandasSlice"],
  blacklist: ["form", "router"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, routerMiddleware(history)],
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
