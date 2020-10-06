
window.onload = ShowHello;
function ShowHello() {
  loadtime = new Date().toLocaleString()
  document.getElementById('ShowBox').innerHTML = loadtime;
};

ck = null;
var count = 0;
var dbcount = 0;
document.addEventListener('DOMContentLoaded', function () {
  // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    // document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
  var db = firebase.firestore();

  //讀取資料筆數 
  let unsubscribe = db.collection('message')
    .onSnapshot(querySnapshot => { 
      count = querySnapshot.size; 
    })

  // db.collection("message")
  //   .get()
  //   .then(function (querySnapshot) {
  //     count = querySnapshot.size;
  //     console.log(count);
  //   });

  // 新增資料
  ck = function save2firestore(collection, doc, jsonObject) {
    jsonObject['time'] = new Date().toLocaleString();
    db.collection(collection).doc(doc)  // 沒有collection或doc 會自己建立，如果有會更新
      .set(jsonObject)
      .then(() => {
        console.log("save")
      });
    // .then(function (docRef) {
    //   console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function (error) {
    //   console.error("Error adding document: ", error);
    // });
  }
});


// submit 開始 

// document.querySelector('#submit').addEventListener('click', () => {
function go2IndexPage() {
  el = document.querySelector('form')
  let jsonObject = {};
  for (let field of el.elements) {
    if (field.name) {
      if (field.name == 'privacy') {
        jsonObject[field.name] = field.checked;
      }
      else {
        jsonObject[field.name] = field.value;
      }
    }
  }
  count = Number(count) + 1;
  ck('message', count.toString(), jsonObject);
};

