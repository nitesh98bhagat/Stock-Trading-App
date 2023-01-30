import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  predefinedStockList: [
    { id: 1, name: "Apple Inc", symbol: "AAPL" },
    { id: 2, name: "Meta Platforms, Inc.(Facebook)", symbol: "META" },
    { id: 3, name: "Microsoft Corporation", symbol: "MSFT" },
    { id: 4, name: "Alphabet Inc (Google)", symbol: "GOOG" },
    { id: 5, name: "Tesla, Inc.", symbol: "TSLA" },
    { id: 6, name: "NVIDIA Corporation", symbol: "NVDA" },
    { id: 7, name: "Intel Corporation", symbol: "INTC" },
    { id: 8, name: "Alibaba Group Holding Limited", symbol: "BABA" },
    { id: 9, name: "Salesforce, Inc.", symbol: "CRM" },
    { id: 10, name: "Advanced Micro Devices, Inc.", symbol: "AMD" },
    { id: 11, name: "PayPal Holdings, Inc.", symbol: "PYPL" },
    { id: 12, name: "Electronic Arts Inc.", symbol: "EA" },
    { id: 13, name: "Match Group, Inc.", symbol: "MTCH" },
    { id: 14, name: "The Trade Desk, Inc.", symbol: "TTD" },
    { id: 15, name: "Activision Blizzard, Inc.", symbol: "ATVI" },
    { id: 16, name: "Amazon.com, Inc.", symbol: "AMZN" },
  ],
  fetchedStockList: [],
};

export const stockSlice = createSlice({
  name: "stockList",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = stockSlice.actions;

export default stockSlice.reducer;