  <template>
    <div class="center examplex">
      <vs-navbar color="#7d33ff" text-white square center-collapsed>
        <template #left>
        <vs-navbar-item  id="matchup" to="/">
          Matchup
        </vs-navbar-item>
        <vs-navbar-item  id="rankings" to="/rankingsPage">
          Rankings
        </vs-navbar-item>
        <vs-navbar-item  id="about" to="/about">
          About
        </vs-navbar-item>
        </template>
      </vs-navbar>
    </div>
  </template>


<script>
export default {
    
}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
</style>