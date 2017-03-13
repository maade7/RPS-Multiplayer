// Initialize Firebase
var config = {
    apiKey: "AIzaSyBydw4uMkpFM0ow4XGYK-3NPArBJsUu_7E",
    authDomain: "rps-multiplayer-53a08.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-53a08.firebaseio.com",
    storageBucket: "rps-multiplayer-53a08.appspot.com",
    messagingSenderId: "670853190757"
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

var userName = "";
var scoreP1 = "";
var scoreP2 = "";
var tie = "";
var nameP1 = "";
var nameP2 = "";
var inputChat = "";


$(".userName").val();

$(".user").on("click", function(event) {
    userName = $(".userName").val();
    $(".start").hide();
    if (nameP1 == '') {
        nameP1 = userName;
    } else {
        nameP2 = userName;
    }

    database.ref("players/player2/").set({
        nameP1: nameP1,
        scoreP1: scoreP1
    });
    database.ref("players/player2/").set({
        nameP2: nameP2,
        scoreP2: scoreP2
    });
});


database.ref("players/").once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            nameP1 = (childData.nameP1);
            scoreP1 = (childData.scoreP1);
            nameP2 = (childData.nameP2);
            scoreP2 = (childData.scoreP2);
            key = (childKey);
            // Console.loging the last user's data
            // console.log(childData);



        });
        // Change the HTML to reflect

    },
    // Handle the errors
    function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
