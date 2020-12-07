  <template>
    <div class="center examplex">
      <vs-navbar color="#7d33ff" text-white square center-collapsed v-model="active">
        <template #left>
        <vs-navbar-item :active="active == 'matchup'" id="matchup">
          Matchup
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'rankings'" id="rankings">
          <a href="/rankingsPage">Rankings</a>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'about'" id="about">
          About
        </vs-navbar-item>
        </template>
      </vs-navbar>
    </div>
  </template>


<script>
export default {
    data:() => ({
      active: 'matchup'
    })
}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
</style>