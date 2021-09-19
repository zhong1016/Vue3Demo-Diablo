<template>
  <MyHeader></MyHeader>
  <router-view></router-view>
  <MyFooter></MyFooter>
</template>
<script setup>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";

</script>
<style>
* {
  font-family: sans-serif, "Kosugi Maru";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-color: #0E202C; */
  /* background-color: #0A0200; */
}
body,
html {
  background-color: #1c1c1c;
}
a {
  text-decoration: none;
  color: #a58546;
}

ul {
  list-style: none;
}

@media (max-width: 991.98px) {
  section {
    margin-bottom: 6%;
  }
  .ruenh1 {
    padding: 10px 10px !important;
  }
  .d2btn {
    padding: 6px 8px !important;
    margin: 0px 6px !important;
  }
  .d2btn > span {
    display: none;
  }
  .ruenrow {
    margin-bottom: 1% !important;
  }
  .armor-span {
    font-size: 1.2rem !important;
  }
  .armor-td {
    font-size: 1rem !important;
  }
  .helmet-span{
    font-size: 1.2rem !important;
  }
  .Enlight-span{
    font-size: 14px !important;
  }
}
</style>
