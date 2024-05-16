import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./Slices/navigationSlice";
import savesReducer from "./Slices/savesSlice";
import statsReducer from "./Slices/statsSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    stats: statsReducer,
    saves: savesReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
