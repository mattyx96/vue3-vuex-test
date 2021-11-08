<template>
  <div class="sidenav">
    <img alt="Vue logo" src="../assets/logo.png" width="100">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Drawer"
}
</script>

<style lang="scss" scoped>
@import "../styles/constants";

.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: $widthSidebar; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #aaaaaa; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
