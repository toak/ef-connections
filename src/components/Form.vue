<template>
  <div class="form">Test</div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      locations: [],
      values: []
    };
  },
  created() {
    this.$http
      .get("https://lernen.toak.de/api/locations")
      .then(function(response) {
        this.locations = response.data;
      });
  }
};
</script>

<style scoped>
</style>
