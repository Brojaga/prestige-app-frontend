<template>
  <div class="container">
    <navbar />
    <div class="main">
      <!-- <h1>
        HELLO THIS IS THE RANKINGS PAGE
      </h1>
      <ul>
        <li v-for="company in rankedCompanies" :key="company.ranking" class="list">
          {{ company.company }}
          {{ company.winrate }}
        </li>
      </ul> -->
    
      <template>
        <div class="center">
          <vs-table>

            <template #thead>
              <vs-tr>
                <vs-th>
                  Company
                </vs-th>
                <vs-th>
                  Win Rate
                </vs-th>
                <vs-th>
                  Rank
                </vs-th>
              </vs-tr>
            </template>

            <template #tbody>
              <vs-tr
                v-for="company in $vs.getPage(rankedCompanies, page, max)" :key="company.ranking"
              >
                
                <vs-td>
                  {{ company.company }}
                </vs-td>
                <vs-td>
                  {{ company.winrate }}
                </vs-td>
                <vs-td>
                  {{ company.rank }}
                </vs-td>
              </vs-tr>
            </template>

            <template #footer>
              <vs-pagination v-model="page" :length="$vs.getLength(rankedCompanies, max)" />
            </template>

          </vs-table>
        </div>
      </template>
    
    </div>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import axios from 'axios'

export default {

  async mounted() {
    try {
      const res = await axios.get('https://jlql7x0v0i.execute-api.us-west-2.amazonaws.com/staging/rankings')
      this.rankedCompanies = res.data;
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    navbar
  },
  data:() => ({
    page: 1,
    max: 5,
    rankedCompanies: []
  })
}
</script>

<style>
.list {
  list-style: none;
}
</style>