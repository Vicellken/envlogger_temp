<template>
  <q-page class="flex flex-center">
    <highcharts style="width: 95vw;" :options="optionsHighShore.record"></highcharts>
    <highcharts style="width: 95vw;" :options="optionsMidShore.record"></highcharts>
    <highcharts style="width: 95vw;" :options="optionsLowShore.record"></highcharts>
  </q-page>
</template>

<script>
// import Highcharts from "highcharts";
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);
import { optionsHighShore } from "../dataApi/highShore_dec.js";
import { optionsMidShore } from "../dataApi/midShore_dec.js";
import { optionsLowShore } from "../dataApi/lowShore_dec.js";

export default {
  name: 'PageIndex',

  data() {
    return {
      optionsHighShore: optionsHighShore,
      optionsMidShore: optionsMidShore,
      optionsLowShore: optionsLowShore,
    }
  },

  mounted() {
    this.optionsHighShore.fetchHighShoreDecData()
    this.optionsMidShore.fetchMidShoreDecData()
    this.optionsLowShore.fetchLowShoreDecData()
  }
}
</script>
