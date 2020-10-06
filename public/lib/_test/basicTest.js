window.addEventListener("load", (event) => {
    var data_consonant =
        [
            {
                tip: '1大肚的爸「爸」',
                pinyin: 'b',
                zhuyin: 'ㄅ',
                remark: 'ｂ',
                voice: '/assets/audios/basic37/letterb1.wav'
            },
            {
                tip: '2大頭的「胖」子',
                pinyin: 'p',
                zhuyin: 'ㄆ',
                remark: 'ｐ',
                voice: '/assets/audios/basic37/letterb2.wav'
            },
            {
                tip: '3「麥」當勞的標幟M ',
                pinyin: 'm',
                zhuyin: 'ㄇ ',
                remark: 'ｍ',
                voice: '/assets/audios/basic37/letterb3.wav'
            },
            {
                tip: '4「夫」子的拐杖',
                pinyin: 'f',
                zhuyin: 'ㄈ ',
                remark: 'ｆ',
                voice: '/assets/audios/basic37/letterb4.wav'
            },
            {
                tip: '5菜「刀」的形狀 ձ',
                pinyin: 'd',
                zhuyin: 'ㄉ ',
                remark: 'ｄ',
                voice: '/assets/audios/basic37/letterb5.wav'
            },
            {
                tip: '6「特」別的鉤子形狀 ն',
                pinyin: 't',
                zhuyin: 'ㄊ ',
                remark: 'ｔ',
                voice: '/assets/audios/basic37/letterb6.wav'
            },
            {
                tip: '7「泥」巴做門洞 Ո',
                pinyin: 'n',
                zhuyin: 'ㄋ',
                remark: 'ｎ',
                voice: '/assets/audios/basic37/letterb7.wav'
            },
            {
                tip: '8小草長長「了」',
                pinyin: 'l',
                zhuyin: 'ㄌ',
                remark: 'ｌ',
                voice: '/assets/audios/basic37/letterb8.wav'
            },
            {
                tip: '9「哥」哥翹腳 Ց',
                pinyin: 'g',
                zhuyin: 'ㄈ',
                remark: 'ｇ',
                voice: '/assets/audios/basic37/letterb9.wav'
            },
            {
                tip: '10「蝌」蚪ＯＫ',
                pinyin: 'k',
                zhuyin: 'ㄎ',
                remark: 'ｋ',
                voice: '/assets/audios/basic37/letterb10.wav'
            },
            {
                tip: '11「喝」水高腳杯 ի',
                pinyin: 'h',
                zhuyin: 'ㄏ  ',
                remark: 'ｈ',
                voice: '/assets/audios/basic37/letterb11.wav'
            },
            {
                tip: '12小「雞」點點頭',
                pinyin: 'j',
                zhuyin: 'ㄐ  ',
                remark: 'ｊ',
                voice: '/assets/audios/basic37/letterb12.wav'
            },
            {
                tip: '13「旗」子插左邊¶',
                pinyin: 'q',
                zhuyin: 'ㄑ ',
                remark: 'ｑ',
                voice: '/assets/audios/basic37/letterb13.wav'
            },
            {
                tip: '14「希」望的上頭 ',
                pinyin: 'x',
                zhuyin: 'ㄒ',
                remark: 'ｘ',
                voice: '/assets/audios/basic37/letterb14.wav'
            },
            {
                tip: '15「知」道喝水(翹舌)',
                pinyin: 'zh',
                zhuyin: 'ㄓ',
                remark: 'ｚｈ(翹舌加ｈ)',
                voice: '/assets/audios/basic37/letterb15.wav'
            },
            {
                tip: '16「吃」飯喝水(翹舌)',
                pinyin: 'ch',
                zhuyin: 'ㄔ',
                remark: 'ｃｈ(翹舌加ｈ)',
                voice: '/assets/audios/basic37/letterb16.wav'
            },
            {
                tip: '17老「師」喝水(翹舌)',
                pinyin: 'sh',
                zhuyin: 'ㄕ',
                remark: 'ｓｈ(翹舌加ｈ)',
                voice: '/assets/audios/basic37/letterb17.wav'
            },
            {
                tip: '18生「日」的彩帶旗 խ ',
                pinyin: 'r',
                zhuyin: 'ㄖ',
                remark: 'ｒ',
                voice: '/assets/audios/basic37/letterb18.wav'
            },
            {
                tip: '19工「資」',
                pinyin: 'z',
                zhuyin: 'ㄗ',
                remark: 'ｚ(不翹舌)',
                voice: '/assets/audios/basic37/letterb19.wav'
            },
            {
                tip: '20「刺」痛開口叫',
                pinyin: 'c',
                zhuyin: 'ㄘ',
                remark: 'ｃ(不翹舌)   ',
                voice: '/assets/audios/basic37/letterb20.wav'
            },
            {
                tip: '21「司」機路考S型',
                pinyin: 's',
                zhuyin: 'ㄙ',
                remark: 'ｓ(不翹舌)',
                voice: '/assets/audios/basic37/letterb21.wav'
            },
            {
                tip: '22「阿」姨懷孕 ǻ',
                pinyin: 'a',
                zhuyin: 'ㄚ',
                remark: 'ａ',
                voice: '/assets/audios/basic37/letterb22.wav'
            },
            {
                tip: '23圓圓的「蘋」果',
                pinyin: 'o',
                zhuyin: 'ㄛ',
                remark: 'ｏ',
                voice: '/assets/audios/basic37/letterb23.wav'
            },
            {
                tip: '24「鵝」頭戴帽 Ҽ',
                pinyin: 'e',
                zhuyin: 'ㄜ ',
                remark: 'ｅ',
                voice: '/assets/audios/basic37/letterb24.wav'
            },
            {
                tip: '25「耶」誕公公長鬍子',
                pinyin: 'e',
                zhuyin: 'ㄝ',
                remark: ' ê（按ｅ鍵）',
                voice: '/assets/audios/basic37/letterb25.wav'
            },
            {
                tip: '26「愛」遊戲',
                pinyin: 'ai',
                zhuyin: 'ㄞ',
                remark: 'ａｉ',
                voice: '/assets/audios/basic37/letterb26.wav'
            },
            {
                tip: '27「背」東西',
                pinyin: 'ei',
                zhuyin: 'ㄟ',
                remark: 'ｅｉ',
                voice: '/assets/audios/basic37/letterb27.wav'
            }, {
                tip: '28「凹」下去的球',
                pinyin: 'ao',
                zhuyin: 'ㄠ ',
                remark: 'ａｏ',
                voice: '/assets/audios/basic37/letterb28.wav'
            },
            {
                tip: '29「歐」洲的房屋',
                pinyin: 'ou',
                zhuyin: 'ㄡ',
                remark: 'ｏｕ',
                voice: '/assets/audios/basic37/letterb29.wav'
            },
            {
                tip: '30「安」靜的拿',
                pinyin: 'an',
                zhuyin: 'ㄢ',
                remark: 'ａｎ',
                voice: '/assets/audios/basic37/letterb30.wav'
            },
            {
                tip: '31給你「恩」惠吶',
                pinyin: 'en',
                zhuyin: 'ㄣ',
                remark: 'ｅｎ',
                voice: '/assets/audios/basic37/letterb31.wav'
            },
            {
                tip: '32「骯」髒的三哥',
                pinyin: 'ang',
                zhuyin: 'ㄤ ',
                remark: 'ａｎｇ',
                voice: '/assets/audios/basic37/letterb32.wav'
            },
            {
                tip: '33「坑」洞三個',
                pinyin: 'eng',
                zhuyin: 'ㄥ',
                remark: 'ｅｎｇ',
                voice: '/assets/audios/basic37/letterb33.wav'
            },
            {
                tip: '34「二」兒子的生日',
                pinyin: 'er',
                zhuyin: 'ㄦ',
                remark: 'ｅｒ',
                voice: '/assets/audios/basic37/letterb34.wav'
            },
            {
                tip: '35「衣」服 1件',
                pinyin: 'i',
                zhuyin: '一 ',
                remark: 'ｉ',
                voice: '/assets/audios/basic37/letterb35.wav'
            },
            {
                tip: '36「污」黑的垃圾桶 Ủ',
                pinyin: 'u',
                zhuyin: 'ㄨ',
                remark: 'ｕ',
                voice: '/assets/audios/basic37/letterb36.wav'
            },
            {
                tip: '37「女」生勝利 ✌ ',
                pinyin: 'v',
                zhuyin: 'ㄩ',
                remark: 'Ü［按ｖ鍵］',
                voice: '/assets/audios/basic37/letterb37.wav'
            },

        ]
    // test start 
    var count = 0;
    var index = 0;
    var length = data_consonant.length;
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var wrongData = [];
    var wrongLength = wrongData.length;
    var itemWrong = 0;
    var testNumber = [];
    let form = document.getElementById('choice');
    function showFirst() {        
        count = testNumber[index];
        document.getElementById('tip').innerHTML = data_consonant[count].tip;
        document.getElementById("voice").src = data_consonant[count].voice;
    };
    form.addEventListener("submit", function (event) {
        var data = new FormData(document.getElementById('choice'));
        testNumber = [];
        for (const entry of data) {
            if (entry[1] == "order") {
                testNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
            } else {
                i = 0;
                while (i < 37) {
                    dataAscii = Math.floor(Math.random() * 37)
                    if (!testNumber.includes(dataAscii)) {
                        testNumber.push(dataAscii)
                        i = i + 1;
                    }
                };
                console.log(testNumber);
            }
            showFirst();
        }
        document.getElementById("answer").focus();
        event.preventDefault();
    }, false);
    // window.onload = showFirst;
    // test input Enter action
    $("#answer").on('keyup', function (e) {
        if (e.keyCode === 13) {
            if (data_consonant[count].pinyin == document.getElementById('answer').value.toLowerCase()) {
                ++rightAnswer;
                document.getElementById('right').innerHTML = rightAnswer;
            }
            else {
                ++wrongAnswer;
                document.getElementById('wrong').innerHTML = wrongAnswer;
                wrongData.push(data_consonant[count]);

            }
            ++index;
            count = testNumber[index];
            if (index < length) {
                document.getElementById('tip').innerHTML = data_consonant[count].tip;
                document.getElementById("voice").src = data_consonant[count].voice;
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
                    itemWrong = 0;
                    document.getElementById('tipCorrect').style.visibility = 'hidden';
                    document.getElementById('answerCorrect').style.visibility = 'hidden';
                    document.getElementById('tipQuestion').style.visibility = 'hidden';
                    document.getElementById('tipPractice').style.visibility = 'hidden';
                    document.getElementById('voiceCorrect').style.visibility = 'hidden';
                    document.getElementById("linkTest").style.display = "inline-block";
                    // index = 0;
                    // testNumber = [];
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
