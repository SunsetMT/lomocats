<template>
  <TestComponent msg="Welcome to Your Vue.js App"/>
  foasfpajfojaeojj
  <PageWrapper/>
</template>

<script>
import TestComponent from './components/TestComponent'
import PageWrapper from "@/components/PageWrapper";

export default {
  name: 'App',
  components: {
    TestComponent,
    PageWrapper
  }
}
</script>

<style>
/*noinspection ALL*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
