

<script>
import { Doughnut } from "vue-chartjs";
// import axios from "axios";
// import store from "../store";
import { mapGetters } from "vuex";

export default {
  extends: Doughnut,

  computed: {
    ...mapGetters(["getSelectedMake"]),
  },

  props: {
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null
    },
  },

  mounted() {
    console.log(this.chartdata)
    this.renderChart(this.chartdata, this.options)
  },

  data() {
    return {};
  },
};
</script>



<style>
</style>