window.addEventListener("load", (event) => {
    var data_consonant =
        [
            {
                tip: '1大肚的爸「爸」',
                pinyin: 'b',
                zhuyin: 'ㄅ',
                remark: 'ｂ',
                voice: '/assets/audios/consonant/letter1.wav'
            },
            {
                tip: '2大頭的「胖」子',
                pinyin: 'p',
                zhuyin: 'ㄆ',
                remark: 'ｐ',
                voice: '/assets/audios/consonant/letter2.wav'
            },
            {
                tip: '3「麥」當勞的標幟M ',
                pinyin: 'm',
                zhuyin: 'ㄇ ',
                remark: 'ｍ',
                voice: '/assets/audios/consonant/letter3.wav'
            },
            {
                tip: '4「夫」子的拐杖',
                pinyin: 'f',
                zhuyin: 'ㄈ ',
                remark: 'ｆ',
                voice: '/assets/audios/consonant/letter4.wav'
            },
            {
                tip: '5菜「刀」的形狀 ձ',
                pinyin: 'd',
                zhuyin: 'ㄉ ',
                remark: 'ｄ',
                voice: '/assets/audios/consonant/letter5.wav'
            },
            {
                tip: '6「特」別的鉤子形狀 ն',
                pinyin: 't',
                zhuyin: 'ㄊ ',
                remark: 'ｔ',
                voice: '/assets/audios/consonant/letter6.wav'
            },
            {
                tip: '7「泥」巴做門洞 Ո',
                pinyin: 'n',
                zhuyin: 'ㄋ',
                remark: 'ｎ',
                voice: '/assets/audios/consonant/letter7.wav'
            },
            {
                tip: '8小草長長「了」',
                pinyin: 'l',
                zhuyin: 'ㄌ',
                remark: 'ｌ',
                voice: '/assets/audios/consonant/letter8.wav'
            },
            {
                tip: '9「哥」哥翹腳 Ց',
                pinyin: 'g',
                zhuyin: 'ㄍ',
                remark: 'ｇ',
                voice: '/assets/audios/consonant/letter9.wav'
            },
            {
                tip: '10「蝌」蚪ＯＫ',
                pinyin: 'k',
                zhuyin: 'ㄎ',
                remark: 'ｋ',
                voice: '/assets/audios/consonant/letter10.wav'
            },
            {
                tip: '11「喝」水高腳杯 ի',
                pinyin: 'h',
                zhuyin: 'ㄏ  ',
                remark: 'ｈ',
                voice: '/assets/audios/consonant/letter11.wav'
            },
            {
                tip: '12小「雞」點點頭',
                pinyin: 'j',
                zhuyin: 'ㄐ  ',
                remark: 'ｊ',
                voice: '/assets/audios/consonant/letter12.wav'
            },
            {
                tip: '13「旗」子插左邊¶',
                pinyin: 'q',
                zhuyin: 'ㄑ ',
                remark: 'ｑ',
                voice: '/assets/audios/consonant/letter13.wav'
            },
            {
                tip: '14「希」望的上頭 ',
                pinyin: 'x',
                zhuyin: 'ㄒ',
                remark: 'ｘ',
                voice: '/assets/audios/consonant/letter14.wav'
            },
            {
                tip: '15「知」道喝水(翹舌)',
                pinyin: 'zh',
                zhuyin: 'ㄓ',
                remark: 'ｚｈ(翹舌加ｈ)',
                voice: '/assets/audios/consonant/letter15.wav'
            },
            {
                tip: '16「吃」飯喝水(翹舌)',
                pinyin: 'ch',
                zhuyin: 'ㄔ',
                remark: 'ｃｈ(翹舌加ｈ)',
                voice: '/assets/audios/consonant/letter16.wav'
            },
            {
                tip: '17老「師」喝水(翹舌)',
                pinyin: 'sh',
                zhuyin: 'ㄕ',
                remark: 'ｓｈ(翹舌加ｈ)',
                voice: '/assets/audios/consonant/letter17.wav'
            },
            {
                tip: '18生「日」的彩帶旗 խ ',
                pinyin: 'r',
                zhuyin: 'ㄖ',
                remark: 'ｒ',
                voice: '/assets/audios/consonant/letter18.wav'
            },
            {
                tip: '19工「資」',
                pinyin: 'z',
                zhuyin: 'ㄗ',
                remark: 'ｚ(不翹舌)',
                voice: '/assets/audios/consonant/letter19.wav'
            },
            {
                tip: '20「刺」痛開口叫',
                pinyin: 'c',
                zhuyin: 'ㄘ',
                remark: 'ｃ(不翹舌)   ',
                voice: '/assets/audios/consonant/letter20.wav'
            },
            {
                tip: '21「司」機路考S型',
                pinyin: 's',
                zhuyin: 'ㄙ',
                remark: 'ｓ(不翹舌)',
                voice: '/assets/audios/consonant/letter21.wav'
            },

        ]

    var count = 0;
    var length = data_consonant.length;
    function showFirst() {
        document.getElementById('tip').innerHTML = data_consonant[0].tip;
        document.getElementById("voice").src = data_consonant[0].voice;
    };
    window.onload = showFirst();
    $("#answer").on('keyup', function (e) {
        if (e.keyCode === 13) {
            console.log();
            if (data_consonant[count].pinyin == document.getElementById('answer').value.toLowerCase()) {
                ++count;
                if (count < length) {
                    document.getElementById('tip').innerHTML = data_consonant[count].tip;
                    document.getElementById("voice").src = data_consonant[count].voice;
                }
                else {
                    alert('練習結束,重頭開始!');
                    count = 0;
                    showFirst();
                }
            }
            else {

                var register = data_consonant[count].tip + "拼音符號是:  " + data_consonant[count].pinyin;
                alert(register);

            }
            document.getElementById('answer').value = '';
        }
    });
});

