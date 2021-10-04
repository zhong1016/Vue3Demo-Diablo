function ruen() {
  const ruen = [
    {
      id: 1,
      name: "艾爾(El)",
      img: 'https://wiki.d.163.com/images/7/78/RuneEl.gif',
      level: 11,
      arms: "+50 攻擊準確率,+1 照亮範圍",
      equipment: "+15 防禦,+1 照亮範圍",
      drop: "50.06%",
      boss: "女伯爵",
      checkpoint: "普通",
    },
    {
      id: 2,
      name: "艾德(Eld)",
      img: 'http://wiki.d.163.com/images/3/38/RuneEld.gif',
      level: 11,
      arms: "+175% 對不死系生物傷害, +50 對不死系生物準確率",
      equipment: "15%減緩精力消耗 / +7%格擋率",
      drop: "35.71%",
      boss: "女伯爵",
      checkpoint: "普通",
    },
    {
      id: 3,
      name: "特爾(Tir)",
      img: 'https://wiki.d.163.com/images/c/c2/RuneTir.gif',
      level: 13,
      arms: "+2點法力在每殺死一名敵人之後取得",
      equipment: "+2點法力在每殺死一名敵人之後取得",
      drop: "25.20%",
      boss: "女伯爵",
      checkpoint: "普通",
    },
    {
      id: 4,
      name: "那夫(Nef)",
      img: 'https://wiki.d.163.com/images/b/bc/RuneNef.gif',
      level: 13,
      arms: '擊退',
      equipment:'+30 對飛射性武器防禦',
      drop: "17.32%",
      boss: "女伯爵",
      checkpoint: "普通",
    },
    {
      id: 5,
      name: "愛斯(Eth)",
      img: 'https://wiki.d.163.com/images/a/a2/RuneEth.gif',
      level: 15,
      arms: "-25%目標防禦力",
      equipment: "法力重生+15%",
      drop: "18.13%",
      boss: "女伯爵",
      checkpoint: "普通",
    },
    {
      id: 6,
      name: "伊司(Ith)",
      img: 'https://wiki.d.163.com/images/b/b6/RuneIth.gif',
      level: 15,
      arms: "+9 最大傷害值",
      equipment: "15% 受損的生命轉移至法力",
      drop: "12.36%",
      boss: "女伯爵",
      checkpoint: "普通",
    },
    {
      id: 7,
      name: "塔爾(Tal)",
      img: 'https://wiki.d.163.com/images/c/c3/RuneTal.gif',
      level: 17,
      arms: "+75毒素傷害,持續5秒",
      equipment: "+30%毒素抵抗 / +35%毒素抗性(盾)",
      drop: "18.28%",
      boss: "女伯爵",
      checkpoint: "普通",
    },
    {
      id: 8,
      name: "拉爾(Ral)",
      img: 'http://wiki.d.163.com/images/4/4d/RuneRal.gif',
      level: 19,
      arms: "+2點法力在每殺死一名敵人之後取得",
      equipment: "+2點法力在每殺死一名敵人之後取得",
      drop: "25.20%",
      boss: "女伯爵",
      checkpoint: "普通",
    },
    {
      id: 9,
      name: "歐特(Ort)",
      img: 'https://wiki.d.163.com/images/c/c2/RuneTir.gif',
      level: 21,
      arms: "增加1-50閃電傷害",
      equipment: "+30%閃電抵抗 / +35%閃電抗性(盾)",
      drop: "10.87%",
      boss: "女伯爵",
      checkpoint: "惡夢",
    },
    {
      id: 10,
      name: "書爾(Thul)",
      img: 'https://wiki.d.163.com/images/b/b3/RuneThul.gif',
      level: 23,
      arms: "增加3-14冰冷傷害,凍結目標3秒",
      equipment: "+30%冰冷抵抗 / +35%冰冷抗性(盾)",
      drop: "10.37%",
      boss: "女伯爵",
      checkpoint: "惡夢",
    },
    {
      id: 11,
      name: "安姆(Amn)",
      img: 'https://wiki.d.163.com/images/c/c2/RuneTir.gif',
      level: 25,
      arms: "7% 偷取生命",
      equipment: "攻擊者受到傷害14點",
      drop: "6.73%",
      boss: "女伯爵",
      checkpoint: "惡夢",
    },
    {
      id: 12,
      name: "索爾(Sol)",
      img: 'https://wiki.d.163.com/images/3/38/RuneSol.gif',
      level: 13,
      arms: "+9 最小傷害值",
      equipment: "減少傷害7點",
      drop: "4.53%",
      boss: "女伯爵",
      checkpoint: "惡夢",
    },
    {
      id: 13,
      name: '夏(Shael)',
      img: 'https://wiki.d.163.com/images/7/73/RuneShae.gif',
      level: 29,
      arms: '20% 增加攻擊速度',
      equipment: '20%快速再度攻擊、再度格擋',
      drop: "3.59%",
      boss: "女伯爵",
      checkpoint: "惡夢",
    },
    {
      id: 14,
      name: "多爾(Dol)",
      img: 'https://wiki.d.163.com/images/1/17/RuneDol.gif',
      level: 31,
      arms: "成功擊中有25%機率使怪物逃跑",
      equipment: "恢復生命+7",
      drop: "2.41%",
      boss: "女伯爵",
      checkpoint: "惡夢",
    },
    {
      id: 15,
      name: "海爾(Hel)",
      img: 'https://wiki.d.163.com/images/0/0b/RuneHel.gif',
      level: '-',
      arms: "需求-20%",
      equipment: "需求-15%",
      drop: "1.86%",
      boss: "女伯爵",
      checkpoint: "惡夢",
    },
    {
      id: 16,
      name: "破(Io)",
      img: 'https://wiki.d.163.com/images/0/0b/RuneHel.gif',
      level: 35,
      arms: "+10 體力",
      equipment: "+10 體力",
      drop: "1.24%",
      boss: "女伯爵",
      checkpoint: "惡夢",
    },
    {
      id: 17,
      name: "盧姆(Lum)",
      img: 'https://wiki.d.163.com/images/5/56/RuneLum.gif',
      level: 37,
      arms: "+10 精力",
      equipment: "+10 精力",
      drop: "0.93%",
      boss: "女伯爵",
      checkpoint: "地獄",
    },
    {
      id: 18,
      name: "科(Ko)",
      img: 'https://wiki.d.163.com/images/5/5e/RuneKo.gif',
      level: 39,
      arms: "+10 敏捷",
      equipment: "+10 敏捷",
      drop: "0.62%",
      boss: "女伯爵",
      checkpoint: "地獄",
    },
    {
      id: 19,
      name: "法爾(Fal)",
      img: 'https://wiki.d.163.com/images/a/a4/RuneFal.gif',
      level: 41,
      arms: "+10 力量",
      equipment: "+10 力量",
      drop: "0.47%",
      boss: "女伯爵",
      checkpoint: "地獄",
    },
    {
      id: 20,
      name: "藍姆(Lem)",
      img: 'https://wiki.d.163.com/images/f/ff/RuneLem.gif',
      level: 43,
      arms: "75% 額外金錢從怪物身上取得",
      equipment: "50% 額外金錢從怪物身上取得",
      drop: "0.31%",
      boss: "女伯爵",
      checkpoint: "地獄",
    },
    {
      id: 21,
      name: "普爾(Pul)",
      img: 'https://wiki.d.163.com/images/c/c3/RunePul.gif',
      level: 45,
      arms: "+75% 對惡魔系怪物傷害,+100對惡魔系怪物準確率",
      equipment: "+30% 增加防禦",
      drop: "0.24%",
      boss: "女伯爵",
      checkpoint: "地獄",
    },
    {
      id: 22,
      name: "烏姆(Um)",
      img: 'https://wiki.d.163.com/images/9/96/RuneUm.gif',
      level: 47,
      arms: "25% 撕裂傷口機會",
      equipment: "全面抗性+15% / 全面抗性+22%",
      drop: "0.16%",
      boss: "女伯爵",
      checkpoint: "地獄",
    },
    {
      id: 23,
      name: "馬爾(Mal)",
      img: 'https://wiki.d.163.com/images/a/a1/RuneMal.gif',
      level: 49,
      arms: "防止怪物治療",
      equipment: "法術傷害減少7",
      drop: "0.16%",
      boss: "女伯爵",
      checkpoint: "地獄",
    },
    {
      id: 24,
      name: "伊斯特(Ist)",
      img: 'https://wiki.d.163.com/images/3/3e/RuneIst.gif',
      level: 51,
      arms: "30%更佳機率取得魔法物品",
      equipment: "25% 更佳機率取得魔法物品",
      drop: "0.09%",
      boss: "女伯爵",
      checkpoint: "地獄",
    },
    {
      id: 25,
      name: "古爾(Gul)",
      img: 'https://wiki.d.163.com/images/3/37/RuneGul.gif',
      level: 53,
      arms: "20% 額外的攻擊準確率加成",
      equipment: "+5% 最大毒素抗性",
      drop: "0.001%",
      boss: "安達利爾",
      checkpoint: "地獄",
    },
    {
      id: 26,
      name: "伐克斯(Vex)",
      img: 'https://wiki.d.163.com/images/9/90/RuneVex.gif',
      level: 55,
      arms: "7% 偷取法力",
      equipment: "+5% 最大火焰抗性",
      drop: "0.0008%",
      boss: "安達利爾",
      checkpoint: "地獄",
    },
    {
      id: 27,
      name: "歐姆(Ohm)",
      img: 'https://wiki.d.163.com/images/4/48/RuneOhm.gif',
      level: 57,
      arms: "+50% 增強傷害",
      equipment: "+5% 最大冰冷抗性",
      drop: "0.0011%",
      boss: "安達利爾",
      checkpoint: "地獄",
    },
    {
      id: 28,
      name: "羅(Lo)",
      img: 'https://wiki.d.163.com/images/7/78/RuneLo.gif',
      level: 57,
      arms: "20% 致命一擊機率",
      equipment: "+5% 最大閃電抗性",
      drop: "0.0004%",
      boss: "安達利爾",
      checkpoint: "地獄",
    },
    {
      id: 29,
      name: "歐姆(Ohm)",
      img: 'https://wiki.d.163.com/images/7/78/RuneSur.gif',
      level: 59,
      arms: "+50% 增強傷害",
      equipment: "+5% 最大冰冷抗性",
      drop: "0.0004%",
      boss: "崔凡客議員",
      checkpoint: "地獄",
    },
    {
      id: 30,
      name: "貝(Ber)",
      img: 'https://wiki.d.163.com/images/9/91/RuneBer.gif',
      level: 63,
      arms: "20% 造成壓碎性打擊機率",
      equipment: "傷害減少8%",
      drop: "0.0002%",
      boss: "崔凡客議員",
      checkpoint: "地獄",
    },
    {
      id: 31,
      name: "喬(Jah)",
      img: 'https://wiki.d.163.com/images/c/c8/RuneJo.gif',
      level: 65,
      arms: "忽視目標防禦",
      equipment: "+5%生命上限 / +50 生命(盾)",
      drop: "0.0002%",
      boss: "崔凡客議員",
      checkpoint: "地獄",
    },
    {
      id: 32,
      name: "查姆(Cham)",
      img: 'https://wiki.d.163.com/images/f/fe/RuneCham.gif',
      level: 67,
      arms: "凍結目標",
      equipment: "無法冰凍",
      drop: "0.0001%",
      boss: "崔凡客議員",
      checkpoint: "地獄",
    },
    {
      id: 33,
      name: "薩德(Zod)",
      img: 'https://wiki.d.163.com/images/9/92/RuneZod.gif',
      level: 69,
      arms: "無法破壞",
      equipment: "無法破壞",
      drop: "0.00003%",
      boss: "崔凡客議員",
      checkpoint: "地獄",
    },
  ];
  return ruen;
}

function find_ruen(id) {
  return ruen().find((el) => el.id === id);
}

function ruenmixen_to_ruens(ruenmixen) {
  return ruenmixen
    .join(' ')
    .match(/\d+/g)
    .map((num) => find_ruen(Number(num)));
}

export default ruen;
export {
  find_ruen,
  ruenmixen_to_ruens,
};