// store.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";

export const reduxStore = configureStore({
  reducer: {
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
