import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CurrencyState {
  currentCurrency: string;
}

const initialState: CurrencyState = {
  currentCurrency: 'MXN',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action:PayloadAction<string>) => {
      state.currentCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export const selectCurrency = (state: {currency:CurrencyState}) => state.currency.currentCurrency;
export default currencySlice.reducer;
