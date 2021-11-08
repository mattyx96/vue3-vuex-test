<template>
  <div v-if="isOpen" class="alert">
    <p>{{ message }}</p>
  </div>

  <router-view/>
</template>

<script>
/*import {useStore} from 'vuex';
import {computed} from 'vue';*/

// import {mapState} from "vuex";

export default {
  name: 'app',
  /*setup() {
    const store = useStore();
    const alertShow = computed(() => store.state.isOpen);
    const alertMessage = computed(() => store.state.message);
    return {alertShow, alertMessage}
  },*/
  /*computed:{
    ...mapState(['isOpen', 'message']),
  },*/
  computed: {
    isOpen() {
      return this.$store.state.isOpen;
    },
    message() {
      return this.$store.state.message;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.centered-wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.centered-item{

  align-items: center;
}

.alert {
  position: absolute;
  width: 100%;
  background-color: red;
  z-index: 999;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
