var data_home = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
var data_upper = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var data_lower = ["z", "x", "c", "v", "b", "n", "m"];
var form = document.querySelector("form");
var question = document.querySelector("#question");
var result = document.querySelector("#result");
var answer = document.getElementById("answer");
var rightKey = 0;
var errorKey = 0;
var startTime = 0;
var endTime = 0;
form.addEventListener("submit", function (event) {
    var data = new FormData(form);    
    test_data = [];
    rightKey = 0;
    errorKey = 0;
    j = 0;
    document.getElementById('answer').value = ""
    document.getElementById("estimation").innerHTML = "打對: " + rightKey + " 鍵" + "\xa0\xa0" + "打對: " + errorKey + " 鍵" + "\xa0\xa0\xa0" + "打完按一字母鍵看速度(不能退位)";
    document.getElementById("score").innerHTML = "";

    for (const entry of data) {
        // output = output + entry[0] + "=" + entry[1] + "\r";
        if (entry[1] == "homeTyping") {
            data_selected = data_home;;
        } else if (entry[1] == "upperTyping") {
            data_selected = data_upper;
        } else if (entry[1] == "lowerTyping") {
            data_selected = data_lower;
        } else {
            data_selected = data_lower.concat(data_home).concat(data_upper);
        };
        i = 0;
        while (i < 60) {
            dataAscii = Math.floor(Math.random() * 26) + 97;
            datakey = String.fromCharCode(dataAscii);
            if (data_selected.includes(datakey)) {
                test_data.push(datakey)
                i = i + 1;
            }
        }

        test_data.push("\xa0")
    };
    question.innerText = test_data.join("");
    result.innerText = ""
    startTime = new Date().getTime();
    document.getElementById("answer").focus();
    event.preventDefault();
    $('#begin').attr('disabled', true);
}, false);

/* In this example, we use a cross-browser solution, because the keyCode property does not work on the onkeypress event in Firefox. However, the which property does.
 Explanation of the first line in the function below: if the browser supports event.which, then use event.which, otherwise use event.keyCode */
function inputFunction(event) {
    var x = event.which || event.keyCode;    
    if (String.fromCharCode(event.keyCode).toLowerCase() == test_data[j]) {
        rightKey++;
    }
    else if (j < 60) {
        errorKey++;
    }
    document.getElementById("estimation").innerHTML = "打對: " + rightKey + " 鍵" + "\xa0\xa0" + "打錯: " + errorKey + " 鍵" + "\xa0\xa0\xa0" + "打完按一字母鍵看速度";
    ++j;
    if (j == 60) {       
        endTime = new Date().getTime();
        $('input').keypress(function (e) {
            testTime = (endTime - startTime) / 1000
            speed = rightKey / testTime * 60 / 5
            e.preventDefault();
            $(this).unbind("keypress");
            if (rightKey < 50) {
                document.getElementById("score").innerHTML = "打對小於50鍵不計分";
            }
            else {
                document.getElementById("score").innerHTML = "時間:" + Math.round(testTime) + "秒" + "\xa0\xa0\xa0\xa0\xa0" + Math.round(speed) + "字/分(5鍵/字)";
            }
            checkAnswer();
            $('#begin').attr('disabled', false);
        });
    }
}

$(document).ready(function () {
    $("#answer").keydown(function (event) {
        var inputValue = event.which;
        // allow letters and whitespaces only.
        if (!(inputValue >= 65 && inputValue <= 120)) {
            event.preventDefault();
        }
    });
});

// 最後判斷對錯並印出
function checkAnswer() {
    for (i = 0; i < answer.value.length; i++) {        
        if (answer.value[i].toLowerCase() != question.innerHTML[i]) {
            var child = document.createElement("span");
            child.className = 'colored';
            child.innerHTML = answer.value[i];
            result.appendChild(child);
        }
        else {
            var child = document.createElement("span");
            child.innerHTML = answer.value[i];
            result.appendChild(child);
        }
    }
}