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
    // test start 
    var count = 0;
    var length = data_vowel.length;
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var wrongData = [];
    var wrongLength = wrongData.length;
    var itemWrong = 0;

    function showFirst() {
        document.getElementById('tip').innerHTML = data_vowel[0].tip;
        document.getElementById("voice").src = data_vowel[0].voice;
    };

    window.onload = showFirst();

    // test input Enter action
    $("#answer").on('keyup', function (e) {
        if (e.keyCode === 13) {
            if (data_vowel[count].pinyin == document.getElementById('answer').value.toLowerCase()) {
                ++rightAnswer;
                document.getElementById('right').innerHTML = rightAnswer;
            }
            else {
                ++wrongAnswer;
                document.getElementById('wrong').innerHTML = wrongAnswer;
                wrongData.push(data_vowel[count]);

            }
            ++count;
            if (count < length) {
                document.getElementById('tip').innerHTML = data_vowel[count].tip;
                document.getElementById("voice").src = data_vowel[count].voice;
                document.getElementById('answer').value = '';
            }
            else {
                document.getElementById("end").style.visibility = "visible";
                document.getElementById('answerTip').style.visibility = 'hidden';
                document.getElementById('answer').style.visibility = 'hidden';
                document.getElementById('questionTip').style.visibility = 'hidden';
                document.getElementById('tip').style.visibility = 'hidden';

                if (wrongAnswer > 0) {
                    document.getElementById("linkCorrect").style.display = "inline-block";
                }
            }
        }
    });

    // correction 
    $("#startCorrect").click(function () {
        if (wrongData.length > 0) {
            document.getElementById('tipCorrect').innerHTML = wrongData[0].tip;
            document.getElementById("voiceCorrect").src = wrongData[0].voice;
            document.getElementById('voiceCorrect').style.visibility = 'visible';
            document.getElementById('tipQuestion').style.visibility = 'visible';
            document.getElementById('tipPractice').style.visibility = 'visible';
            document.getElementById('tipCorrect').style.visibility = 'visible';
            document.getElementById('answerCorrect').style.visibility = 'visible';
            document.getElementById("linkTest").style.display = "none";
            document.getElementById("answerCorrect").focus();
        }
        else { alert('沒有錯誤!') }
    });

    $("#answerCorrect").on('keyup', function (e) {
        if (e.keyCode === 13) {
            console.log();
            if (wrongData[itemWrong].pinyin == document.getElementById('answerCorrect').value.toLowerCase()) {
                ++itemWrong;
                if (itemWrong < wrongAnswer) {
                    document.getElementById('tipCorrect').innerHTML = wrongData[itemWrong].tip;
                    document.getElementById("voiceCorrect").src = wrongData[itemWrong].voice;
                }
                else {
                    itemWrong = 0
                    document.getElementById('tipCorrect').style.visibility = 'hidden';
                    document.getElementById('answerCorrect').style.visibility = 'hidden';
                    document.getElementById('tipQuestion').style.visibility = 'hidden';
                    document.getElementById('tipPractice').style.visibility = 'hidden';
                    document.getElementById('voiceCorrect').style.visibility = 'hidden';
                    document.getElementById("linkTest").style.display = "inline-block";
                }
            }
            else {

                var register = wrongData[itemWrong].tip + "拼音符號是:  " + wrongData[itemWrong].pinyin;
                alert(register);

            }
            document.getElementById('answerCorrect').value = '';
        }
    });
});
