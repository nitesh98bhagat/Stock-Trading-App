// import React, { useEffect } from "react";

// function Testing() {
//   useEffect(() => {
//     const socket = new WebSocket(
//       // "wss://ws.finnhub.io?token=cf96kkaad3i9ljn7ea10cf96kkaad3i9ljn7ea1g"
//       "wss://ws.twelvedata.com/v1/{$route}?apikey=afbae753419a44a8a1c2aad8a5d42b74"
//     );
//     // Connection opened -> Subscribe
//     socket.addEventListener("open", function (event) {
//       socket.send(JSON.stringify({ type: "subscribe", symbol: "TSLA" }));
//       // socket.send(
//       //   JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
//       // );
//       // socket.send(JSON.stringify({ type: "subscribe", symbol: "MSFT" }));
//       // socket.send(JSON.stringify({ type: "subscribe", symbol: "GOOG" }));
//     });

//     // Listen for messages
//     socket.addEventListener("message", function (event) {
//       console.log("Message from server ", event.data);
//     });

//     // Unsubscribe
//     var unsubscribe = function (symbol) {
//       socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
//     };
//   }, []);

//   return <div>Testing</div>;
// }

// export default Testing;

// const messageFromServer = {
//   data: [
//     {
//       c: null,
//       p: 23731.62,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443858,
//       v: 0.01392,
//     },
//     {
//       c: null,
//       p: 23731.62,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443868,
//       v: 0.00373,
//     },
//     {
//       c: null,
//       p: 23731.38,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443868,
//       v: 0.01116,
//     },
//     {
//       c: null,
//       p: 23731.34,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443868,
//       v: 0.00275,
//     },
//     {
//       c: null,
//       p: 23731.96,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443886,
//       v: 0.00069,
//     },
//     {
//       c: null,
//       p: 23732.39,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443886,
//       v: 0.00069,
//     },
//     { c: null, p: 23732.5, s: "BINANCE:BTCUSDT", t: 1675058443886, v: 0.00064 },
//     {
//       c: null,
//       p: 23732.72,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443886,
//       v: 0.00135,
//     },
//     {
//       c: null,
//       p: 23731.95,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443912,
//       v: 0.00064,
//     },
//     {
//       c: null,
//       p: 23731.96,
//       s: "BINANCE:BTCUSDT",
//       t: 1675058443919,
//       v: 0.00005,
//     },
//   ],
//   type: "trade",
// };

// -----------------------CHART REPRESENTATION--------------------------

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function drawChart(svgRef) {
  const data = [12, 5, 6, 6, 9, 10, 100];
  const h = 500;
  const w = 250;
  const svg = d3.select(svgRef.current);

  svg
    .attr("width", w)
    .attr("height", h)
    .style("margin-top", 50)
    .style("margin-left", 50);

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 40)
    .attr("y", (d, i) => h - 10 * d)
    .attr("width", 20)
    .attr("height", (d, i) => d * 10)
    .attr("fill", "steelblue");
}

const Chart = () => {
  const svg = useRef();

  useEffect(() => {
    drawChart(svg);
  }, [svg]);

  return (
    <div id="chart">
      <svg ref={svg} />
    </div>
  );
};

export default Chart;
