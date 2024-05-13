import { configureStore } from "@reduxjs/toolkit";
import newCharacterReducer from "./slices/newCharacterSlice";

export const store = configureStore({
  reducer: {
    newCharacter: newCharacterReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
