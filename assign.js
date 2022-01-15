let state = {
  1: "Arunachal Pradesh",
  2: "Assam",
  3: "Bihar",
  4: "Chattisgarh",
  5: "Dadra & Nagar Haveli and Maharastra",
  6: "Gujarat",
  7: "Haryana",
  8: "Jammu & Kashmir	",
  9: "Jharkhand",
  10: "Karnataka",
  11: "Maharashtra",
  12: "Manipur",
  13: "Meghalaya",
  14: "Mizoram",
  15: "North East States	",
  16: "Nagaland",
  17: "Odisha",
  18: "Punjab",
  19: "Rajasthan",
  20: "Tamil Nadu",
  21: "Telangana",
  22: "Tripura",
  23: "Uttar Pradesh	",
  24: "Uttarakhand",
  25: "West Bengal	",
  26: "Andhra Pradesh",
  27: "Goa",
  28: "Kerala",
  29: "Sikkim",
  30: "Andaman and Nicobar Islands	",
  31: "Dadra & Nagar Haveli and Daman & Diu	",
  32: "Lakshadweep",
  33: "Puducherry",
  34: "Ladakh",
  35: "Delhi",
  36: "Chandigarh",
};



function validate() {
  var n = document.getElementById("name");
  var regEx = /^[a-zA-Z\s]*$/;

  if (!n.value.match(regEx)) {

    document.getElementById("lblError").innerHTML = "Please enter letters and space only";
  }

  //  setTimeout(functionToDisappearInnerHTML, 5000);

}

/**************** this function is to hide error msg afre 5 sec =5000milisec

call this function to setTimeOut() this is inbuilt function
*/
function functionToDisappearInnerHTML() {
  document.getElementById("lblError").innerHTML = " "; //Clears the innerHTML
}


function chkName() {
  var name = document.getElementById("name");

  let nameSplit;
  nameSplit = name.value.split(" ");

  if (nameSplit.length <= 2 || !nameSplit || nameSplit[0].length < 4 || nameSplit[2].length < 4) {

    document.getElementById("lblError").innerHTML = "Name is too short, Name shoud be minimum 2 words and each word 4 character";;


  }
  else {

    document.getElementById("lblError").innerHTML = " ";
  }



}

/*********Email validation */

function emailValidate() {
  var email = document.getElementById("email")
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {

    document.getElementById("lblError2").innerHTML = "Please enter valid Email ex@gmail.com";



  }
  else {
    document.getElementById("lblError2").innerHTML = " ";
  }
}

function phoneNumberFormatter() {
  const inputField = document.getElementById("text");
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
}

function formatPhoneNumber(value) {
  console.log("val--->", value)
  const phoneNumber = value.replace(/[^\d]/g, "");
  //console.log("phoneNumber--->", phoneNumber)
  const phoneNumberLength = phoneNumber.length;

  frstThreeDigit = phoneNumber.slice(0, 3)
  lastFfourDigit = phoneNumber.slice(6, 11)
  //console.log("dasdasaf", frstThreeDigit)
  console.log("lastFfourDigit", lastFfourDigit)

  var regEx = /[a-zA-Z\s]*$/;

  if (!value) return value;
  if (!value.match(regEx)) {
    alert("enter only numbers")
  }

  if (frstThreeDigit >= 621 && frstThreeDigit <= 799) {
    document.getElementById("lblError3").innerHTML = "Reliance Jio";
    document.getElementById("logoo").style.display = "block";
    // document.getElementsById("logoo").style.backgroundImage = "<img src='file:///home/sai/Assignment/images/jio.png'>";
    // alert('file:///home/sai/Assignment/images/jio.png');
    var image = document.getElementById("logoo");
    image.src = "file:///home/sai/Assignment/images/jio.png";
    // var val = Math.floor(1000 + Math.random() * 9000);
    // alert(val);


  }
  else if (frstThreeDigit >= 801 && frstThreeDigit <= 920) {
    document.getElementById("lblError3").innerHTML = "Idea";
    document.getElementById("logoo").style.display = "block";
    var image = document.getElementById("logoo");
    image.src = "file:///home/sai/Assignment/images/vodafone.png";

  }

  else if (frstThreeDigit >= 921 && frstThreeDigit <= 999) {
    document.getElementById("lblError3").innerHTML = "vodafone";
    document.getElementById("logoo").style.display = "block";
    var image = document.getElementById("logoo");
    image.src = "file:///home/sai/Assignment/images/vodafone.png";

  }
  else if (phoneNumberLength < 4) {
    return phoneNumber
  }
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  else {
    return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;

  }




}
function validateForm() {
  var fnm = document.getElementById("name");
  var email = document.getElementById("email");
  var mobile = document.getElementById("text")
  if (fnm.value == "") {
    document.getElementById("lblError").innerHTML = "Please enter full name";
  }
  if (email.value == "") {
    document.getElementById("lblError2").innerHTML = "Please enter email Address";
  }


}

function onSubmit() {
  //validateForm();
  var fnm = document.getElementById("name");
  
  alert(fnm.value);
  
  
  var email = document.getElementById("email");
  var mobile = document.getElementById("text");
  if (fnm.value != "" && email.value != "" && mobile.value != "") {
    window.location.href = "thankYou.html";
    
    
    //  var x=document.getElementById("otp");
    //  x.innerHTML="mitali";
    
    otp = Math.floor(1000 + Math.random() * 9000);
    
    alert("Your One Time Password is " + otp);
    var msg = fnm+" Thank you for your inquiry. A 4 digit verification number has been sent to your phone number:Thank you for your inquiry. please enter in the following box and submit forconfirmation:"
  
    document.getElementsByClassName("msgOtp").innerHTML=msg;

  }

}
let attemp = 0;
function validateOTP() {
  var otpval = document.getElementById("otp")
  if (otpval.value == otp) {
    window.location.href = "http://pixel6.co/";
  } else {
    document.getElementById("otpError").innerHTML =
      "Please enter valid otp." + (2 - attemp) + " attempts remaining.";
    document.getElementsById("otpError").style.color = "red";
    otpval.style = "border-color: red";
    otpval.value = "";
    attemp += 1;
    if (attemp === 3) {
      alert("You enters wrong OTP.");
      window.location.href = "http://pixel6.co/404/";
    }
  }
}




