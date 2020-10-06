window.addEventListener("load", (event) => {
var data_consonant =
    [
        {
            tip: '1後面要加ｉ的「知」字',
            pinyin: 'zhi',
            zhuyin: 'ㄓ',
            remark: 'ｚｈｉ(加ｉ韻)',
            voice: '/assets/audios/noVowel/letternv1.wav'
        },
        {
            tip: '2後面要加ｉ的「吃」字',
            pinyin: 'chi',
            zhuyin: 'ㄔ',
            remark: 'ｃｈｉ(加ｉ韻)',
            voice: '/assets/audios/noVowel/letternv2.wav'
        },
        {
            tip: '3後面要加ｉ「師」字',
            pinyin: 'shi',
            zhuyin: 'ㄕ ',
            remark: 'ｓｈｉ(加ｉ韻)',
            voice: '/assets/audios/noVowel/letternv3.wav'
        },
        {
            tip: '4後面要加ｉ的「日」字',
            pinyin: 'ri',
            zhuyin: 'ㄖ',
            remark: 'ｒｉ(加 ｉ 韻)',
            voice: '/assets/audios/noVowel/letternv4.wav'
        },
        {
            tip: '5後面要加ｉ的「資」字',
            pinyin: 'zi',
            zhuyin: 'ㄗ',
            remark: 'ｚｉ(加 ｉ 韻)',
            voice: '/assets/audios/noVowel/letternv5.wav'
        },
        {
            tip: '6後面要加ｉ的「疵」字',
            pinyin: 'ci',
            zhuyin: 'ㄘ',
            remark: 'ｃｉ(加 ｉ 韻)',
            voice: '/assets/audios/noVowel/letternv6.wav'
        },
        {
            tip: '7後面要加ｉ的「思」字',
            pinyin: 'si',
            zhuyin: 'ㄙ',
            remark: 'ｓｉ(加 ｉ 韻)',
            voice: '/assets/audios/noVowel/letternv7.wav'
        },
        {
            tip: '8去掉兩點的「居」字',
            pinyin: 'ju',
            zhuyin: 'ㄐㄩ',
            remark: 'ｊÜ(ｖ改為ｕ打ｊｕ)',
            voice: '/assets/audios/noVowel/letternv8.wav'
        },
        {
            tip: '9去掉兩點的「區」字',
            pinyin: 'qu',
            zhuyin: 'ㄑㄩ',
            remark: 'ｑÜ(ｖ改為ｕ打ｑｕ)',
            voice: '/assets/audios/noVowel/letternv9.wav'
        },
        {
            tip: '10去掉兩點的「虛」字',
            pinyin: 'xu',
            zhuyin: 'ㄒㄩ',
            remark: 'ｘÜ(ｖ改為ｕ打ｘｕ)',
            voice: '/assets/audios/noVowel/letternv10.wav'
        },
        
    ]
    
var count = 0;
var length = data_consonant.length;
function showFirst() {
    document.getElementById('tip').innerHTML = data_consonant[0].tip;
    document.getElementById('remark').innerHTML = data_consonant[0].remark;
    document.getElementById('zhuyin').innerHTML = data_consonant[0].zhuyin;
    document.getElementById("voice").src = data_consonant[0].voice;
};
window.onload = showFirst;
$("#showNext").click(function () {
    ++count;
    if (count < length) {
        document.getElementById('tip').innerHTML = data_consonant[count].tip;
        document.getElementById('remark').innerHTML = data_consonant[count].remark;
        document.getElementById('zhuyin').innerHTML = data_consonant[count].zhuyin;
        document.getElementById("voice").src = data_consonant[count].voice;
    }
    else {
        alert('全部完成');
        --count;
        // document.getElementByIdx('showNext').disabled = true;
    }
});

$("#showPrevious").click(function () {
    --count;
    if (count >= 0) {
        document.getElementById('tip').innerHTML = data_consonant[count].tip;
        document.getElementById('remark').innerHTML = data_consonant[count].remark;
        document.getElementById('zhuyin').innerHTML = data_consonant[count].zhuyin;
        document.getElementById("voice").src = data_consonant[count].voice;
    }
    else {
        alert('已到起頭');
        ++count
        // document.getElementByIdx('showPrevious').disabled = true;
    }
});
})