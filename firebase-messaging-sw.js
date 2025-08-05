importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js');

// Initialize Firebase app in Service Worker using compat version
firebase.initializeApp({
  apiKey: "AIzaSyAU7ldBTC2wAS6zdp8K7LkUnk0ghEsHePs",
  authDomain: "auth-5ccab.firebaseapp.com",
  projectId: "auth-5ccab",
  storageBucket: "auth-5ccab.firebasestorage.app",
  messagingSenderId: "955836239142",
  appId: "1:955836239142:web:b596bc19fb8b9198eb05e7",
  measurementId: "G-5MMRNGFJFY"
});

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification?.title || "Background Message";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: '/firebase-logo.png' // or any static image your site can serve
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
