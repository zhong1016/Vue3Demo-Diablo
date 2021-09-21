<template lang="">
    <section class="container">
        <div class="row">
            <div class="role col-lg-2 col-12 d-flex align-items-center">
                <ul class="d-lg-block d-none" style="height: 75%; padding-left: 0; margin-bottom: 0; width: 100%">
                    <li class="d-lg-flex d-none" v-for="(item, index) in sevenrole" :key="index" @click="btn(index)">
                        <button style="margin: 4px auto" :class="bgbtn(index)">
                            {{ item }}
                        </button>
                    </li>
                </ul>
                <ul class="roleul d-lg-none d-block" style="padding-left: 0; margin-bottom: 0; width: 100%">
                    <div class="col-12 d-flex justify-content-center">
                        <li @click="btn(0)">
                            <button :class="bgbtn(0)" style="margin: 0 10px">死靈法師</button>
                        </li>
                        <li @click="btn(1)">
                            <button :class="bgbtn(1)" style="margin: 0 10px">亞馬遜</button>
                        </li>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <li @click="btn(2)">
                            <button :class="bgbtn(2)" style="margin: 0 10px">聖騎士</button>
                        </li>
                        <li @click="btn(3)">
                            <button :class="bgbtn(3)" style="margin: 0 10px">野蠻人</button>
                        </li>
                    </div>
                    <div class="col-12 d-flex justify-content-center" style="margin-bottom: 1%">
                        <li @click="btn(4)">
                            <button :class="bgbtn(4)" style="margin: 0 10px">德魯依</button>
                        </li>
                        <li @click="btn(5)">
                            <button :class="bgbtn(5)" style="margin: 0 10px">法師</button>
                        </li>
                        <li @click="btn(6)">
                            <button :class="bgbtn(6)" style="margin: 0 10px">刺客</button>
                        </li>
                    </div>
                </ul>
            </div>
            <div class="link col-12 col-lg-10 d-flex align-items-center">
                <div style="height: 70%; width: 100%" v-for="(item, index) in role" :key="index"
                    :class="{ linkbl: item.bl }">
                    <h1 style="color: aquamarine; text-align: center">文章攻略</h1>
                    <div v-html="item.article"></div>
                    <br /><br />
                    <div style="width: 100%; border: 1px solid gray"></div>
                    <h1 class="linkh1" style="color: aquamarine; text-align: center">
                        影片攻略
                    </h1>
                    <div v-html="item.video"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref, reactive } from "vue";
    import rolejs from "../utils/role.js";
    const sevenrole = [
        "死靈法師",
        "亞馬遜",
        "聖騎士",
        "野蠻人",
        "德魯依",
        "法師",
        "刺客",
    ];
    const role = reactive(rolejs());
    let count = ref(0);
    let bl = ref(true);
    let upHere = true;
    const btn = (index) => {
        count.value = index;
        for (let i = 0; i < role.length; i++) {
            if (index === i) {
                role[index].bl = false;
            } else {
                role[i].bl = true;
            }
        }
    };

    const bgbtn = (index) => {
        if (index === count.value) {
            return { bgbtn: bl };
        }
    };
</script>
<style scoped>
    * {
        font-weight: bold;
    }

    section {
        margin-top: 1%;
    }

    .role {
        border-right: 2px gray solid;
    }

    .link {
        height: 700px;
    }

    button {
        font-size: 1.8rem;
        font-family: sans-serif, "Kosugi Maru";
        background-color: rgba(240, 248, 255, 0.9);
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        display: inline-block;
        cursor: pointer;
        color: black;
        font-weight: bold;
        padding: 2px 8px;
        text-decoration: none;
    }

    button:hover {
        background-color: #797c85;
    }

    li {
        margin-top: 7%;
    }

    .bgbtn {
        background-color: #797c85;
    }

    .linkbl {
        display: none;
    }

    .linkh1 {
        margin-top: 2%;
    }
</style>