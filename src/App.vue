<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="less">
html,
body {
  scroll-behavior: smooth;
  background: #000;
}
#app {
  > svg {
    text-align: center;
    display: block;
    margin: 0 auto;
    margin-top: 80vw;
  }
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
