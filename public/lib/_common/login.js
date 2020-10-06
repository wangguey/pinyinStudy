// firebase function
    document.addEventListener('DOMContentLoaded', function () {
      try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        console.log(`Firebase SDK loaded with ${features.join(', ')}`);
        // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
      } catch (e) {
        console.error(e);
        console.error('Error loading the Firebase SDK, check the console.');
        // document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
      }
    });
  

  let googleLogin = document.getElementById('googleLogin');
  let facebookLogin = document.getElementById('fcbLogin');
  let signIn = document.getElementById('login');

  // google 登入
  googleLogin.addEventListener('click', () => {
    //1. Get a TwitterAuthProvider instance.
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider).then(function (result) {
      console.log(result);
      var user = result.user;
      console.log(user);
      alert('google login');
      window.location.href = '/documents/message.html';
      // window.open('https://www.google.com.tw/');        
    }).catch(function (error) {
      //TODO:  Handle Errors here.
      console.log(error);
    });
  });

  // facebook登入
  facebookLogin.addEventListener('click', () => {
    console.log("will connect using facebook");
    // 1. Get a FacebookAuthProvider instance.
    let facebookProvider = new firebase.auth.FacebookAuthProvider();
    //2. Add some permissions & scopes (optional)
    facebookProvider.addScope('public_profile');
    //3. Make the call
    firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
      var user = result.user;
      console.log(result);
      alert('facebook login');
      window.location.href = '/documents/message.html';
    }).catch(function (error) {
      console.log(error);
    });
  }, false);

  //  other login
  function go2MessagePage() {
    alert('登入完成，開始留言');
    location = '/documents/message.html'
    return false
  }
