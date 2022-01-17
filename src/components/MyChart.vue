

<script>
import { Doughnut } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Doughnut,
  //   props: {
  //     chartdata: {
  //       type: Object,
  //       default: null,
  //     },
  //     options: {
  //       type: Object,
  //       default: null,
  //     },
  //   },
  mounted() {
    axios
      .get("https://peaceful-beyond-71732.herokuapp.com/analyzeList")
      .then((res) => {
        return this.renderChart(
          {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: Object.keys(res.data.makesAverage[0]),
            datasets: [
              {
                label: "Data One",
                backgroundColor: [
                  "rgb(154, 208, 245)",
                  "#ffcf9f",
                  "#ffb1c1",
                  "#f1726b",
                  "#7675fe",
                  "#fba882",
                  "#c28763",
                  "#89a07e",
                  "#45a4ab",
                  "#39393b",
                  "#023602",
                  "#0e063d",
                  "#535201",
                  "#912b03",
                ],
                data: Object.values(res.data.makesAverage[0]),
              },
            ],
          },
          {
            borderWidth: "10px",
            responsive: true,
            hoverBackgroundColor: "red",
            hoverBorderWidth: "10px",
          }
        );
      })
      .catch((e) => {
        console.log(e);
      });
  },

  computed: {
    // mydata: () => {
    // },
  },

  data() {
    return {};
  },
};
</script>



<style>
</style>