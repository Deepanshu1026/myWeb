<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Firebase Push Notification Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: sans-serif; margin: 2em; background: #f8f9fa; }
    h1 { color: #224488; }
    #tokenArea { margin-top: 24px; word-break: break-all; }
    button { margin: 16px 0; padding: 10px 20px; background: #224488; color: #fff; border: none; border-radius: 5px; font-size: 1em; cursor: pointer;}
    button[disabled] { background: #ccc; cursor: not-allowed; }
    .success { color: #27ae60; }
    .error { color: #e74c3c; }
  </style>
</head>
<body>
  <h1>Firebase Push Notification Integration</h1>
  <p>This demo requests notification permission, shows your FCM registration token, and listens for background/foreground messages.</p>
  <button id="get-token-btn">Enable Push &amp; Show Token</button>
  <div id="tokenArea"></div>
  <!-- Firebase SDKs -->
  <script type="module">
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js';
    import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js';

    // Your Firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyAU7ldBTC2wAS6zdp8K7LkUnk0ghEsHePs",
      authDomain: "auth-5ccab.firebaseapp.com",
      projectId: "auth-5ccab",
      storageBucket: "auth-5ccab.firebasestorage.app",
      messagingSenderId: "955836239142",
      appId: "1:955836239142:web:b596bc19fb8b9198eb05e7",
      measurementId: "G-5MMRNGFJFY"
    };
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);

    const getTokenBtn = document.getElementById('get-token-btn');
    const tokenArea = document.getElementById('tokenArea');

    getTokenBtn.addEventListener('click', async () => {
      getTokenBtn.disabled = true;
      tokenArea.textContent = "Requesting permission...";
      try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
          tokenArea.innerHTML = "<span class='error'>Notification permission denied.</span>";
          getTokenBtn.disabled = false;
          return;
        }
        // TODO: If you use VAPID key, uncomment and add your key below:
        // const vapidKey = 'YOUR_PUBLIC_VAPID_KEY';
        const currentToken = await getToken(messaging /*, { vapidKey }*/);
        if (currentToken) {
          tokenArea.innerHTML = `<div class='success'><b>Your FCM registration token:</b></div><div>${currentToken}</div>`;
        } else {
          tokenArea.innerHTML = "<span class='error'>No registration token found. Request permission to generate one.</span>";
        }
      } catch (err) {
        tokenArea.innerHTML = `<span class='error'>An error occurred: ${err.message}</span>`;
        getTokenBtn.disabled = false;
      }
    });

    // Listen for messages while app is focused
    onMessage(messaging, (payload) => {
      alert('Push notification received:\n' + JSON.stringify(payload));
    });
  </script>
  <!-- FCM service worker registration -->
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('firebase-messaging-sw.js')
          .then(function(registration) {
            console.log('ServiceWorker registered:', registration.scope);
          })
          .catch(function(err) {
            console.log('ServiceWorker registration failed:', err);
          });
      });
    }
  </script>
</body>
</html>
