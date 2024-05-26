const firstNameCon = document.querySelector(".name");
const firstName = document.getElementById("First-Name");

const lastNameCont = document.querySelector(".last-name");
const lastName = document.getElementById("last-Name2");

const emailCont = document.querySelector(".second-section");
const emailInput = document.getElementById("email");

const messContiner = document.querySelector(".fouth-section");
const Message = document.getElementById("Message");

const checkpar = document.querySelector(".ch-all");
const checkbox  = document.getElementById("checkbox");

const radiocontainer = document.querySelector(".third-section");
const firstradio = document.getElementById("unique1");
const firstcontai = document.querySelector(".query1");
const secondradio = document.getElementById("unique");
const secondcontai = document.querySelector(".query2");


const butt = document.getElementById("butt");
let elementCreated = false;
let elementCreated2 = false;
let elementCreated3 = false;
let elementCreated4 = false;
let elementCreated5 = false;
let elementCreated6 = false;

butt.addEventListener("click",function(e){

  e.preventDefault()
  let inuptOne = firstName.value;
  let p1 = document.createElement("p")
  p1.className = "p1"
  p1.innerHTML = "This field is required"

  let inputTwo = lastName.value;
  let p2 =document.createElement("p")
  p2.className = "p1";
  p2.innerHTML = "This field is required"

  let messageInput = Message.value;
  let p3 = document.createElement("p")
  p3.className = "p1"
  p3.innerHTML = "This field is required"

  let emailInp = emailInput.value;
  let p4 = document.createElement("p");
  p4.className = "p1"
  p4.innerHTML = "Please enter a valid email address"

  let p5 = document.createElement("p");
  p5.className = "p1";
  p5.innerHTML = "To submit this form please consent to being contacted"

  let p6 = document.createElement("p");
  p6.className = "p1";
  p6.innerHTML = "Please select aquery Type"

  if(inuptOne === ""){
    if(!elementCreated){
      firstNameCon.appendChild(p1)
      elementCreated = true;
    }
    firstName.style.border = "2px solid red";
  }
  else{
    firstName.style.border = "0.5px solid"
    firstNameCon.removeChild(firstNameCon.children[3])
  }

  if(inputTwo === ""){
    if(!elementCreated2){
      lastNameCont.appendChild(p2)
      elementCreated2 = true;
    }
    lastName.style.border = "2px solid red";
  }
  else{
    lastName.style.border = "0.5px solid"
    lastNameCont.removeChild(lastNameCont.children[3])
  }

  if(messageInput === ""){
    if(!elementCreated3){
      messContiner.appendChild(p3)
      elementCreated3 = true;
    }
    Message.style.border = "2px solid red";
  }
  else{
    Message.style.border = "0.5px solid"
    messContiner.removeChild(messContiner.children[3])
  }
  console.log(emailInp)
  if(  !( /@/.test(emailInp))){
    if(!elementCreated4){
      emailCont.appendChild(p4)
      elementCreated4 = true;
    }
    emailInput.style.border = "2px solid red";
  }
  else{
    emailInput.style.border = "0.5px solid"
    emailCont.removeChild(emailCont.children[4])
  }

    let checked1 = checkbox.checked
    console.log('Checkbox checked state:', checked1);
  if(!checked1){
    if(!elementCreated5){
      checkpar.appendChild(p5)
      elementCreated5 = true;
    }
  }
  else{
    checkpar.removeChild(checkpar.children[1])
  }

  if(!firstradio.checked && !secondradio.checked){
    if(!elementCreated6){
      radiocontainer.appendChild(p6)
      elementCreated6 = true;
    }
  }
  else{
    radiocontainer.removeChild(radiocontainer.children[3])
    if(firstradio.checked){
      firstcontai.style.backgroundColor = "rgb(223, 241, 231)";
    }
    else{
      secondcontai.style.backgroundColor = "rgb(223, 241, 231)";
    }
  }

  
})