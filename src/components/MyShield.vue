<template lang="">
  <section class="container">
    <div class="row">
      <div class="col-12 col-lg-4">
        <h1 class="ruenh1">盾牌符文</h1>
      </div>
      <div
        class="
          col-lg-8 col-12
          d-flex
          align-items-center
          justify-content-center
          ruenrow
        "
      >
        <router-link to="/Vue3Demo-Diablo/ruen"
          ><button class="d2btn">符文<span>介紹</span></button></router-link
        >
        <router-link to="/Vue3Demo-Diablo/weapon"
          ><button class="d2btn">武器<span>符文</span></button></router-link
        >
        <router-link to="/Vue3Demo-Diablo/helmet"
          ><button class="d2btn">頭盔<span>符文</span></button></router-link
        >
        <router-link to="/Vue3Demo-Diablo/armor"
          ><button class="d2btn">盔甲<span>符文</span></button></router-link
        >
        <button class="d2btn" style="background-color: #797c85">
          盾牌<span>符文</span>
        </button>
      </div>
    </div>
    <table class="container">
      <tr class="ruentr">
        <th>裝備需求</th>
        <th>裝備效果</th>
      </tr>
      <tr
        v-for="(item, index) in shield"
        :key="index"
        style="font-size: 1.2rem"
      >
        <td class="armor-td col-4 col-lg-6">
          <span class="helmet-span" style="color: #cebc86; font-size: 2rem">
            <span v-html="item.name"></span> <br />
            {{ item.ladder }} </span
          ><br />
          <span style="color: #d49e43">
            {{ item.socket }} <br />
            {{ item.ruenmix }}
          </span>
          <br /><br />
          {{ item.ruenmixen[0] }}<span class="d-none d-lg-inline-flex"></span
          ><span style="height: 0" class="d-flex d-lg-none"><br /></span
          >{{ item.ruenmixen[1] }}<span class="d-none d-lg-inline-flex"></span
          ><span style="height: 0" class="d-flex d-lg-none"><br /></span
          >{{ item.ruenmixen[2]
          }}<span style="height: 0" class="d-flex d-lg-none"><br /></span
          >{{ item.ruenmixen[3] }}<span class="d-none d-lg-inline-flex"></span
          ><br />
          需求等级 : {{ item.level }}
        </td>
        <td
          class="col-8 col-lg-6"
          style="color: #4169e1"
          v-html="item.effect"
        ></td>
      </tr>
    </table>
  </section>
</template>
<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
const shield = reactive([]);
let i = 0;
axios
  .get("https://zhong1016.github.io/Vue3Demo-Diablo/assets/Shield.json")
  // .get("src/json/Shield.json")
  .then((res) => {
    let json = Object.keys(res.data);
    for (let i = 0; i < json.length; i++) {
      let json = {
        name: res.data[i].name,
        socket: res.data[i].socket,
        ruenmix: res.data[i].ruenmix,
        level: res.data[i].level,
        effect: res.data[i].effect,
        ladder: res.data[i].ladder,
        ruenmixen: [],
      };
      switch (Object.keys(res.data[i].ruenmixen).length) {
        case 2:
          json.ruenmixen.splice(
            1,
            shield.length,
            res.data[i].ruenmixen[0],
            res.data[i].ruenmixen[1]
          );
          break;
        case 3:
          json.ruenmixen.splice(
            1,
            shield.length,
            res.data[i].ruenmixen[0],
            res.data[i].ruenmixen[1],
            res.data[i].ruenmixen[2]
          );
          break;
        case 4:
          json.ruenmixen.splice(
            1,
            shield.length,
            res.data[i].ruenmixen[0],
            res.data[i].ruenmixen[1],
            res.data[i].ruenmixen[2],
            res.data[i].ruenmixen[3]
          );
          break;
      }
      shield.push(json);
    }
    // console.log(shield);
  })
  .catch((err) => {
    console.error(err);
  });
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
  background-color: #292929;
  margin-top: 1%;
  /* height: 1200px; */
  border-radius: 30px;
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
  /* box-shadow: inset 0px 1px 0px 0px #ffffff; */
  /* background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%); */
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
