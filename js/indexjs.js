/*$(".btn").on("click", function() {
  $(".menu").toggleClass("show");
});*/
  var config = {
    apiKey: "AIzaSyBGBESXDzB8RQ135D4V8JKzpFNJdweQX2I",
    authDomain: "kentia2-8d3ac.firebaseapp.com",
    databaseURL: "https://kentia2-8d3ac.firebaseio.com",
    projectId: "kentia2-8d3ac",
    storageBucket: "kentia2-8d3ac.appspot.com",
    messagingSenderId: "242158495992"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var apellido = getInputVal('company');
  var email = getInputVal('email');
  var pais = getInputVal('phone');
  var opinion = getInputVal('message');

  // Save message
  saveMessage(name, apellido, email, pais, opinion);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nombre, apellido, email, pais, opinion){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nombre: nombre,
    apellido:apellido,
    email:email,
    pais:pais,
    opinion:opinion
  });
}