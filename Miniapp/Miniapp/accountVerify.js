// 🔥 Telegram Username Input
let telegramUsername = prompt("Enter your Telegram username");

// 🔹 Upload Screenshot Function
function sendScreenshot(){

  const file = document.getElementById("file").files[0];

  if(!file){
    alert("Upload screenshot first");
    return;
  }

  // 🔥 Firebase Storage এ Upload
  const uploadTask = storage
    .ref('payments/' + telegramUsername + '_' + file.name)
    .put(file);

  uploadTask.on('state_changed',

    // Progress (optional)
    snapshot => {},

    // Error
    error => {
      console.error(error);
      alert("Upload failed");
    },

    // Success
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then(url => {

        // 🔥 Firestore এ Save
        db.collection('users').doc(telegramUsername).set({
          screenshotURL: url,
          accountStatus: "pending",
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
          document.getElementById('status').innerText =
          "✅ Submitted — Waiting for approval";
        });

      });
    }
  );
}


// 🔹 Check Account Status
db.collection('users').doc(telegramUsername).get()
.then(doc => {

  if(doc.exists && doc.data().accountStatus === "approved"){
    enableMenu();
  }

});


// 🔹 Enable Menu Function
function enableMenu(){

  // Verify box hide
  document.getElementById("account-verify").style.display = "none";

  // Menu enable
  const buttons = document.querySelectorAll("#menu button");
  buttons.forEach(btn => btn.classList.remove("disabled"));

}
