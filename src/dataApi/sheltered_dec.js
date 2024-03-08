import axios from "axios";
import Papa from "papaparse";

export const optionsShelteredShore = {
  record: {
    chart: {
      type: "line",
    },
    title: {
      text: "Sheltered Shore Hourly Temperature",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Temperature (celsius)",
        align: "middle",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: " °C",
      valueDecimals: 2,
      style: {
        fontSize: "1.5rem",
      },
    },
    plotOptions: {
      series: {
        pointStart: Date.UTC(2023, 11, 1, 0, 0, 0),
        pointInterval: 3600000,
      },
      // line: {
      //   dataLabels: {
      //     enabled: true,
      //   },
      // },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "High",
        data: [],
      },
      {
        name: "Mid",
        data: [],
      },
      {
        name: "Low",
        data: [],
      },
    ],
    legend: {
      itemStyle: {
        fontSize: "20px",
      },
    },
  },

  async fetchShelteredShoreDecData() {
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAXakiXuR9XijVATMa_ACLjZ3j7_UOWnDm0MHwU355qrD1gfypi2n_YTqJ1TOc83q17Zg9dFWbYCJC/pub?output=csv"
    );

    const data = Papa.parse(response.data, {
      header: true,
      dynamicTyping: true,
    }).data;

    this.record.series[0].data = data.map((row) => [row.high]);
    this.record.series[1].data = data.map((row) => [row.mid]);
    this.record.series[2].data = data.map((row) => [row.low]);
  },
};
