<template>
  <div class="container">
    <navbar fixed class="nbar"/>
    <div class="main">
    
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
                  {{ company.ranking }}
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
    max: 10,
    search: '',
    rankedCompanies: []
  })
}
</script>

<style>
.main {
  margin-top: 45px;
}
.nbar {
  padding-bottom: 40px;
}
</style>