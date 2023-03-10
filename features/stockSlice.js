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
  myPortfolio: [],
  myWatchList: [],
  selectedStock: {
    name: "global stock",
  },
};

export const stockSlice = createSlice({
  name: "stockList",
  initialState,
  reducers: {
    // selected stock to show on home screen
    setGlobalSelectedStock: (state, action) => {
      state.selectedStock = action.payload;
    },

    // To fetch the latest Quote data
    setToFetchedList: (state, action) => {
      state.fetchedStockList = action.payload;
    },
    // ADD a stock to your portfolio by clicking on the buy button
    addToPortfolio: (state, action) => {
      state.myPortfolio = [...state.myPortfolio, action.payload];
    },
    // REMOVE from the portfolio
    removeFromPortfolio: (state, action) => {
      const index = state.myPortfolio.findIndex(
        (item) => item.id === action.payload.id
      );
      let newList = [...state.myPortfolio];

      if (index >= 0) {
        newList.splice(index, 1);
      }

      state.myPortfolio = newList;
    },

    // ADD to my watch list
    addToMyWatchList: (state, action) => {
      state.myWatchList = [...state.myWatchList, action.payload];
    },
    // REMOVE from watch list
    removeFromWatchList: (state, action) => {
      const index = state.myWatchList.findIndex(
        (item) => item.id === action.payload.id
      );
      let newList = [...state.myWatchList];

      if (index >= 0) {
        newList.splice(index, 1);
      }

      state.myWatchList = newList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setToFetchedList,
  addToPortfolio,
  addToMyWatchList,
  removeFromPortfolio,
  removeFromWatchList,
  setGlobalSelectedStock,
} = stockSlice.actions;

export default stockSlice.reducer;
