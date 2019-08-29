<template>
  <div class="form">
    <h1>Bitte ausfüllen</h1>Ich gehöre zu:
    <select v-model="location_f.name" v-bind:value="location_f.id">
      <option selected="1" value>Bitte wählen</option>
      <option v-for="location in locations" :key="location.id">{{ location.name }}</option>
    </select>
    <br>Am öftesten arbeite ich mit:
    <select v-model="location_t.name" v-bind:value="location_t.id">
      <option selected="1" value>Bitte wählen</option>
      <option v-for="location in locations" :key="location.id">{{ location.name }}</option>
    </select>
    <br>Dabei ist mir folgendes am Wichtigsten:
    <select v-model="value.name" v-bind:value="value.id">
      <option selected="1" value>Bitte wählen</option>
      <option v-for="value in values" :key="value.id">{{ value.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      locations: [],
      location_f: [],
      location_t: [],
      values: [],
      value: []
    };
  },
  created() {
    this.$http
      .get("https://lernen.toak.de/api/locations")
      .then(function(response) {
        this.locations = response.data;
      });
    this.$http
      .get("https://lernen.toak.de/api/values")
      .then(function(response) {
        this.values = response.data;
      });
  }
};
</script>

<style scoped>
</style>
