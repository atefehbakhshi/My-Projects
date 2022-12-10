"use strict";
// line chart
function lineChart(x, y) {
  new Chart("result", {
    type: "line",
    data: {
      labels: x,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: y,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
}

// linear graph
function linearGraph(a, b, x) {
  let xValues = [];
  let yValues = [];
  generateData(a, b, x);

  new Chart("result", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          pointRadius: 1,
          borderColor: "rgba(255,0,0,0.5)",
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: `y = x * ${a} + ${b}`,
        fontSize: 16,
      },
    },
  });

  function generateData(a, b, x) {
    x.forEach((item) => {
      xValues.push(Number(item));
      yValues.push(Number(item) * a + b);
    });
  }
}

// bar chart
function barChart(x, y, color) {
  new Chart("result", {
    type: "bar",
    data: {
      labels: x,
      datasets: [
        {
          backgroundColor: color,
          data: y,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
      },
    },
  });
}

// pie chart
function pieChart(x, y, color) {
  new Chart("result", {
    type: "pie",
    data: {
      labels: x,
      datasets: [
        {
          backgroundColor: color,
          data: y,
        },
      ],
    },
    options: {
      title: {
        display: true,
      },
    },
  });
}

export { lineChart,linearGraph,barChart,pieChart };
