var data_home = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
var data_upper = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var data_lower = ["z", "x", "c", "v", "b", "n", "m"];
var color = {
    'q': "lightcoral", 'w': "sandybrown", 'e': "yellow", 'r': "dodgerblue",
    't': "dodgerblue", 'y': "limegreen", 'u': "limegreen", 'i': "yellow",
    'o': "sandybrown", 'p': "lightcoral", 'a': "lightcoral", 's': "sandybrown",
    'd': "yellow", 'f': "hotpink", 'g': "dodgerblue", 'h': "limegreen",
    'j': "hotpink", 'k': "yellow", 'l': "sandybrown", 'z': "lightcoral",
    'x': "sandybrown", 'c': "yellow", 'v': "dodgerblue", 'b': "dodgerblue",
    'n': "limegreen", 'm': "limegreen"
}

var form = document.querySelector("form");
var question = document.querySelector("#question");
var answer = document.getElementById("answer");
var minutes = 0;
// var question = document.getElementById("question").innerHTML;
var test_data = [];
var rightKey = 0;
var startTime = new Date().getTime();
var endTime = 0;
var j = 0;

function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

form.addEventListener("submit", function (event) {
    var data = new FormData(form);
    test_data = [];
    rightKey = 0;
    j = 0;
    document.getElementById('answer').value = ""
    document.getElementById("score").innerHTML = "打對: " + rightKey + " 鍵" + "\xa0\xa0\xa0\xa0\xa0"
    // 產生分級題目
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
        while (i < 500) {
            dataAscii = Math.floor(Math.random() * 26) + 97;
            datakey = String.fromCharCode(dataAscii);
            if (data_selected.includes(datakey)) {
                test_data.push(datakey)
                i = i + 1;
            }
        }

        test_data.push("\xa0")
    };

    question.innerText = test_data[0];
    chang = 0;
    document.getElementById(test_data[0]).style.backgroundColor = "dimgray";
    // 計時
    var startTime = new Date().getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = now - startTime;
        // var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        // var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("time").style.color = 'blue';
        document.getElementById("time").innerHTML = pad(minutes, 2) + ":" + pad(60 - seconds, 2) + "\xa0\xa0\xa0\xa0\xa0";
        if (minutes == 1) {
            clearInterval(x);
            document.getElementById("time").style.color = 'red';
            document.getElementById("time").innerHTML = "一分鐘時間到" + "\xa0\xa0\xa0\xa0\xa0";
            document.getElementById(test_data[j]).style.backgroundColor = color[test_data[j]];
            question.innerText = "";
            $('#begin').attr('disabled', false);
            document.getElementById("answer").disabled = true;
            // $('#anwer').attr('enabled', false);
        }

    }, 1000);
    event.preventDefault();
    $('#begin').attr('disabled', true);
    document.getElementById("answer").disabled = false;
    // $('#anwer').attr('enabled', true);
    document.getElementById("answer").focus();
}, false);


function inputFunction(event) {
    var x = event.which || event.keyCode;       
    if (String.fromCharCode(event.keyCode).toLowerCase() == test_data[j]) {
        rightKey++;
        document.getElementById(test_data[j]).style.backgroundColor = color[test_data[j]];
        document.getElementById("score").innerHTML = "打對: " + rightKey + " 鍵" + "\xa0\xa0\xa0\xa0\xa0";
        ++j;
        question.innerText = test_data[j];
        document.getElementById(test_data[j]).style.backgroundColor = "dimgray";        
        document.getElementById('answer').value = " ";
        document.getElementById("answer").focus();
    }
    else {
        document.getElementById('answer').value = String.fromCharCode(event.keyCode);
    }
}



// $(document).ready(function () {
//     $("#answer").keydown(function (event) {
//         var inputValue = event.which;
//         // allow letters and whitespaces only.
//         if (!(inputValue >= 65 && inputValue <= 120)) {
//             event.preventDefault();
//         }
//     });
// });

