const firebaseConfig = {
  apiKey: "AIzaSyAo0zYNRGCa-XaNZgqTijz0P6uz_76pKGQ",
  authDomain: "coffee-farm-ai.firebaseapp.com",
  projectId: "coffee-farm-ai",
  storageBucket: "coffee-farm-ai.firebasestorage.app",
  messagingSenderId: "450326520755",
  appId: "1:450326520755:web:19e3ed232f919adf6aa1c6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
