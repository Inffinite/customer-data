<template>
  <div class="hello">
    <div v-if="thankyouMenu == true" class="welcome-wr">
      <div class="welcome">
        <div class="w-title">Thank You</div>
        <div class="w-subtitle">We appreciate it.</div>

        <div class="container">
          <button @click="go" class="welcome-btn">Perfect</button>
        </div>
      </div>
    </div>

    <div v-if="cant == true" class="welcome-wr">
      <div class="welcome">
        <div class="w-title">Hello</div>
        <div class="w-subtitle">Please key in your car details since it is not our list.</div>

        <div class="container">
          <button @click="cantRemove" class="welcome-btn">Okay</button>
        </div>
      </div>
    </div>

    <div v-if="dataMenu" class="datamenu-wr">
      <div class="menu-content">
        <div class="button-wr">
          <button @click="cantFind" class="notfound">Can't find mine</button>
        </div>
        <div class="datamenu">
          <div class="d-title">
            {{ dataMenuTitle }}
            <svg
              @click="closeMenu"
              class="closeIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            @click="addData(data)"
            v-for="(data, i) in info"
            :key="i"
            class="d-item"
          >
            {{ data }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="documented == true" class="content">
      <div @click="analyze" class="container">
        <img class="logo" src="../assets/g3157.png" alt="" />
      </div>
      <div class="container">
        <div class="h-title">Eagle Lights</div>
      </div>

      <div class="h-subtitle">Vehicle information</div>

      <div class="data">
        <div class="label">First Name</div>
        <div class="input-wr">
          <input
            v-model="fname"
            type="text"
            placeholder="Stephen"
            class="h-input"
          />
        </div>

        <div class="label">Second Name</div>
        <div class="input-wr">
          <input
            v-model="lname"
            type="text"
            placeholder="Lin"
            class="h-input"
          />
        </div>

        <div class="label">Phone Number</div>
        <div class="input-wr">
          <input
            v-model="phone"
            type="text"
            placeholder="254757690940"
            class="h-input"
          />
        </div>

        <div class="label">Email</div>
        <div class="input-wr">
          <input
            v-model="email"
            type="text"
            placeholder="eagle@gmail.com"
            class="h-input"
          />
        </div>

        <div class="label">Car Make</div>
        <div @click="menus('make')" class="container">
          <div class="cardata">
            <div v-if="make.length > 0">{{ make }}</div>
            <div v-if="make.length == 0"></div>
            <svg
              class="down-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div v-if="models.length > 0" class="label">Car Model</div>
        <div v-if="models.length > 0" @click="menus('model')" class="container">
          <div class="cardata">
            <div v-if="model.length > 0">{{ model }}</div>
            <div v-if="model.length == 0"></div>
            <svg
              class="down-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div class="label">Year of Manufacture</div>
        <div @click="menus('year')" class="container">
          <div class="cardata">
            <div v-if="year">{{ year }}</div>
            <div v-if="year.length == 0"></div>
            <svg
              class="down-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div class="container">
          <button @click="saveData" class="send">{{ sendText }}</button>
        </div>
      </div>
    </div>

    <div v-if="documented == false" class="content">
      <div @click="analyze" class="container">
        <img class="logo" src="../assets/g3157.png" alt="" />
      </div>
      <div class="container">
        <div class="h-title">Eagle Lights</div>
      </div>

      <div class="h-subtitle">Vehicle information</div>

      <div class="data">
        <div class="label">First Name</div>
        <div class="input-wr">
          <input
            v-model="fname"
            type="text"
            placeholder="Stephen"
            class="h-input"
          />
        </div>

        <div class="label">Second Name</div>
        <div class="input-wr">
          <input
            v-model="lname"
            type="text"
            placeholder="Lin"
            class="h-input"
          />
        </div>

        <div class="label">Phone Number</div>
        <div class="input-wr">
          <input
            v-model="number"
            type="text"
            placeholder="254757690940"
            class="h-input"
          />
        </div>

        <div class="label">Email</div>
        <div class="input-wr">
          <input
            v-model="email"
            type="text"
            placeholder="eagle@gmail.com"
            class="h-input"
          />
        </div>

        <div class="label">Car Make</div>
        <div class="input-wr">
          <input
            v-model="make"
            type="text"
            placeholder="Mercedes"
            class="h-input"
          />
        </div>

        <div class="label">Car Model</div>
        <div class="input-wr">
          <input
            v-model="model"
            type="text"
            placeholder="EQS"
            class="h-input"
          />
        </div>

        <div class="label">Year of Manufacture</div>
        <div @click="menus('year')" class="container">
          <div class="cardata">
            <div v-if="year">{{ year }}</div>
            <div v-if="year.length == 0"></div>
            <svg
              class="down-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div class="container">
          <button @click="saveData" class="send">{{ sendText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      cant: false,
      documented: true,
      thankyouMenu: false,
      welcomeMenu: true,
      sendLoading: false,
      sendText: "Save",
      dataMenuTitle: "",
      dataMenu: false,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      make: "",
      model: "",
      year: "",
      makes: [
        "Honda",
        "Isuzu",
        "Lexus",
        "Mazda",
        "Mitsubishi",
        "Nissan",
        "Subaru",
        "Suzuki",
        "Toyota",
      ],
      models: [],
      years: [],
      cars: [],
      info: [],
    };
  },

  async beforeCreate() {
    await axios
      .get("https://peaceful-beyond-71732.herokuapp.com/cars")
      .then(async (res) => {
        this.cars = res.data;

        await axios
          .get("https://peaceful-beyond-71732.herokuapp.com/getStats")
          .then((res) => {
            this.models = res.data.models;
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  },

  async mounted() {},

  methods: {
    proceed() {
      this.welcomeMenu = false;
    },

    cantFind() {
      this.cant = true
      this.documented = false;
      this.dataMenu = false;
      this.dataMenuTitle = "";
    },

    closeMenu(){
      this.dataMenu = false;
      this.dataMenuTitle = "";
    },

    go() {
      this.thankyouMenu = false;
    },

    async addData(content) {
      switch (this.dataMenuTitle) {
        case "Car Model":
          this.model = content;
          this.dataMenu = false;
          break;

        case "Car Make":
          this.make = content;
          this.dataMenu = false;

          axios
            .get(
              `https://peaceful-beyond-71732.herokuapp.com/pickModels?make=${content}`
            )
            .then((res) => {
              this.models = res.data;
            })
            .catch((e) => {
              console.log(e);
            });
          break;

        case "Year of Manufacture":
          this.year = content;
          this.dataMenu = false;
          break;

        default:
          break;
      }
    },

    async saveData() {
      if (this.documented == true) {
        this.sendText = "Loading";
        axios
          .post("https://peaceful-beyond-71732.herokuapp.com/addChosenCar", {
            make: this.make,
            model: this.model,
            year: this.year,
            fname: this.fname,
            lname: this.lname,
            phone: this.phone,
            email: this.email,
            documented: true,
          })
          .then(() => {
            this.sendText = "Save";
            this.welcomeMenu = false;
            this.thankyouMenu = true;
          })
          .catch((e) => {
            this.sendText = "Save";
            console.log(e);
          });
      } else {
        this.sendText = "Loading";
        axios
          .post("https://peaceful-beyond-71732.herokuapp.com/addChosenCar", {
            make: this.make,
            model: this.model,
            year: this.year,
            fname: this.fname,
            lname: this.lname,
            phone: this.phone,
            email: this.email,
            documented: false,
          })
          .then(() => {
            this.sendText = "Save";
            this.welcomeMenu = false;
            this.thankyouMenu = true;
          })
          .catch((e) => {
            this.sendText = "Save";
            console.log(e);
          });
      }
    },

    cantRemove(){
      this.cant = false
    },

    analyze(){
      this.$router.push({ name: 'Analytics' })
    },

    async menus(n) {
      console.log("menu");
      console.log(n);
      console.log(this.info.length);
      switch (n) {
        case "model":
          this.info = this.models;
          this.dataMenuTitle = "Car Model";
          this.dataMenu = true;
          break;

        case "make":
          this.info = this.makes;
          this.dataMenuTitle = "Car Make";
          this.dataMenu = true;
          break;

        case "year":
          for (let i = 1990; i < 2022; i++) {
            this.years.push(i);
          }
          this.info = this.years;
          this.dataMenuTitle = "Year of Manufacture";
          this.dataMenu = true;
          break;

        default:
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/Hello.css";
</style>
