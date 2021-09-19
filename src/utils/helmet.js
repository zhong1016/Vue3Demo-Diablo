const helmet = () => {
    const helmet = [
        {
            name: "天底<br/>Nadir",
            socket:'需要 2 凹槽',
            ruenmix: "那夫 • 特爾",
            ruenmixen:['Nef (4) + ','Tir (3)'],
            level: 13,
            effect: `
            +50% 防禦強化<br/>
            +10 防禦<br/>
            +30 對飛射性武器防禦<br/>
            等級 13 魔影斗篷 ( 9 聚氣 )<br/>
            +2 法力在每殺死一名敵人之後取得<br/>
            +5 力量<br/>
            -33% 額外金錢從敵人身上取得<br/>
            -3 照亮範圍
            `,
        },
        {
            name: "知識 <br/>Lore",
            socket:'需要 2 凹槽',
            ruenmix: "歐特 • 索爾 ",
            ruenmixen:['Ort (9) + ','Sol (12)'],
            level: 27,
            effect: `
            +50% 防禦強化<br/>
            +10 防禦<br/>
            +30 對飛射性武器防禦<br/>
            等級 13 魔影斗篷 ( 9 聚氣 )<br/>
            +2 法力在每殺死一名敵人之後取得<br/>
            +5 力量<br/>
            -33% 額外金錢從敵人身上取得<br/>
            -3 照亮範圍
            `,
        },
        {
            name: "光輝 <br/>Radiance",
            socket:'需要 3 凹槽',
            ruenmix: "那夫 • 索爾 • 伊司",
            ruenmixen:['Nef (4) + ','Sol (12) + ','Ith (6)'],
            level: 27,
            effect: `
            +75% 防禦強化<br />
            +30 對飛射性武器防禦<br />
            +10 精力<br />
            +10 體力<br />
            15% 受損的生命轉移至法力<br />
            法術傷害減少 3<br />
            +33 法力<br />
            傷害減少 7<br />
            +5 照亮範圍
            `,
        },
        {
            name: "迪勒瑞姆 <br/>Delirium",
            socket:'需要 3 凹槽',
            ruenmix: "藍姆 • 伊司特 • 破",
            ruenmixen:['Lem (20) + ','Ist (24) + ','Io (16)'],
            level: 59,
            effect: `
            被擊中時有 1% 機會施展等級 50 迪勒瑞姆<br />
            被擊中時有 6% 機會施展等級 14 心靈爆震<br />
            被擊中時有 14% 機會施展等級 13 恐懼<br />
            擊中敵人時有 11% 機會施展等級 18 迷亂<br />
            +2 到所有技能<br />
            +261 防禦<br />
            +10 體力<br />
            50% 額外金幣從怪物身上取得<br />
            25% 更佳機會取得魔法裝備<br />
            等級 17 吸引 ( 60 聚氣 )
            `,
        },
        {
            ladder:"( 天梯專用 )",
            name: "夢境 <br/>Dream",
            socket:'需要 3 凹槽',
            ruenmix: "破 • 喬 • 普爾",
            ruenmixen:['Io (16) + ','Jah (31) + ','Pul (21)'],
            level: 61,
            effect: `
            被打 10% 機率產生 15 等的迷亂<br />
            等級 15 神聖衝擊靈氣賦予<br />
            +20-30% 再度快速攻擊 <span style="color:red">(變動)</span><br/>
            30%增強防禦<br />
            +150-220 防禦 <span style='color:red'>(變動)</span><br/>
            +10 體力<br />
            增加最大血量 5%<br />
            +0-61 法力 ( 依角色等級乘 0.625 )<br />
            所有抗性 +5 - 20 <span style="color:red">(變動)</span><br/>
            12-25% 更佳取得魔法裝備 <span style="color:red">(變動)</span>
            `,
        },
    ];
    return helmet;
};
export default helmet;