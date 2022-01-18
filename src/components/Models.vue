<template>
  <div class="analytics">
    <vue-html2pdf
      style="overflow-x: hidden"
      :show-layout="true"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="Details"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <div>
          <div class="ntitle">Car Model Data</div>
          <!-- <div class="n-subtitle">Vehicle Stats</div> -->
          <div class="chart-wr-wr">
            <div class="chart-wr">
              <ModelChart :chartdata="chartdata" :options="options" />
            </div>
          </div>

          <div class="make-pill-wr-wr">
            <button @click="generateReport()" class="make-pill">
              Download Pdf
            </button>

            <div class="make-pill-wr-wr">
              <button @click="back()" class="make-pill">Back</button>
            </div>
          </div>

          <div class="usertitle">Clients under this model</div>

          <div class="users-wr">
            <div class="userstyle" style="width: 100%">
              <div v-for="(car, i) in cars" :key="i" class="user">
                <div class="userlabel">Name</div>
                <div class="uservalue">{{ car.fname }} {{ car.lname }}</div>

                <div class="userlabel">Email</div>
                <div class="uservalue">{{ car.email }}</div>

                <div class="userlabel">Phone</div>
                <div class="uservalue">{{ car.phone }}</div>

                <div class="userlabel">Model</div>
                <div class="uservalue">{{ car.make }} {{ car.model }}</div>

                <div class="userlabel">Year</div>
                <div class="uservalue">{{ car.year }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import ModelChart from "./ModelChart.vue";
import axios from "axios";
import VueHtml2pdf from "vue-html2pdf";
// import jsPDF from 'jspdf'

export default {
  data() {
    return {
      cars: [],
    };
  },

  async mounted() {
    axios
      .get(
        `https://peaceful-beyond-71732.herokuapp.com/chosenCars?make=${this.make}`
      )
      .then((res) => {
        this.cars = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  components: {
    VueHtml2pdf,
    ModelChart,
  },

  methods: {
    back() {
      this.$router.push({ name: "Makeo" });
    },

    async getPdf() {
      // let pdfName = "test";
      // var doc = new jsPDF();
      // doc.text("Hello World", 10, 10);
      // doc.save(pdfName + ".pdf");
    },

    generateReport() {
      this.$refs.html2Pdf.generatePdf();
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
    make: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
@import "../styles/Analytics.css";
</style>