import React, { useEffect } from "react";

function Testing() {
  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.finnhub.io?token=cf96kkaad3i9ljn7ea10cf96kkaad3i9ljn7ea1g"
    );
    // Connection opened -> Subscribe
    socket.addEventListener("open", function (event) {
      socket.send(JSON.stringify({ type: "subscribe", symbol: "TSLA" }));
      // socket.send(
      //   JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
      // );
      // socket.send(JSON.stringify({ type: "subscribe", symbol: "MSFT" }));
      // socket.send(JSON.stringify({ type: "subscribe", symbol: "GOOG" }));
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
    });

    // Unsubscribe
    var unsubscribe = function (symbol) {
      socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
    };
  }, []);

  return <div>Testing</div>;
}

export default Testing;

const messageFromServer = {
  data: [
    {
      c: null,
      p: 23731.62,
      s: "BINANCE:BTCUSDT",
      t: 1675058443858,
      v: 0.01392,
    },
    {
      c: null,
      p: 23731.62,
      s: "BINANCE:BTCUSDT",
      t: 1675058443868,
      v: 0.00373,
    },
    {
      c: null,
      p: 23731.38,
      s: "BINANCE:BTCUSDT",
      t: 1675058443868,
      v: 0.01116,
    },
    {
      c: null,
      p: 23731.34,
      s: "BINANCE:BTCUSDT",
      t: 1675058443868,
      v: 0.00275,
    },
    {
      c: null,
      p: 23731.96,
      s: "BINANCE:BTCUSDT",
      t: 1675058443886,
      v: 0.00069,
    },
    {
      c: null,
      p: 23732.39,
      s: "BINANCE:BTCUSDT",
      t: 1675058443886,
      v: 0.00069,
    },
    { c: null, p: 23732.5, s: "BINANCE:BTCUSDT", t: 1675058443886, v: 0.00064 },
    {
      c: null,
      p: 23732.72,
      s: "BINANCE:BTCUSDT",
      t: 1675058443886,
      v: 0.00135,
    },
    {
      c: null,
      p: 23731.95,
      s: "BINANCE:BTCUSDT",
      t: 1675058443912,
      v: 0.00064,
    },
    {
      c: null,
      p: 23731.96,
      s: "BINANCE:BTCUSDT",
      t: 1675058443919,
      v: 0.00005,
    },
  ],
  type: "trade",
};
