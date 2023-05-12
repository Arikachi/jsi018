console.log('arika');

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, query, where } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

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

localStorage.setItem("Signin", false);

let addData = async (final) => {
    try {
        const docRef = await addDoc(collection(db, "final"), final);
        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

localStorage.setItem('exist', false)
let exist = false

let filterData = async (fieldFilter, condition) => {
    try {
        const q = query(collection(db, "final"), where(fieldFilter, "==", condition));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            localStorage.setItem('exist', true)
        });
    } catch (error) {
        console.log(error);
    }
}

let email = document.querySelector(".emailinput")
let password = document.querySelector(".passwordinput")
let submit = document.querySelector(".submit")

submit.addEventListener('click', async(e) => {
    await e.preventDefault()
    await filterData('email', email.value);
    
    if(localStorage.getItem('exist') == 'true'){
        if(password.value == ''){
            alert('please input password')
        }else{
            await localStorage.setItem('exist', false)
            await filterData('password', password.value);
            if(localStorage.getItem('exist') == 'true'){
                await alert('Welcome back')
                await localStorage.setItem("Signin", true);
                window.location.assign('./Home/Homepage.html')
                exist = false
            }else{
                alert('wrong password')
            }
        }
    } else {
        if(email.value == ''){
            alert('please input email')
        } else {
            if(password.value == ''){
                alert('please input password')
            }else{
                let addAccount = {
                    email: email.value,
                    password: password.value
                }
                await addData(addAccount);
                await localStorage.setItem("Signin", true);
                window.location.assign('./Home/Homepage.html')
            }
        }
    }
})