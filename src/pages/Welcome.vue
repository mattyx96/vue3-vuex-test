<template>
  <va-navbar color="#aaaaaa">
  <template #left>
    <va-navbar-item>Example</va-navbar-item>
  </template>
  <template #right>
    <router-link to="/login">Login</router-link>
  </template>
</va-navbar>
  <p class="centered-wrapper">WELCOME</p>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>

</style>
