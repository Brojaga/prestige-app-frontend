<template>
  <div id="center grid">
    <vs-card>
      <template #title>
        <h3>{{ companyName }}</h3>
      </template>
      <template #img>
        <div style="width: 180px; height: 180px; position: relative;">
          <img class="card-img" :src="image" alt="" />
        </div>
      </template>
      <template #text>
        <p></p>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  props: {
    companyName: {
      type: String
    },
    image: {
      type: String
    }
  },
  data: () => ({
    posts: [],
    active: 0
  })
};
</script>

<style>
.card-img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
