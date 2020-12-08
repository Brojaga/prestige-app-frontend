// import dependency to handle HTTP request to our back end
import axios from 'axios'
//to handle state
const state = {
  companies: []
}

//to handle state
const getters = {
  getCompanies: state => state.companies
}

//to handle actions
const actions = {
  async getCompanies({commit}) {
    console.log("You have arrived!")
    let data = await axios.get('https://jlql7x0v0i.execute-api.us-west-2.amazonaws.com/staging/rankings');
    commit('SET_COMPANIES', data)
  }
}

//to handle mutations
const mutations = {
  SET_COMPANIES(state, companies) {
    state.companies = companies
  }
}


