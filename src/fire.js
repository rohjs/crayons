import firebase from 'firebase'

var config = { 
  apiKey: "AIzaSyDco2xG0mVLFctYGd5WfXAs79l3VpWD_g4",
  authDomain: "crayons-744e6.firebaseapp.com",
  databaseURL: "https://crayons-744e6.firebaseio.com",
  projectId: "crayons-744e6",
  storageBucket: "crayons-744e6.appspot.com",
  messagingSenderId: "211890910579"
}

var fire = firebase.initializeApp(config)

export default fire