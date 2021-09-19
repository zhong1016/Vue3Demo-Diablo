<template lang="">
  <header class="container">
    <nav class="row">
      <div class="col-3 col-lg-2 logo">
        <!-- <router-link ></router-link> -->
        <a class="d-flex justify-content-center" style="height: 90px; margin-top: 6px" href="/Vue3Demo-Diablo/"><img
            class="w-100" src="../assets/APE.svg" alt="" /></a>
      </div>
      <div class="col-lg-10 col-9 d-lg-flex justify-content-center">
        <ul class="d-lg-flex d-none">
          <router-link to="/Vue3Demo-Diablo/ruen">
            <li>符文專區</li>
          </router-link>
          <!-- <router-link to="/Vue3Demo-Diablo/role">
            <li>角色養成</li>  
          </router-link> -->
          <a href="javascript:void(0)"><li>未來新增</li></a>
          <a href="javascript:void(0)"><li>未來新增</li></a>
          <a href="javascript:void(0)"><li>未來新增</li></a>
          <!-- <router-link ><li>符文列表</li></router-link> -->
        </ul>
        <input type="checkbox" name="menu-switcher" id="menu-switcher" v-model="check" />
        <label for="menu-switcher" class="hamburger d-flex d-lg-none">
          <div class="hamburger-line"></div>
        </label>
        <ul class="menu">
          <a href="/Vue3Demo-Diablo/ruen">
            <li>符文專區</li>
          </a>
          <!-- <router-link to="/Vue3Demo-Diablo/role">
            <li>角色養成</li>  
          </router-link> -->
          <a href="javascript:void(0)">
            <li>未來新增</li>
          </a>
          <a href="javascript:void(0)">
            <li>未來新增</li>
          </a>
          <a href="javascript:void(0)">
            <li>未來新增</li>
          </a>
          <a href="javascript:void(0)"><li @click="box">返回</li></a>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, reactive } from "vue";
let check = ref(false);

const box = () =>{
  check.value = false
}

</script>
<style scoped>
  header {
    border-bottom: 1px gray solid;
    position: relative;
  }

  nav {
    height: 100px;
    /* border: 2px solid red; */
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    align-items: center;
  }

  li {
    margin: 0 50px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .hamburger {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 25%;
    right: 2%;
    /* display: none; */
    cursor: pointer;
  }

  .hamburger-line {
    width: 40px;
    height: 4px;
    background-color: #ffffff;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 10px 0px #ffffff, 0px -10px 0px #ffffff;
  }

  .menu {
    background-color: #12161d;
    height: 85vh;
    width: 100%;
    position: absolute;
    top: 105%;
    left: 0;
    transform: translateX(-200%);
    transition: 0.5s;
    z-index: 100;
  }

  .menu>a>li {
    display: block;
    padding: 15px;
    margin: 0px 0px 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px gray solid;
  }

  #menu-switcher {
    display: none;
  }

  #menu-switcher:checked~.menu {
    transform: none;
  }
</style>