<template>
  <section class="container">
    <div class="row">
      <div class="col-12 col-lg-4">
        <h1 class="ruenh1">符文介紹</h1>
      </div>
      <div class="
          col-lg-8 col-12
          d-flex
          align-items-center
          justify-content-center
          ruenrow
        ">
        <button style="background-color: #797c85" class="d2btn">
          符文<span>介紹</span>
        </button>
        <router-link to="/Vue3Demo-Diablo/weapon"><button class="d2btn">武器<span>符文</span></button></router-link>
        <router-link to="/Vue3Demo-Diablo/helmet"><button class="d2btn">頭盔<span>符文</span></button></router-link>
        <router-link to="/Vue3Demo-Diablo/armor"><button class="d2btn">盔甲<span>符文</span></button></router-link>
        <router-link to="/Vue3Demo-Diablo/shield"><button class="d2btn">盾牌<span>符文</span></button></router-link>
      </div>
    </div>
    <table class="container d-lg-table d-none" style="font-size: 18px;">
      <tr id="ruenth" style="color: wheat">
        <th>圖片</th>
        <th>編號</th>
        <th>名稱</th>
        <th>等級</th>
        <th>鑲在武器的效果</th>
        <th>鑲在裝備的效果</th>
        <th>掉落率</th>
        <th>BOSS</th>
        <th>存在難度</th>
      </tr>
      <tr class="ruentd" v-for="(item, index) in ruen" :key="index">
        <td style="background-color: black"><img :src="item.img" alt="" /></td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.level }}</td>
        <td>{{ item.arms }}</td>
        <td>{{ item.equipment }}</td>
        <td>{{ item.drop }}</td>
        <td>{{ item.boss }}</td>
        <td>{{ item.checkpoint }}</td>
      </tr>
    </table>
    <table class="container d-lg-none">
      <tr class="col-4" id="ruenth" style="color: wheat">
        <th class="col-5">符文簡介</th>
        <th class="col-7">符文效果</th>
      </tr>
      <tr class="ruentd" v-for="(item, index) in ruen" :key="index" style="font-size: 14px;">
        <td>
          <img :src="item.img" alt="" />
          <br>
          編號：{{ item.id }}
          <br>
          名稱：{{ item.name }}
          <br>
          等級：{{ item.level }}
          <br>
          掉落率：{{ item.drop }}
          <br>
          BOSS：{{ item.boss }}
          <br>
          存在難度：{{ item.checkpoint }}
        </td>
        <td >
          <br>
          鑲在武器的效果：
          <br>
          {{ item.arms }}
          <br><br>
          鑲在裝備的效果：
          <br>
          {{ item.equipment }}
        </td>
      </tr>
    </table>
    <!-- <button @click="btn">一個按鈕</button> -->
  </section>
</template>
<script setup>
  import { ref, reactive } from "vue";
  import ruenjs from "../utils/ruen.js";

  // console.log(window.innerWidth,window.innerHeight);

  const ruen = reactive(ruenjs());
</script>

<style scoped>
  * {
    border-radius: 30px;
  }

  body,
  html {
    background-color: #292929;
  }

  section {
    /* background-color: #423b2e; */
    background-color: #292929;
    margin-top: 1%;
    /* overflow: auto; */
  }

  h1 {
    color: aquamarine;
    background: none;
    text-align: center;
    padding: 20px 20px;
    margin-bottom: 0;
    font-weight: bold;
  }

  th,
  td {
    padding: 2px 6px;
    text-align: center;
    border: 2px grey solid;
  }

  table {
    color: rgba(245, 245, 245, 0.9);
    font-weight: bold;
  }

  .d2btn {
    font-family: sans-serif, "Kosugi Maru";
    margin: 0 16px;
    background-color: rgba(240, 248, 255, 0.9);
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    display: inline-block;
    cursor: pointer;
    color: black;
    font-size: 18px;
    font-weight: bold;
    padding: 6px 8px;
    text-decoration: none;
  }

  .d2btn:hover {
    background-color: #797c85;
  }
</style>