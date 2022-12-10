"use strict";
// import charts
import { lineChart,linearGraph,barChart,pieChart } from "./chartsCollection.js";

// define variables
const item = document.querySelector("#chart");
// line chart
const line = document.querySelector("#line");
const lineXAxes = document.querySelector("#line-x-axes");
const lineYAxes = document.querySelector("#line-y-axes");
// linear graph
const lineargraphs = document.querySelector("#lineargraphs");
const linearGraphXAxes = document.querySelector("#lineargraphs-x-axes");
const linearGraphA = document.querySelector("#a");
const linearGraphB = document.querySelector("#b");
// bar chart
const bar = document.querySelector("#barcharts");
const barChartXAxes = document.querySelector("#barcharts-x-axes");
const barChartYAxes = document.querySelector("#barcharts-y-axes");
const barChartColor = document.querySelector("#barcharts-color");
// pie chart
const pie = document.querySelector("#piecharts");
const pieChartXAxes = document.querySelector("#piecharts-x-axes");
const pieChartYAxes = document.querySelector("#piecharts-y-axes");
const pieChartColor = document.querySelector("#piecharts-color");

const allCharts = [line, lineargraphs, bar, pie];

// specify selected shape
let chartType = "line";

item.addEventListener("mouseout", () => {
  chartType = item.options[item.selectedIndex].value;
  allCharts.forEach((chart) => (chart.style.display = "none"));
  if (chartType === "line") {
    line.style.display = "block";
  } else if (chartType === "lineargraphs") {
    lineargraphs.style.display = "block";
  } else if (chartType === "barcharts") {
    bar.style.display = "block";
  } else if (chartType === "piecharts") {
    pie.style.display = "block";
  } else {
    alert("Something went wrong");
  }
});

const drawBtn = document.querySelector("#draw-btn");
drawBtn.addEventListener("click", () => {
  if (chartType === "line") {
    const x = lineXAxes.value.split(",");
    const y = lineYAxes.value.split(",");
    lineChart(x, y);
  } else if (chartType === "lineargraphs") {
    const x = linearGraphXAxes.value.split(",");
    const a = +linearGraphA.value;
    const b = +linearGraphB.value;
    linearGraph(a, b, x);
  } else if (chartType === "barcharts") {
    const x = barChartXAxes.value.split(",");
    const y = barChartYAxes.value.split(",");
    const color = barChartColor.value.split(",");
    barChart(x, y, color);
  } else if (chartType === "piecharts") {
    const x = pieChartXAxes.value.split(",");
    const y = pieChartYAxes.value.split(",");
    const color = pieChartColor.value.split(",");
    pieChart(x, y, color);
  }else{
    alert("Something went wrong");
  }
});
