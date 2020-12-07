<template>
  <div id="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="6">
          <vs-button
            gradient
            :active="active == 1"
            @click="active = 1"
            size="xl"
          >
            {{ name }}
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    } 
  }
}
</script>

<style>

</style>