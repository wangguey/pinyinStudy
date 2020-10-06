window.addEventListener("load", (event) => {
    var data_vowel =
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
