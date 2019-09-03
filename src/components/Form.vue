<template>
  <dynamic-form ref="dynamic-form" v-model="data" :descriptors="descriptors">
    <template slot="operations">
      <el-button type="primary" @click="validate">Absenden / Submit</el-button>
    </template>
  </dynamic-form>
</template>

<script>
export default {
  data() {
    return {
      descriptors: {
        loc_from: {
          type: "enum",
          label: "Ich gehöre zu / I belong to:",
          placeholder: "Bitte wählen",
          required: true,
          message:
            "Du musst angeben, zu welchem Bereich du an welchem Standort gehörst!",
          enum: [],
          options: []
        },
        loc_to: {
          type: "enum",
          label:
            "Am öftesten arbeite ich mit (außer des eigenen Bereichs/Standorts):",
          placeholder: "Bitte wählen",
          required: true,
          message:
            "Du musst angeben, mit wem du außerhalb deines Bereichs/Standorts am meisten arbeitest!",
          enum: [],
          options: []
        },
        myvalue: {
          type: "enum",
          label:
            "Dabei ist mir folgendes am Wichtigsten / What is most important for you:",
          placeholder: "Bitte wählen",
          required: true,
          message: "Du musst etwas auswählen!",
          enum: [],
          options: []
        }
      },
      data: {}
    };
  },
  methods: {
    async validate() {
      const valid = await this.$refs["dynamic-form"].validate();
      if (valid === true) {
        this.$http
          .post("https://lernen.toak.de/api/send", this.data)
          .then(function(response) {
            if (response.body.success === "1") {
              window.alert(
                "Danke / Thanks!\n\nYou will be forwarded to the results now."
              );
              window.location = "https://ef-connections.now.sh/map.html";
            } else {
              window.alert(`${response.body.message}`);
            }
          });
      } else {
        window.alert("Fehler");
      }
    }
  },
  created() {
    this.$http
      .get("https://lernen.toak.de/api/locations")
      .then(function(response) {
        this.descriptors.loc_from.options = response.data;
      });
    this.$http
      .get("https://lernen.toak.de/api/locations/enum")
      .then(function(response) {
        this.descriptors.loc_from.enum = response.data;
      });
    this.$http
      .get("https://lernen.toak.de/api/locations")
      .then(function(response) {
        this.descriptors.loc_to.options = response.data;
      });
    this.$http
      .get("https://lernen.toak.de/api/locations/enum")
      .then(function(response) {
        this.descriptors.loc_to.enum = response.data;
      });
    this.$http
      .get("https://lernen.toak.de/api/values")
      .then(function(response) {
        this.descriptors.myvalue.options = response.data;
      });
    this.$http
      .get("https://lernen.toak.de/api/values/enum")
      .then(function(response) {
        this.descriptors.myvalue.enum = response.data;
      });
  }
};
</script>