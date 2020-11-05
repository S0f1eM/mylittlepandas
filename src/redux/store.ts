import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagasMiddleware from "redux-saga";
//redux-persist
//import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
import pandasSlice from "./pandas/pandasSlice";
import rootSaga from "./sagas";

export const rootReducer = combineReducers({
  pandas: pandasSlice,
});

const sagaMiddleware = createSagasMiddleware();

const initialState = {};

export const store = configureStore({
  //reducer: persistedReducer,
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

/*const persistConfig = {
  key: "pandas",
  storage: storage,
  whitelist: ["pandasSlice"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
*/
//export const persistor = persistStore(store);
