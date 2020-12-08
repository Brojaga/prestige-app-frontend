<template>
  <div class="container">
    <navbar fixed/>
    <div class="grid">
      <vs-row justify="center" id="static">
        <vs-col>
          <h1>Which do you think is more prestigious?</h1>
        </vs-col>
      </vs-row>
      <vs-row justify="center">
        <vs-col v-for=" index in 2" :key="index" w="4" id="card" @click="sendResults()">
          <card id="matchup" v-if="index === 1" :companyName="matchup.company1" :image="matchup.image1"></card>
          <card id="matchup" v-if="index === 2" :companyName="matchup.company2" :image="matchup.image2"></card>
        </vs-col>
      </vs-row>
      <vs-row justify="center" id="static">
        <vs-col offset="4">
          <vs-button
            id="matcher"
            gradient
            :active="active == 1" 
            @click="beginMatchup(); active = 1;"
            size="xl"
          >
            Get Matchup
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import card from '~/components/card.vue'
import axios from 'axios'

export default {
  components: {
    navbar,
    card
  },
  data:() => ({
        active: 0,
        matchup: {
          winner: 0
        }
      }),
  methods: {
    async beginMatchup() {
      try {
        const res = await axios.get('https://jlql7x0v0i.execute-api.us-west-2.amazonaws.com/staging/matchup')
        this.matchup = res.data;
      } catch (error) {
        console.log(error)
      }
    },
    async sendResults() {
      const results = { verification: matchup.verification, winner: matchup.winner };
      try {
        const response = await axios.post("https://jlql7x0v0i.execute-api.us-west-2.amazonaws.com/staging/matchup", results);
        console.log(response)
        beginMatchup();
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
#card {
  padding: 5px;
}
#static {
  padding: 30px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  margin: 10px;
}
</style>
