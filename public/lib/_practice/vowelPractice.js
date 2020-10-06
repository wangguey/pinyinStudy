window.addEventListener("load", (event) => {
    var data_vowel =
        [
            {
                tip: '1「衣」服 1件',
                pinyin: 'i',
                zhuyin: '一 ',
                remark: 'ｉ',
                voice: '/assets/audios/vowel/letterv1.wav'
            },
            {
                tip: '2「污」黑的垃圾桶 Ủ',
                pinyin: 'u',
                zhuyin: 'ㄨ',
                remark: 'ｕ',
                voice: '/assets/audios/vowel/letterv2.wav'
            },
            {
                tip: '3「女」生勝利 ✌ ',
                pinyin: 'v',
                zhuyin: 'ㄩ',
                remark: 'Ü［按ｖ鍵］',
                voice: '/assets/audios/vowel/letterv3.wav'
            },
            {
                tip: '4「阿」姨懷孕 ǻ',
                pinyin: 'a',
                zhuyin: 'ㄚ',
                remark: 'ａ',
                voice: '/assets/audios/vowel/letterv4.wav'
            },
            {
                tip: '5圓圓的「蘋」果',
                pinyin: 'o',
                zhuyin: 'ㄛ',
                remark: 'ｏ',
                voice: '/assets/audios/vowel/letterv5.wav'
            },
            {
                tip: '6「鵝」頭戴帽 Ҽ',
                pinyin: 'e',
                zhuyin: 'ㄜ ',
                remark: 'ｅ',
                voice: '/assets/audios/vowel/letterv6.wav'
            },
            {
                tip: '7「耶」誕公公長鬍子',
                pinyin: 'e',
                zhuyin: 'ㄝ',
                remark: ' ê（按ｅ鍵）',
                voice: '/assets/audios/vowel/letterv7.wav'
            },

        ]

    var count = 0;
    var length = data_vowel.length;
    function showFirst() {
        document.getElementById('tip').innerHTML = data_vowel[0].tip;
        document.getElementById("voice").src = data_vowel[0].voice;
    };

    window.onload = showFirst();
    $("#answer").on('keyup', function (e) {
        if (e.keyCode === 13) {
            console.log();
            if (data_vowel[count].pinyin == document.getElementById('answer').value.toLowerCase()) {
                ++count;
                if (count < length) {
                    document.getElementById('tip').innerHTML = data_vowel[count].tip;
                    document.getElementById("voice").src = data_vowel[count].voice;
                }
                else {
                    alert('練習結束,重頭開始!');
                    count = 0;
                    showFirst();
                }
            }
            else {

                var register = data_vowel[count].tip + "拼音符號是:  " + data_vowel[count].pinyin;
                alert(register);

            }
            document.getElementById('answer').value = '';
        }
    });
})

