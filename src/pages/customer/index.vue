<template>
  <Drawer>
    <ul>
      <li>
        <router-link to="/customer/dashboard">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/customer/settings">Settings</router-link>
      </li>
      <li style="margin-top: 40px">
        <router-link to="/">Quit</router-link>
      </li>
    </ul>
  </Drawer>
  <Main>
    <router-view></router-view>
  </Main>
</template>

<script>
import Main from '../../components/Main.vue'
import Drawer from "../../components/Drawer";

export default {
  name: 'index',
  components: {
    Drawer,
    Main
  }
}
</script>

<style lang="scss">

</style>
