<template>
  <div class="analytics">
    <div class="content">
      <div class="ntitle">Analytics</div>
      <div class="n-subtitle">
        Vehicle Stats
      </div>

      <div class="ntab">
        <div class="table">
          <div>Car Make</div>
          <div>Owners</div>
        </div>

        <div v-for="(make, key, i) in makes" :key="i" class="ndata">
          <div>{{ key }}</div>
          <div>{{ make }}</div>
        </div>
      </div>

      <div class="ntab">
        <div class="table">
          <div>Make & model</div>
          <div>Owners</div>
        </div>

        <div v-for="(model, key, i) in models" :key="i" class="ndata">
          <div>{{ key }}</div>
          <div>{{ model }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async mounted(){
    await axios.get('https://peaceful-beyond-71732.herokuapp.com/analyzeList')
          .then((res) => {
            //console.log(res.data)
            this.makes = res.data.makesAverage[0]
            this.models = res.data.modelsAverage[0]

            console.log(this.makes)

            console.log(Object.entries(res.data.makesAverage[0]))
          })
          .catch((e) => {
            console.log(e)
          })
  },

  data(){
    return {
      makes: [],
      models: []
    }
  }
};
</script>

<style>
@import "../styles/Analytics.css";
@import "../styles/Hello.css";
</style>