<template lang="">
    <section class="container d-flex justify-content-center">
        <div class="row d-flex justify-content-center">
            <div class="row news">
                <div class="col-12 d-flex justify-content-center">
                    <button class="d2btn" v-for="(item, index) in btn" :key="index" @click="newbtn(index)" :class="bgbtn(index)">
                        {{item}}
                    </button>
                </div>
            </div>
            <div style="color: rgb(180, 180, 180);height: 70%;" class="col-12 col-lg-8" v-if="newif">
                <h2>１．此網站為Vue.js製作練習</h2>
                <h2>２．文字圖片均參考網路資源</h2>
                <h2>３．如有您有希望新增的資料可給我意見!<br>(聯絡資訊請至底下)</h2>
                <br>
                <h2>參考網站：</h2>
                <br>
                <h4 class="col-12">
                    <a target="_blank" href="https://forum.gamer.com.tw/B.php?bsn=742">巴哈姆特</a><br><br>
                    <a target="_blank" href="http://iyazero.tw/Default.htm">易牙居</a><br><br>
                    <a target="_blank" href="http://wiki.d.163.com/index.php?title=%E9%A6%96%E9%A1%B5_%E6%9A%97%E9%BB%912">凱恩之角</a>
                </h4>
            </div>
            <div style="color:rgb(180,180,180);height: 70%;" class="col-12 col-lg-8" v-if="updateif">
                <h2>2021.09.22&emsp;|&emsp;<span style="height: 0" class="d-flex d-lg-none"><br /></span>新增角色養成、文章&影片攻略</h2>
                <h2>2021.09.20&emsp;|&emsp;<span style="height: 0" class="d-flex d-lg-none"><br /></span>新增符文介紹、符文組</h2>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive } from "vue";
let newif = ref(true);
let updateif = ref(false);
let bl = ref(true);
let count = ref(0);
const btn = ref(['公告區','更新區']);

const newbtn = function(index){
    switch (index) {
        case 0:
        newif.value = true;
        updateif.value = false;
        count.value = index;
            break;
        case 1:
        newif.value = false;
        updateif.value = true;
        count.value = index;
            break;
    }
}
const bgbtn = (index) =>{
    if(index === count.value){
        return {bgbtn:bl}
    }
}

</script>
<style scoped>
    *{
        border-radius: 30px;
        font-weight: bold;
    }
    section{
        height:690px;
        background-color: #292929;
        margin-top:1%;
    }

    .d2btn {
    font-family: sans-serif, "Kosugi Maru";
    margin: 0 32px;
    /* box-shadow: inset 0px 1px 0px 0px #ffffff; */
    /* background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%); */
    background-color: rgba(240, 248, 255, 0.9);
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    display: inline-block;
    cursor: pointer;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    padding: 6px 8px;
    text-decoration: none;
  }
  .d2btn:hover {
    background-color: #797c85;
  }
  .news{
    height: 50px;
    margin-top: 100px;
  }
  .bgbtn{
      background-color: #797c85;
  }
</style>