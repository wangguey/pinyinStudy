window.addEventListener("load", (event) => {
    var data_consonant =
        [
            {
                tip: '1前面要加ｙ的「衣」字',
                pinyin: 'yi',
                zhuyin: 'ㄧ',
                remark: 'ｙｉ(音前加 y)',
                voice: '/assets/audios/noConsonant/letternc1.wav'
            },
            {
                tip: '2前面ｉ要改為ｙ的「呀」字',
                pinyin: 'ya',
                zhuyin: 'ㄧㄚ',
                remark: 'ｙａ(音前 i 改為 y)',
                voice: '/assets/audios/noConsonant/letternc2.wav'
            },
            {
                tip: '3前面ｉ要改為ｙ的「耶」字',
                pinyin: 'ye',
                zhuyin: 'ㄧㄝ',
                remark: 'ｙｅ(音前 i 改為 y)',
                voice: '/assets/audios/noConsonant/letternc3.wav'
            },
            {
                tip: '4前面ｉ要改為ｙ的「腰」字',
                pinyin: 'yao',
                zhuyin: 'ㄧㄠ ',
                remark: 'ｙａｏ(音前 i 改為 y)',
                voice: '/assets/audios/noConsonant/letternc4.wav'
            },
            {
                tip: '5前面ｉ要改為ｙ的「優」字',
                pinyin: 'you',
                zhuyin: 'ㄧㄡ ',
                remark: 'ｙｏｕ(音前 i 改為 y)',
                voice: '/assets/audios/noConsonant/letternc5.wav'
            },
            {
                tip: '6前面ｉ要改為ｙ的「煙」字',
                pinyin: 'yan',
                zhuyin: 'ㄧㄢ ',
                remark: 'ｙａｎ(音前 i 改為 y)',
                voice: '/assets/audios/noConsonant/letternc6.wav'
            },
            {
                tip: '7前面要加ｙ的「因」字',
                pinyin: 'yin',
                zhuyin: 'ㄧㄣ',
                remark: 'ｙｉｎ(音前加 y)',
                voice: '/assets/audios/noConsonant/letternc7.wav'
            },
            {
                tip: '8前面ｉ要改為ｙ的「央」字',
                pinyin: 'yang',
                zhuyin: 'ㄧㄤ',
                remark: 'ｙａｎｇ(音前 i 改為 y)',
                voice: '/assets/audios/noConsonant/letternc8.wav'
            },
            {
                tip: '9前面要加ｙ的「英」字',
                pinyin: 'ying',
                zhuyin: 'ㄧㄥ',
                remark: 'ｙｉｎｇ(音前加 y)',
                voice: '/assets/audios/noConsonant/letternc9.wav'
            },
            {
                tip: '10前面要加ｙ的「迂」字',
                pinyin: 'yu',
                zhuyin: 'ㄩ',
                remark: 'ｙｕ(音前加 y)',
                voice: '/assets/audios/noConsonant/letternc10.wav'
            },
            {
                tip: '11前面要加ｙ的「約」字',
                pinyin: 'yue',
                zhuyin: 'ㄩㄝ',
                remark: 'ｙｕｅ(音前加 y)',
                voice: '/assets/audios/noConsonant/letternc11.wav'
            },
            {
                tip: '12前面要加ｙ的「寃」字',
                pinyin: 'yuan',
                zhuyin: 'ㄩㄢ',
                remark: 'ｙｕａｎ(音前加 y)',
                voice: '/assets/audios/noConsonant/letternc12.wav'
            },
            {
                tip: '13前面要加ｙ的「暈」字',
                pinyin: 'yun',
                zhuyin: 'ㄩㄣ',
                remark: 'ｙｕｎ(音前加 y)',
                voice: '/assets/audios/noConsonant/letternc13.wav'
            },
            {
                tip: '14前面ｉ要改為ｙ的「佣」字 ',
                pinyin: 'yong',
                zhuyin: 'ㄩㄥ',
                remark: 'ｙｏｎｇ(音前 i 改為 y)',
                voice: '/assets/audios/noConsonant/letternc14.wav'
            },
            {
                tip: '15前面要加ｗ的「烏」字',
                pinyin: 'wu',
                zhuyin: 'ㄨ',
                remark: 'ｗｕ(音前加 w)',
                voice: '/assets/audios/noConsonant/letternc15.wav'
            },
            {
                tip: '16前面ｕ要改為ｗ的「蛙」字',
                pinyin: 'wa',
                zhuyin: 'ㄨㄚ',
                remark: 'ｗａ(音前 u 改為 w)',
                voice: '/assets/audios/noConsonant/letternc16.wav'
            },
            {
                tip: '17前面ｕ要改為ｗ的「窩」字',
                pinyin: 'wo',
                zhuyin: 'ㄨㄛ',
                remark: 'ｗｏ(音前 u 改為 w)',
                voice: '/assets/audios/noConsonant/letternc17.wav'
            },
            {
                tip: '18前面ｕ要改為ｗ的「歪」字',
                pinyin: 'wai',
                zhuyin: 'ㄨㄞ',
                remark: 'ｗａｉ(音前 u 改為 w)',
                voice: '/assets/audios/noConsonant/letternc18.wav'
            },
            {
                tip: '19前面ｕ要改為ｗ的「威」字',
                pinyin: 'wei',
                zhuyin: 'ㄨㄟ',
                remark: 'ｗｅｉ(音前 u 改為 w)',
                voice: '/assets/audios/noConsonant/letternc19.wav'
            },
            {
                tip: '20前面ｕ要改為ｗ的「彎」字',
                pinyin: 'wan',
                zhuyin: 'ㄨㄢ',
                remark: 'ｗａｎ(音前 u 改為 w)',
                voice: '/assets/audios/noConsonant/letternc20.wav'
            },            
            {
                tip: '21前面ｕ要改為ｗ的「溫」字',
                pinyin: 'wen',
                zhuyin: 'ㄨㄣ',
                remark: 'ｗｅｎ(音前 u 改為 w)',
                voice: '/assets/audios/noConsonant/letternc21.wav'
            },
            {
                tip: '22前面ｕ要改為ｗ的「汪」字',
                pinyin: 'wang',
                zhuyin: 'ㄨㄤ',
                remark: 'ｗａｎｇ(音前 u 改為 w)',
                voice: '/assets/audios/noConsonant/letternc22.wav'
            },
            {
                tip: '23前面ｕ要改為ｗ的「翁」字',
                pinyin: 'weng',
                zhuyin: 'ㄨㄥ',
                remark: 'ｗｅｎｇ(音前 u 改為 w)',
                voice: '/assets/audios/noConsonant/letternc23.wav'
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
    window.onload = showFirst();
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