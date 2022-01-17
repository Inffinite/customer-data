<template>
  <div class="analytics">
    <div class="content">
      <div class="ntitle">Car Model Data</div>
      <!-- <div class="n-subtitle">Vehicle Stats</div> -->
      <div class="chart-wr-wr">
        <div class="chart-wr">
          <ModelChart :chartdata="chartdata" :options="options" />
        </div>
      </div>

      <div style="margin-top: 40px;">
        <div class="make-pill-wr">
          <button @click="back()" class="make-pill">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModelChart from "./ModelChart.vue";
export default {
  components: {
    ModelChart,
  },

  methods: {
    back() {
      this.$router.push({ name: "Makeo" });
    },
  },

  props: {
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
@import '../styles/Analytics.css';
</style>