const armor = () => {
    const armor = [
        {
            name: '隱蔽<br/>Stealth',
            socket: '需要 2 凹槽',
            ruenmix: '塔爾 • 愛斯',
            ruenmixen: ['Tal (7) + ', 'Eth (5)'],
            level: 17,
            effect: `
            法術傷害減少 3<br/>
            +6 敏捷<br/>
            +15 耐久上限<br/>
            毒素抗性 +30%<br/>
            法力重生 15%<br/>
            25% 高速跑步 / 行走<br/>
            25% 高速施法 / 快速再度攻擊
            `,
        },
        {
            name: '神話<br/>Myth',
            socket: '需要 3 凹槽',
            ruenmix: '海爾 • 安姆 • 那夫',
            ruenmixen: ['Hel (15) + ', 'Amn (11) + ', 'Nef (4)'],
            level: 25,
            effect: `
            被擊中時 3% 機會施展等級 1 狂嗥<br/>
            打擊時有 10% 機會施展等級 1 嘲弄<br/>
            +2 野蠻人技能<br/>
            +30 對飛射性防禦<br/>
            生命補滿 +10<br/>
            攻擊者受到傷害 14<br/>
            需求 -15%<br/>
            `,
        },
        {
            name: '和平 <br/>Peace',
            socket: '需要 3 凹槽',
            ruenmix: '夏 • 書爾 • 安姆',
            ruenmixen: ['Shael (13) + ', 'Thul (10) + ', 'Amn (11)'],
            level: 29,
            effect: `
            被擊中時 4% 機會施展等級 5 慢速箭<br/>
            打擊時有 2% 機會施展等級 15 女武神<br/>
            +2 亞馬遜技能<br/>
            +20% 快速再度攻擊<br/>
            +2致 致命攻擊<br/>
            抗寒 +30%<br/>
            攻擊者受到傷害 14<br/>
            `,
        },
        {
            name: '煙霧 <br/>Smoke',
            socket: '需要 2 凹槽',
            ruenmix: '那夫 • 盧姆',
            ruenmixen: ['Nef (4) + ', 'lum (17)'],
            level: 37,
            effect: `
            +75% 增加防禦<br/>
            +280 對飛射性武器防禦<br/>
            所有抗性+50%<br/>
            20% 快速再度攻擊<br/>
            等級 6 削弱 (18 聚氣)<br/>
            +10 精力<br/>
            -1 照亮範圍
            `,
        },
        {
            name: '獅子心 <br/>Lionheart',
            socket: '需要 3 凹槽',
            ruenmix: '海爾 • 盧姆 • 法爾',
            ruenmixen: ['Hel (15) + ', 'Lum (17) + ', 'Fal (19)'],
            level: 41,
            effect: `
            +20% 增強傷害<br/>
            需求 -15%<br/>
            +25 力量<br/>
            +10 精力<br/>
            +20 體力<br/>
            +15 敏捷<br/>
            +50 生命<br/>
            所有抗性+30%
            `,
        },
        {
            name: '財富 <br/>Wealth',
            socket: '需要 3 凹槽',
            ruenmix: '藍姆 • 科 • 特爾',
            ruenmixen: ['Lem (20) + ', 'Ko (18) + ', 'Tir (3)'],
            level: 43,
            effect: `
            300% 額外金錢從敵人身上取得<br/>
            100% 更加機率取得魔法物品<br/>
            +2 法力在每殺死一名敵人之後取得<br/>
            +10 敏捷
            `,
        },
        {
            name: '背信 <br/>Treachery',
            socket: '需要 3 凹槽',
            ruenmix: '夏 • 書爾 • 藍姆',
            ruenmixen: ['Shael (13) + ', 'Thul (10) + ', 'Lem (20)'],
            level: 43,
            effect: `
            被擊中時 5% 機會施展等級 15 能量消解<br/>
            打擊時有 25% 機會施展等級 15 毒牙<br/>
            +2 刺客技能<br/>
            +45% 增加準確率<br/>
            +20% 快速再度攻擊<br/>
            抗寒 +30%<br/>
            50% 額外金幣從怪物身上取得
            `,
        },
        {
            name: '教化 <br/> <span class="Enlight-span">Enlightenment</span>',
            socket: '需要 3 凹槽',
            ruenmix: '普爾 • 拉爾 • 索爾',
            ruenmixen: ['Pul (21) + ', 'Ral (8) + ', 'Sol (12)'],
            level: 45,
            effect: `
            被擊中時有 5% 機會施展等級 15 炙烈之徑<br/>
            打擊時有 5% 機會施展等級 15 火球<br/>
            +2 法師技能<br/>
            +1 致 暖氣 (限法師)<br/>
            +30% 防禦強化<br/>
            抗火 +30%<br/>
            傷害減少 7
            `,
        },
        {
            name: '強制 <br/>Durees',
            socket: '需要 3 凹槽',
            ruenmix: '夏 • 烏姆 • 書爾',
            ruenmixen: ['Shael (13) + ', 'Um (22) + ', 'Thul (10)'],
            level: 47,
            effect: `
            40% 快速打擊恢復<br/>
            +10-20% 增強傷害 <span style="color:red">(變動)</span><br/>
            +37-133 冰冷傷害<br/>
            15% 機會出現壓碎性打擊<br/>
            33% 機會撕裂傷口<br/>
            +150-200% 增強禦力 <span style="color:red">(變動)</span><br/>
            -20% 減慢體力耗損<br/>
            抗冰 +45%<br/>
            抗電 +15%<br/>
            抗火 +15%<br/>
            抗毒 +15%
            `,
        },
        {
            name: '幽暗 <br/>Gloom',
            socket: '需要 3 凹槽',
            ruenmix: '法爾 • 烏姆 • 普爾',
            ruenmixen: ['Fal (19) + ', 'Um (22) + ', 'Pul (21)'],
            level: 47,
            effect: `
            被擊中時有15% 機會施展等級 3 微暗靈視<br/>
            +10% 快速再度攻擊<br/>
            200-260% 增強防禦 <span style="color:red">(變動)</span><br/>
            +10 力量<br/>
            所有抗性 +45<br/>
            冰凍時間減半<br/>
            5% 傷害移至法力<br/>
            -3 到照亮範圍
            `,
        },
        {
            name: '石塊 <br/>Stone',
            socket: '需要 4 凹槽',
            ruenmix: '夏 • 烏姆 • 普爾 • 盧姆',
            ruenmixen: ['Shael (13) + ', 'Um (22) + ', 'Pul (21) + ', 'Lum (17)'],
            level: 47,
            effect: `
            +2 到所有技能<br/>
            45% 高速跑步/行走<br/>
            +1 傳送<br/>
            +750-775 防禦 <span style="color:red">(變動)</span><br/>
            +0-74 力量 (依角色等級乘0.75)<br/>
            增加最大生命 5%<br/>
            傷害減少 8%<br/>
            +14 生命在每殺一個敵人後取得<br/>
            15% 傷害移至法力<br/>
            +1-99% 更佳機會取得魔法裝備 (依角色等級乘1)
            `,
        },
        {
            name: '白骨 <br/>Bone',
            socket: '需要 3 凹槽',
            ruenmix: '索爾 • 烏姆 • 烏姆',
            ruenmixen: ['Sol (12) + ', 'Um (22) + ', 'Um (22)'],
            level: 47,
            effect: `
            被擊中時有 15% 機會施展等級 15 白骨裝甲<br/>
            打擊時有 15% 機會施展等級 15 骨矛<br/>
            +2 死靈法師技能<br/>
            +100-150 法力 <span style="color:red">(變動)</span><br/>
            所有抗性 +30<br/>
            傷害減少 7
            `,
        },
        {
            name: '慎重 <br/>Prudence',
            socket: '需要 2 凹槽',
            ruenmix: '馬爾 • 特爾',
            ruenmixen: ['Mal (23) + ', 'Tir (3)'],
            level: 49,
            effect: `
            25% 快速再度攻擊<br/>
            +140-170% 增強防禦 <span style="color:red">(變動)</span><br/>
            全面抵抗 +25-35 <span style="color:red">(變動)</span><br/>
            物理傷害減少 3<br/>
            魔法傷害減少 17<br/>
            +2 法力在每殺死一名敵人之後取得<br/>
            +2 照亮範圍<br/>
            回復耐久度1於4秒內
            `,
        },
        {
            name: '降雨 <br/>Rain',
            socket: '需要 3 凹槽',
            ruenmix: '歐特 • 馬爾 • 伊司',
            ruenmixen: ['Ort (9) + ', 'Mal (23) + ', 'Ith (6)'],
            level: 49,
            effect: `
            被擊中時 5% 機會施展等級 15 颶風裝甲<br/>
            打擊時有 5% 機會施展等級 15 謙鼬風<br/>
            +2 德魯依技能<br/>
            +100-150 法力 <span style="color:red">(變動)</span><br/>
            抗電 +30%<br/>
            法術傷害減少 7<br/>
            15% 受損的生命移至法力
            `,
        },
        {
            name: '原理 <br/>Principle',
            socket: '需要 3 凹槽',
            ruenmix: '拉爾 • 古爾 • 愛德',
            ruenmixen: ['Ral (8) + ', 'Gul (25) + ', 'Eld (2)'],
            level: 53,
            effect: `
            打擊時有 100% 機會施展等級 5 聖光彈<br/>
            +2 聖騎士技能<br/>
            15% 減緩精力消耗<br/>
            +5% 最大毒素抵抗<br/>
            抗火 +30%
            `,
        },
        {
            name: '野薔薇 <br/>Bramble',
            socket: '需要 4 凹槽',
            ruenmix: '拉爾 • 歐姆 • 瑟 • 愛斯',
            ruenmixen: ['Ral (8) + ', 'Ohm (27) + ', 'Sur (29) + ', 'Eth (5)'],
            level: 61,
            effect: `
            等級15-21刺針靈氣賦予 <span style="color:red">(變動)</span><br/>
            +50% 快速再度攻擊<br/>
            +25-50% 到毒素技能傷害 <span style="color:red">(變動)</span><br/>
            +300 防禦<br/>
            增加最大法力 5%<br/>
            法力重生 15%<br/>
            +5% 到最大冰冷抵抗<br/>
            抗火 +30%<br/>
            抗素 +100%<br/>
            +13 生命在每殺一個敵人後取得<br/>
            等級 13 棘靈 (33 聚氣)
            `,
        },
        {
            name: '榮耀之鍊 <br/>Chains of Honor',
            socket: '需要 4 凹槽',
            ruenmix: '多爾 • 烏姆 • 貝 • 伊司特',
            ruenmixen: ['Dol (14) + ', 'Um (22) + ', 'Ber (30) + ', 'Ist (24)'],
            level: 63,
            effect: `
            +2 到所有技能<br/>
            +200% 對惡魔系生物傷害<br/>
            +100% 對不死系生物傷害<br/>
            8% 生命于擊中時偷取<br/>
            70% 增強防禦<br/>
            +20 力量<br/>
            生命恢復速度 +7<br/>
            所有抗性 +65<br/>
            傷害減少 8%<br/>
            25% 更佳機會取得魔法裝備<br/>
            `,
        },
        {
            name: '謎團 <br/>Enigma',
            socket: '需要 3 凹槽',
            ruenmix: '喬 • 伊司 • 貝',
            ruenmixen: ['Jah (31) + ', 'Ith (6) + ', 'Ber (30)'],
            level: 65,
            effect: `
            +2 到所有技能<br/>
            45% 高速跑步/行走<br/>
            +1 傳送<br/>
            +750-775 防禦 <span style="color:red">(變動)</span><br/>
            +0-74 力量 (依角色等級乘0.75)<br/>
            增加最大生命 5%<br/>
            傷害減少 8%<br/>
            +14 生命在每殺一個敵人後取得<br/>
            15% 傷害移至法力<br/>
            +1-99% 更佳機會取得魔法裝備 (依角色等級乘1)
            `,
        },
        {
            ladder: '( 天梯專用 )',
            name: '剛毅 <br/>Fortitude ',
            socket: '需要 3 凹槽',
            ruenmix: '艾爾 • 索爾 • 多爾 • 羅',
            ruenmixen: ['El (1) + ', 'Sol (12) + ', 'Dol (14) +', 'Lo (28)'],
            level: 59,
            effect: `
            被擊中時 20% 機率產生 15 級寒冰裝甲<br/>
            25% 高速施法速度<br/>
            增加 300% 傷害<br/>
            增加 200% 防禦<br/>
            +15 防禦<br/>
            +1-148 生命 (依角色等級乘 1-1.5) <span style="color:red">(變動)</span><br/>
            生命補滿 +7<br/>
            +5% 最大閃電抗性<br/>
            所有抗性 +25-30 <span style="color:red">(變動)</span><br/>
            減少傷害 7<br/>
            12% 傷害轉為法力<br/>
            +1 照亮範圍
            `,
        },
        {
            ladder: '( 天梯專用 )',
            name: '飛龍 <br/>Dragon ',
            socket: '需要 3 凹槽',
            ruenmix: '瑟 • 羅 • 索爾',
            ruenmixen: ['Sur (29) + ', 'Lo (28) + ', 'Sol (12)'],
            level: 61,
            effect: `
            被擊中時 20% 機率產生 18 級的毒牙<br/>
            擊中敵人時 12% 機率產生 15 級九頭火蛇<br/>
            等級 14 聖火靈氣賦予<br/>
            +360 增強防禦<br/>
            +230 對飛射性武器防禦<br/>
            +3-5 所有屬性 <span style="color:red">(變動)</span><br/>
            +0-37 力量 (依角色等級乘0.375)<br/>
            增加最大法力上限 5%<br/>
            +5% 最大閃電抗性<br/>
            傷害減少7
            `,
        },
    ];
    return armor;
};
export default armor;
