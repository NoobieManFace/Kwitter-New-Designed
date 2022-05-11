var firebaseConfig = {
      apiKey: "AIzaSyATCZxKH0DXySj1gKyt_mZuKJngMeQfdb0",
      authDomain: "kwitter-console-test.firebaseapp.com",
      databaseURL: "https://kwitter-console-test-default-rtdb.firebaseio.com",
      projectId: "kwitter-console-test",
      storageBucket: "kwitter-console-test.appspot.com",
      messagingSenderId: "500027391195",
      appId: "1:500027391195:web:ec4fc6329212068a1360fe",
      measurementId: "G-J9K39DBBV3"
};

firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
