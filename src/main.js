import { createApp } from "vue";
import { createPinia } from "pinia";
// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import App from "./App.vue";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyD3iqTnwoTwraK5H2S_SaDTic-UJl8GMDI",
  authDomain: "csmju-8424c.firebaseapp.com",
  projectId: "csmju-8424c",
  storageBucket: "csmju-8424c.appspot.com",
  messagingSenderId: "445155589037",
  appId: "1:445155589037:web:c4c2beaff9008e06f07f24",
  measurementId: "G-WJ28Y8FYT1",
};

const initfirestore = initializeApp(firebaseConfig);
export const db = getFirestore(initfirestore);
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
