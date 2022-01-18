<template>
  <div class="analytics">
    <div class="content">
      <div class="ntitle">Car Make Data</div>
      <!-- <div class="n-subtitle">Vehicle Stats</div> -->

      <div class="chart-wr-wr">
        <div class="chart-wr">
          <MyChart />
        </div>
      </div>

      <div class="make-pill-wr">
        <button
          @click="setCar(make)"
          v-for="make in makeNames"
          :key="make"
          class="make-pill"
        >
          {{ make }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MyChart from "./MyChart.vue";
import axios from "axios";
import store from "../store";
export default {
  components: {
    MyChart,
  },

  data() {
    return {
      mymyy: null,
      makes: [],
      models: [],
      makeNames: [],
      mycar: "",
      mydata: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    };
  },

  async mounted() {
    await axios
      .get("https://peaceful-beyond-71732.herokuapp.com/analyzeList")
      .then((res) => {
        var name = Object.keys(res.data.makesAverage[0]);
        this.makeNames = name;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  methods: {
    async setCar(m) {
      console.log(m);
      this.mycar = m;
      await store.dispatch("changeSelectedMakeState", m);

      await axios
        .get("https://peaceful-beyond-71732.herokuapp.com/analyzeList")
        .then(async (res) => {
          let modelNames = [];
          let modelValues = [];
          // let mystuff = [];
          let carNames = [];
          let carValues = [];

          console.log(res.data)

          for (let i = 0; i < res.data.models.length; i++) {
            var name = Object.keys(res.data.models[i]);
            var values = Object.values(res.data.models[i]);
            modelNames.push(name[0]);
            modelValues.push(values[0]);
          }

          for (let i = 0; i < res.data.models.length; i++) {
            var sstatus = modelNames[i].includes(m);

            if (sstatus === true) {
              var nname = Object.keys(res.data.models[i]);
              var vvalues = Object.values(res.data.models[i]);
              carNames.push(nname[0]);
              carValues.push(vvalues[0]);
            }
          }

          var mymy = {
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: carNames,
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
                data: carValues,
              },
            ],
          };

          this.$router.push({
            name: "Models",
            params: {
              chartdata: mymy,
              options: {
                borderWidth: "10px",
                responsive: true,
                hoverBackgroundColor: "red",
                hoverBorderWidth: "10px",
              },
              make: m
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
@import "../styles/Analytics.css";
@import "../styles/Hello.css";
</style>