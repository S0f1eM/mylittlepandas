import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagasMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pandasSlice from "./pandas/pandasSlice";
import rootSaga from "./sagas";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  pandas: pandasSlice,
  form: formReducer,
});

const sagaMiddleware = createSagasMiddleware();

const initialState = {};
const persistConfig = {
  key: "pandas",
  storage: storage,
  whitelist: ["pandasSlice"],
  blacklist: ["form"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
