// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

// Substitua pelos dados do seu projeto Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Função para criar pedido
export const createOrder = async (order) => {
  const ordersCollection = collection(db, "orders");
  const docRef = await addDoc(ordersCollection, {
    ...order,
    createdAt: Timestamp.now()
  });
  return docRef.id;
};
