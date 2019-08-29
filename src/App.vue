<template>
  <div id="app">
    <h1>Formular</h1>
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
