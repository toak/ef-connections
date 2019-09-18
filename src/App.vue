<template>
  <div id="app">
    <center>
      <img src="eurofunk-logo.svg">
    </center>
    <h1>Deine Verbindung zu eurofunk Kollegen (m/w/d)</h1>
    <p>Personen an unterschiedlichen Standorten arbeiten für eurofunk und deren Services, Lösungen und Produkte. Jeder von uns ist geprägt von verschiedenen Werten, Kulturen, Gewohnheiten und Kommunikationswegen.</p>
    <p>
      Mit welchen Kollegen (m/w/d) arbeitest du außerhalb deines Bereichs / Standorts zusammen? (der eigene Standort/Bereich ist nicht wählbar!)
      Was ist dir dabei am wichtigsten? Das wollen wir visualisieren - dazu fülle bitte diese Formular aus - gerne auch mehrmals!
    </p>
    <h1>Your connection to eurofunk colleagues</h1>
    <p>People on different locations work for eurofunk and their Services, Solutions and Products. Each of us is influenced by different backgrunds, habbits and ways of communications.</p>
    <p>With whom do you work together outside of your division / location? What is most important for you? We want to visualize this - please fill this form.</p>
    <Form/>
  </div>
</template>

<script>
import Form from "./components/Form";
import DynamicForm from "vue-dynamic-form-component";
export default {
  name: "App",
  components: {
    Form,
    DynamicForm
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
