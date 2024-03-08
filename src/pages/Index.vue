<template>
  <q-page class="flex flex-center q-pa-md">
    <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary" align="justify"
      narrow-indicator>
      <q-tab name="mails" label="Tidal level" style="font-size: 30px;" />
      <q-tab name="alarms" label="Exposed VS Sheltered" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <!-- <div class="text-h4 text-center">Hourly Rock Surface Temperature</div> -->
        <q-card-section>
          <h2 class="text-h6">High Shore</h2>
          <!-- <q-btn label="Show numbers" @click="showNumbers"></q-btn> -->
          <highcharts style="width: 95vw;" :options="optionsHighShore.record"></highcharts>
        </q-card-section>
        <br />
        <q-card-section>
          <h2 class="text-h6">Mid Shore</h2>
          <highcharts style="width: 95vw;" :options="optionsMidShore.record"></highcharts>
        </q-card-section>
        <br />
        <q-card-section>
          <h2 class="text-h6">Low Shore</h2>
          <highcharts style="width: 95vw;" :options="optionsLowShore.record"></highcharts>
        </q-card-section>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <!-- <div class="text-h4 text-center">Hourly Rock Surface Temperature</div> -->
        <q-card-section>
          <h2 class="text-h6">Exposed Shore</h2>
          <highcharts style="width: 95vw;" :options="optionsExposedShore.record"></highcharts>
        </q-card-section>
        <br />
        <q-card-section>
          <h2 class="text-h6">Sheltered Shore</h2>
          <highcharts style="width: 95vw;" :options="optionsShelteredShore.record"></highcharts>
        </q-card-section>
      </q-tab-panel>
    </q-tab-panels>
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
import { optionsExposedShore } from "../dataApi/exposed_dec.js";
import { optionsShelteredShore } from "../dataApi/sheltered_dec.js";

export default {
  name: 'PageIndex',

  data() {
    return {
      tab: 'mails',
      optionsHighShore: optionsHighShore,
      optionsMidShore: optionsMidShore,
      optionsLowShore: optionsLowShore,
      optionsExposedShore: optionsExposedShore,
      optionsShelteredShore: optionsShelteredShore,
    }
  },

  mounted() {
    this.optionsHighShore.fetchHighShoreDecData()
    this.optionsMidShore.fetchMidShoreDecData()
    this.optionsLowShore.fetchLowShoreDecData()
    this.optionsExposedShore.fetchExposedShoreDecData()
    this.optionsShelteredShore.fetchShelteredShoreDecData()
  },

  // methods: {
  //   showNumbers() {
  //     // Change the value in the Highcharts options
  //     // For example, change the title of the chart
  //     this.optionsHighShore.record.plotOptions.line.dataLabels.enabled = true;
  //     // Force re-render the chart
  //     this.optionsHighShore = Object.assign({}, this.optionsHighShore);
  //   }
  // }
}
</script>
