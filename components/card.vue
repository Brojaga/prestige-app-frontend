<template>
  <div id="center grid">
      <vs-card>
    <template #title>
      <h3>{{ companyName }}</h3>
    </template>
    <template #img>
      <img :src=image alt="">
    </template>
    <template #text>
      <p>
      </p>
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
    }},
  data:() => ({
        posts: [],
        active: 0,
      }) 
}
</script>

<style>

</style>