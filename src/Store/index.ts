import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./Slices/characterSlice";
import navigationReducer from "./Slices/navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    character: characterReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
