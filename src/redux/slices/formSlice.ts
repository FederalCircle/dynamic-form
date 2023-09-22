import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FormState {
  [key: string]: {
    value?: string;
    error?: string;
  };
}

const initialState: FormState = {};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateInputValue: (
      state,
      action: PayloadAction<{ name: string; value: any }>
    ) => {
      if (!state[action.payload.name]) state[action.payload.name] = {};
      state[action.payload.name].value = action.payload.value;
    },
    updateInputError: (
      state,
      action: PayloadAction<{ name: string; error: string }>
    ) => {
      state[action.payload.name].error = action.payload.error;
    },
  },
});

export const { updateInputValue, updateInputError } = formSlice.actions;

export const selectForm = ({
  form,
}: RootState): Record<
  string,
  {
    value?: string;
    error?: string;
  }
> => form;

export default formSlice.reducer;
