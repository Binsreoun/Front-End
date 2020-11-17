const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__Logout");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
Highcharts.chart("container", {
  chart: {
    type: "spline",
  },
  title: {
    text: "Electric . Temperature",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: [
    {
      className: "highcharts-color-0",
      title: {
        text: "Electric",
      },
    },
    {
      className: "highcharts-color-1",
      opposite: true,
      title: {
        text: "Temperature",
      },
    },
  ],

  tooltip: {
    crosshairs: true,
    shared: true,
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 5,
        lineColor: "#666666",
        lineWidth: 1,
      },
    },
  },
  series: [
    {
      name: "op10",
      marker: {
        symbol: "square",
      },
      data: [94.0, 109.9, 92.5, 107.5, 93.2, 101.5, 90.2, 100],
    },
    {
      name: "op20",
      marker: {
        symbol: "square",
      },
      data: [107.0, 101.9, 101.5, 91.5, 91.2, 91.5, 100.2, 99.0],
    },
    {
      name: "op30",
      marker: {
        symbol: "square",
      },
      data: [93.0, 99.9, 99.5, 99.5, 99.2, 99.5, 100.2, 100],
    },
    {
      name: "op40",
      marker: {
        symbol: "diamond",
      },
      data: [500, 504.2, 505.7, 498.5, 491.9, 495.2, 507.0, 506.6],
      yAxis: 1,
    },
    {
      name: "op50",
      marker: {
        symbol: "diamond",
      },
      data: [501, 554.2, 585.7, 508.5, 502.9, 493.2, 481.0, 496.6],
      yAxis: 1,
    },
  ],
});

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,

    title: {
      text: "PROCESSTIME",
    },
    axisX: {
      interval: 1,
    },
    axisY2: {
      interlacedColor: "rgba(1,77,101,.2)",
      gridColor: "rgba(1,77,101,.1)",
      title: "",
    },
    data: [
      {
        type: "bar",
        name: "companies",
        axisYType: "secondary",
        color: "#014D65",
        dataPoints: [
          { y: 24, label: "op10" },
          { y: 24, label: "op20" },
          { y: 24, label: "op30" },
          { y: 24, label: "op40" },
          { y: 24, label: "op50" },
          { y: 24, label: "op60" },
        ],
      },
    ],
  });
  chart.render();
};
