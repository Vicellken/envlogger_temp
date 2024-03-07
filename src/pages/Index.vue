<template>
  <q-page class="flex flex-center">
    <highcharts style="width: 95vw;" :options="options"></highcharts>
  </q-page>
</template>

<script>
import axios from "axios";
import Papa from "papaparse";
import Highcharts from "highcharts";
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);

export default {
  name: 'PageIndex',

  data() {
    return {
      options: {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Highshore Hourly Temperature'
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
          }
        },
        plotOptions: {
          series: {
            pointStart: Date.UTC(2023, 11, 1, 0, 0, 0),
            pointInterval: 3600000,
          },
          // line: {
          //   dataLabels: {
          //     enabled: true
          //   },
          // },
        },
        credits: {
          enabled: false,
        },
        series: [{
          name: 'Exposed',
          data: []
        }, {
          name: 'Sheltered',
          data: []
        }],
        legend: {
          itemStyle: {
            fontSize: '20px'
          }
        }
      }
    }
  },
  async mounted() {
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8eiwzmYfTFrkTrUK8OFfIY8lzV3OE3WSCW6BYhNRNhzW9GuWr0q3Iqg7Fp7PRF4g8SI2kPKfuybsb/pub?output=csv"
    );

    const data = Papa.parse(response.data, {
      header: true,
      dynamicTyping: true,
    }).data;

    this.$data.options.series[0].data = data.map((row) => [
      row.hi_exposed,
    ]);

    this.$data.options.series[1].data = data.map((row) => [
      row.hi_sheltered,
    ]);
  },
}
</script>
