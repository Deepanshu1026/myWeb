<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Firebase Push Notification Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: sans-serif; margin: 2em; background: #f8f9fa; }
    h1 { color: #224488; }
    #tokenArea { margin-top: 24px; word-break: break-word; }
    button { margin: 16px 0; padding: 10px 20px; background: #224488; color: #fff; border: none; border-radius: 5px; font-size: 1em; cursor: pointer;}
    button[disabled] { background: #ccc; cursor: not-allowed; }
    .success { color: #27ae60; }
    .error { color: #e74c3c; }
  </style>
</head>
<body>
  <h1>Firebase Push Notification Integration</h1>
  <button id="get-token-btn">Enable Push &amp; Show Token</button>
  <div id="tokenArea"></div>

  <!-- Firebase compat SDKs for main app use -->
  <script src="https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js"></script>
  <script>
    const firebaseConfig = {
      apiKey: "AIzaSyAU7ldBTC2wAS6zdp8K7LkUnk0ghEsHePs",
      authDomain: "auth-5ccab.firebaseapp.com",
      projectId: "auth-5ccab",
      storageBucket: "auth-5ccab.firebasestorage.app",
      messagingSenderId: "955836239142",
      appId: "1:955836239142:web:b596bc19fb8b9198eb05e7",
      measurementId: "G-5MMRNGFJFY"
    };
    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();

    const getTokenBtn = document.getElementById('get-token-btn');
    const tokenArea = document.getElementById('tokenArea');

    getTokenBtn.addEventListener('click', function() {
      getTokenBtn.disabled = true;
      tokenArea.textContent = "Requesting permission...";
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          navigator.serviceWorker.register('firebase-messaging-sw.js')
            .then(function(registration) {
              messaging.getToken({ serviceWorkerRegistration: registration /*, vapidKey: 'YOUR_VAPID_KEY' */})
                .then(function(currentToken) {
                  if (currentToken) {
                    tokenArea.innerHTML = `<div class='success'><b>Your FCM registration token:</b></div><div>${currentToken}</div>`;
                  } else {
                    tokenArea.innerHTML = "<span class='error'>No registration token found. Request permission to generate one.</span>";
                  }
                })
                .catch(function(err) {
                  tokenArea.innerHTML = `<span class='error'>An error occurred: ${err.message}</span>`;
                  getTokenBtn.disabled = false;
                });
            })
            .catch(function(swErr) {
              tokenArea.innerHTML = `<span class='error'>Service Worker Registration Failed: ${swErr.message}</span>`;
              getTokenBtn.disabled = false;
            });
        } else {
          tokenArea.innerHTML = "<span class='error'>Notification permission denied.</span>";
          getTokenBtn.disabled = false;
        }
      });
    });

    // Optional: Listen for foreground messages
    messaging.onMessage(function(payload) {
      alert('Push notification received:\n' + JSON.stringify(payload));
    });
  </script>
</body>
</html>
