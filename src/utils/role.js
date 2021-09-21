const role = () => {
  const role = [
    {
      article: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/Co.php?bsn=742&sn=1267351">巴哈(kevin82912)　-　召喚死靈 </a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=246544&tnum=54">巴哈(moonweijun)　-　召喚死靈 </a>
            </h5>
            `,
      video: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=Vv3P2Aw3OP0">Youtube(MrLlamaSC)　-　競速破關</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=u0jQRMxZ2LI">Youtube(王文賢)　-　七職業拓荒簡介</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=UDWDBjEdvzI">Youtube(豆奶Soy Milk)　-　召喚死靈</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=-jfEQ2gAMXY&t">Youtube(豆奶Soy Milk)　-　毒召死靈</a>
            </h5>
            `,
      bl: false,
    },
    {
      article: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/Co.php?bsn=742&sn=1267393">巴哈(kevin82912)　-　電標亞馬遜</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=246544&tnum=54">巴哈(moonweijun)　-　電標亞馬遜</a>
            </h5>
            `,
      video: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=NbVBj51_EPo&t=">Youtube(MrLlamaSC)　-　競速破關</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=u0jQRMxZ2LI">Youtube(王文賢)　-　七職業拓荒簡介</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=jfqObOC4W34&t=">Youtube(豆奶Soy Milk)　- 電標亞馬遜</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=P6tZTu_IkAY&t=">Youtube(豆奶Soy Milk)　- 弓箭亞馬遜</a>
            </h5>
            `,
      bl: true,
    },
    {
      article: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=246846&tnum=4">巴哈(kevin82912)　-　祝鎚聖騎士</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=246544&tnum=54">巴哈(moonweijun)　-　祝鎚聖騎士</a>
            </h5>
            `,
      video: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=W2wLSmZzoIg">Youtube(MrLlamaSC)　-　競速破關</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=u0jQRMxZ2LI">Youtube(王文賢)　-　七職業拓荒簡介</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=Xzw53r46jo4&t=">Youtube(豆奶Soy Milk)　- 祝槌聖騎士</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=mERvWG65Fpw&t=">Youtube(豆奶Soy Milk)　- 盾丁聖騎士</a>
            </h5>
            `,
      bl: true,
    },
    {
      article: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/G2.php?bsn=742&sn=1504">巴哈(evaandy)　-　旋風野蠻人</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/G2.php?bsn=742&sn=1504">巴哈(evaandy)　-　狂亂野蠻人</a>
            </h5>
            `,
      video: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=paACHJXVmAw">Youtube(MrLlamaSC)　-　競速破關</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=u0jQRMxZ2LI">Youtube(王文賢)　-　七職業拓荒簡介</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=zQcM54WHi0Q">Youtube(豆奶Soy Milk)　- 旋風野蠻人</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=pXo5amZonkI&t=">Youtube(豆奶Soy Milk)　- 狂亂野蠻人</a>
            </h5>
            `,
      bl: true,
    },
    {
      article: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=247082&tnum=5">巴哈(statice0816)　-　火系德魯伊</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=244703&tnum=1">巴哈(tbyright)　-　4種德魯伊</a>
            </h5>
            `,
      video: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=OUtEmcgSFik">Youtube(MrLlamaSC)　-　競速破關</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=u0jQRMxZ2LI">Youtube(王文賢)　-　七職業拓荒簡介</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=00rkP459qwc&t=">Youtube(豆奶Soy Milk)　- 火風元素德</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=5_yhm3JpUi8&t=">Youtube(豆奶Soy Milk)　- 召喚德魯伊</a>
            </h5>
            `,
      bl: true,
    },
    {
      article: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=246776&tnum=4">巴哈(kevin82912)　-　冰火法師</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=246544&tnum=54">巴哈(moonweijun)　-　無限電法</a>
            </h5>
            `,
      video: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=92gGvIb2ku8&t=">Youtube(MrLlamaSC)　-　競速破關</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=u0jQRMxZ2LI">Youtube(王文賢)　-　七職業拓荒簡介</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=uYV9NrXn_yw">Youtube(豆奶Soy Milk)　-　冰火法師</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=ybBecKhg_eQ&t=">Youtube(豆奶Soy Milk)　-　無限電法</a>
            </h5>
            `,
      bl: true,
    },
    {
      article: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=247275&tnum=4">巴哈(statice0816)　-　陷阱刺客</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://forum.gamer.com.tw/C.php?bsn=742&snA=246544&tnum=54">巴哈(moonweijun)　-　陷阱刺客</a>
            </h5>
            `,
      video: `
            <h5 style="text-align: center;font-weight: bold;">
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=gUFnPxwiDTo&t=">Youtube(MrLlamaSC)　-　競速破關</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=u0jQRMxZ2LI">Youtube(王文賢)　-　七職業拓荒簡介</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=GatZt4VotwQ&t=">Youtube(豆奶Soy Milk)　-　陷阱刺客</a>
            <br><br>
            <a style="color:rgb(206, 188, 134);" target="_blank" href="https://www.youtube.com/watch?v=JkGuNSedvPI">Youtube(豆奶Soy Milk)　-　鳳凰刺客</a>
            </h5>
            `,
      bl: true,
    },
  ];
  return role;
};
export default role;
