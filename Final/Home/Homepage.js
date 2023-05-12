let signout = document.querySelector('.signout')

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, query, where } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbxHaTFhzPY7mDdij5_Bpgfan0tLWPNtQ",
  authDomain: "final-9c3a6.firebaseapp.com",
  projectId: "final-9c3a6",
  storageBucket: "final-9c3a6.appspot.com",
  messagingSenderId: "461822558710",
  appId: "1:461822558710:web:344c3fc7e26e39aa9a07d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let addData = async (email) => {
  try {
      const docRef = await addDoc(collection(db, "email"), email);
      console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

if (localStorage.getItem('Signin') == "false") {
    window.location.assign('../index.html')
}

signout.addEventListener('click', () => {
    localStorage.setItem("Signin", false);
    window.location.assign('../index.html')
})

var gate = document.getElementById("gate");
var playing = false;
var song = document.querySelector('.second-song1')

function audioFunction() {
  playing ? gate.pause() : gate.play();
};

gate.onplaying = function() {
  playing = true;
};
gate.onpause = function() {
  playing = false;
}

song.addEventListener('click', audioFunction)

var fatima = document.getElementById("fatima");
var playing2 = false;
var song2 = document.querySelector('.second-song2')

function audioFunction2() {
  playing2 ? fatima.pause() : fatima.play();
};

fatima.onplaying = function() {
  playing2 = true;
};
fatima.onpause = function() {
  playing2 = false;
}

song2.addEventListener('click', audioFunction2)

var again = document.getElementById("again");
var playing3 = false;
var song3 = document.querySelector('.second-song3')

function audioFunction3() {
  playing3 ? again.pause() : again.play();
};

again.onplaying = function() {
  playing3 = true;
};
again.onpause = function() {
  playing3 = false;
}

song3.addEventListener('click', audioFunction3)

var special = document.getElementById("special");
var playing4 = false;
var song4 = document.querySelector('.second-song4')

function audioFunction4() {
  playing4 ? special.pause() : special.play();
};

special.onplaying = function() {
  playing4 = true;
};
special.onpause = function() {
  playing4 = false;
}

song4.addEventListener('click', audioFunction4)

let items1 = document.querySelector('.sec1')
let icon1 = document.querySelector('.fa-play1')

items1.addEventListener("mouseover", function(){
  icon1.classList.add("appear2");
})

items1.addEventListener("mouseleave", function(){
  icon1.classList.remove("appear2");
})

let items2 = document.querySelector('.sec2')
let icon2 = document.querySelector('.fa-play2')

items2.addEventListener("mouseover", function(){
  icon2.classList.add("appear2");
})

items2.addEventListener("mouseleave", function(){
  icon2.classList.remove("appear2");
})

let items3 = document.querySelector('.sec3')
let icon3 = document.querySelector('.fa-play3')

items3.addEventListener("mouseover", function(){
  icon3.classList.add("appear2");
})

items3.addEventListener("mouseleave", function(){
  icon3.classList.remove("appear2");
})

let items4 = document.querySelector('.sec4')
let icon4 = document.querySelector('.fa-play4')

items4.addEventListener("mouseover", function(){
  icon4.classList.add("appear2");
})

items4.addEventListener("mouseleave", function(){
  icon4.classList.remove("appear2");
})

let email = document.querySelector(".email-follow")
let subcribe = document.querySelector(".submit")

subcribe.addEventListener('click', async(e) => {
  await e.preventDefault()
  let addAccount = {
    email: email.value,
}
  await addData(addAccount);
  await alert('Thank you for subcribing')
  location.reload()
})