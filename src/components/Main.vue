<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/constants.scss";

.main {
  margin-left: $widthSidebar; /* Same as the width of the sidebar */
  padding: 0px 10px;
}
</style>
