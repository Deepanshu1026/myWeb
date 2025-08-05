// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAU7ldBTC2wAS6zdp8K7LkUnk0ghEsHePs",
  authDomain: "auth-5ccab.firebaseapp.com",
  projectId: "auth-5ccab",
  storageBucket: "auth-5ccab.firebasestorage.app",
  messagingSenderId: "955836239142",
  appId: "1:955836239142:web:b596bc19fb8b9198eb05e7",
  measurementId: "G-5MMRNGFJFY"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Optional: replace with your icon
  });
});
