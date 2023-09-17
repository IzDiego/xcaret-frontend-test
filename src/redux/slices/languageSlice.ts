import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ILocalizedData, type Langs } from "~/entities/langEntity";
interface LanguageState {
  value: string;
  locales: Langs;
  localizedLocales: ILocalizedData;
}

const initialState: LanguageState = {
  value: "es",
  locales: {} as Langs,
  localizedLocales: {} as ILocalizedData
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;

      state.localizedLocales = state.locales[state.value as keyof typeof state.locales] || {} as ILocalizedData;
    },
    setLocales: (state, action: PayloadAction<object>) => {
      state.locales = action.payload as Langs;

      state.localizedLocales = state.locales[state.value as keyof typeof state.locales] || {} as ILocalizedData;
    },
  },
});

export const { setLanguage, setLocales} = languageSlice.actions;
export const selectLanguage = (state: { language: LanguageState }) =>
  state.language.value;
export const selectLocales = (state: { language: LanguageState }) =>
  state.language.locales;
export const selectLocalizedLocales = (state: { language: LanguageState }) =>
state.language.localizedLocales;
export default languageSlice.reducer;
