<template>
  <div id="app">
    <h1>Deine Verbindung / Your Connection</h1>
    <p>Personen an unterschiedlichen Standorten arbeiten für Eurofunk und deren Services, Lösungen und Produkte.
    Es gibt verschiedene Hintergründe, Gewohnheiten und Kommunikationswege.
    Mit welchen Kollegen arbeitest du außerhalb deines Bereichs / Standorts zusammen?
    Was ist dir dabei am wichtigsten (<a href="https://confluence.eurofunk.com/display/EOCSART/About+us" target="_blank">Finde heraus warum diese Dinge für uns wichtig sind</a>)?
    Das wollen wir visualisieren - dazu fülle bitte diese Formular aus.
    </p>
    <p>People on different locations work for Eurofunk and their Services, Solutions and Products.
    There are different backgrunds, habbits and ways of communications.
    With whom do you work together outside of your division / location?
    What is most important for you? <a href="https://confluence.eurofunk.com/display/EOCSART/About+us" target="_blank">Find out why this is important for us</a>)?
    We want to visualize this - please fill this form.
    </p>
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
