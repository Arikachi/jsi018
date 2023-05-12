import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEp2_C6ZjW1fGtonVuEZGU5rTrvTdK2nQ",
  authDomain: "jsi018.firebaseapp.com",
  projectId: "jsi018",
  storageBucket: "jsi018.appspot.com",
  messagingSenderId: "800952059305",
  appId: "1:800952059305:web:b5f84163d797804b10b0b8",
  measurementId: "G-S05WY9E9SG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let addData = async(info) => {
  try {
      const docRef = await addDoc(collection(db, "info"), info);
      console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

const submit = document.querySelector('.submit')
const fname = document.querySelector('.f-name')
const lname = document.querySelector('.l-name')
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')
const message = document.querySelector('.message')

submit.addEventListener('click', async(e) => {
    await e.preventDefault()
    let addAccount = {
        email: email.value,
        fname: fname.value,
        lname: lname.value,
        message: message.value,
        phone: phone.value,
  }
    await addData(addAccount);
    await alert('Thank you for your opinion')
    location.reload()
})