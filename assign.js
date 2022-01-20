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

//  setTimeout(functionToDisappearInnerHTML, 5000);

/**************** this function is to hide error msg afre 5 sec =5000milisec

call this function to setTimeOut() this is inbuilt function
*/
function functionToDisappearInnerHTML() {
  document.getElementById("lblError").innerHTML = " "; //Clears the innerHTML
}

function chkName() {
  var name = document.getElementById("name");
  var regEx = /^[a-zA-Z\s]*$/;
  let nameSplit;
//alert(name.value)
  nameSplit = name.value.split(" ");
  //alert("nameSplit-->" +nameSplit[1])
  document.getElementById("lblError").innerHTML = " ";

  if (!name.value.match(regEx)) {
    document.getElementById("lblError").innerHTML =
      "Please enter letters and space only";
  } else if (
    nameSplit.length < 2 ||
    !nameSplit ||
    nameSplit[0].length <= 4 &&
    nameSplit[1].length <= 4
  ) {
    document.getElementById("lblError").innerHTML =
      "Name is too short, Name shoud be minimum 2 words and each word 4 character";
  }
  // else {
  //   document.getElementById("lblError").innerHTML = " ";
  // }
}

/*********Email validation */

function emailValidate() {
  var email = document.getElementById("email");
  var mailformat = /^[a-z]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  
  if (!email.value.match(mailformat)) {
    document.getElementById("lblError2").innerHTML =
      "Please enter valid Email ex@gmail.com";
  } else {
    document.getElementById("lblError2").innerHTML = " ";
  }
}

/*******************mobile *************/

function phoneNumberFormatter() {
  const inputField = document.getElementById("text");
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
}

function formatPhoneNumber(value) {
  console.log("val--->", value);
  const phoneNumber = value.replace(/[^\d]/g, "");
  //console.log("phoneNumber--->", phoneNumber)
  const phoneNumberLength = phoneNumber.length;

  frstThreeDigit = phoneNumber.slice(0, 3);
  lastFfourDigit = phoneNumber.slice(6, 11);
  stateCode = phoneNumber.slice(3, 6);
  //alert("statecode---->"+ stateCode.length);
  // console.log("statvode --->", stateCode);
  console.log("lastFfourDigit", lastFfourDigit);

  var regEx = /[a-zA-Z\s]*$/;

  if (!value) return value;
  if (!value.match(regEx)) {
    alert("enter only numbers");
  }
else
  if (frstThreeDigit >= 621 && frstThreeDigit <= 799) {
    document.getElementById("lblError3").innerHTML = "Jio";
    document.getElementById("logoo").style.display = "block";

    var image = document.getElementById("logoo");
    image.src = "./images/jio.png";
  } else if (frstThreeDigit >= 801 && frstThreeDigit <= 920) {
    document.getElementById("lblError3").innerHTML = "Idea";
    document.getElementById("logoo").style.display = "block";
    var image = document.getElementById("logoo");
    image.src = "./images/idea.png";
  } else if (frstThreeDigit >= 921 && frstThreeDigit <= 999) {
    document.getElementById("lblError3").innerHTML = "vodafone";
    document.getElementById("logoo").style.display = "block";
    var image = document.getElementById("logoo");
    image.src = "./images/vodafone.png";
  } else if (frstThreeDigit <= 620) {
    document.getElementById("lblError3").innerHTML = "Invalid number";
  } else if (phoneNumberLength < 4) {
    return phoneNumber;
  }
  if (stateCode.length == 3) {
    if (stateCode >= 000 && stateCode < 027) {
      //document.getElementById("lblstate").innerHTML = Object.values(state)[1];
      document.getElementById("lblstate").innerHTML = Object.values(state)[1];

      document.getElementById("lblstate").innerHTML =Object.values(state)[1];
    }
    else if (stateCode >= 027 && stateCode < 055) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[2];
    }
    else if (stateCode >= 055 && stateCode < 080) {
     document.getElementById("lblstate").innerHTML =Object.values(state)[3];
    }
    else if (stateCode >= 080 && stateCode < 100) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[4];
    }
    else if (stateCode >= 100 && stateCode < 127) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[5];
    }
    else if (stateCode >= 127 && stateCode < 200) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[6];
    }
    else if (stateCode >= 200 && stateCode < 250) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[7];
    }
    else if (stateCode >= 250 && stateCode < 280) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[8];
    }
    else if (stateCode >= 280 && stateCode < 320) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[9];
    }
    else if (stateCode >= 320 && stateCode < 350) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[10];
    }
    else if (stateCode >= 350 && stateCode < 400) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[11];
    }
    else if (stateCode >= 400 && stateCode < 450) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[12];
    }
    else if (stateCode >= 450 && stateCode < 480) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[13];
    }
    else if (stateCode >= 480 && stateCode < 500) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[14];
    }

    else if (stateCode >= 500 && stateCode < 550) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[15];
    }
    else if (stateCode >= 550 && stateCode < 580) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[16];
    }
    else if (stateCode >= 580 && stateCode < 600) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[17];
    }
    else if (stateCode >= 600 && stateCode < 630) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[18];
    }
    else if (stateCode >= 630 && stateCode < 650) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[19];
    }
    else if (stateCode >= 650 && stateCode < 680) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[20];
    }
    else if (stateCode >= 680 && stateCode < 700) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[21];
    }
    else if (stateCode >= 700 && stateCode < 720) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[22];
    }
    else if (stateCode >= 720 && stateCode < 750) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[23];
    }
    else if (stateCode >= 750 && stateCode < 780) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[24];
    }
    else if (stateCode >= 780 && stateCode < 800) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[25];
    }
    else if (stateCode >= 800 && stateCode < 830) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[26];
    }
    else if (stateCode >= 830 && stateCode < 850) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[27];
    }
    else if (stateCode >= 850 && stateCode < 880) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[28];
    }
    else if (stateCode >= 880 && stateCode < 900) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[29];
    }
    else if (stateCode >= 900 && stateCode < 920) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[30];
    }
    else if (stateCode >= 920 && stateCode < 940) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[31];
    }
    else if (stateCode >= 940 && stateCode < 960) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[32];
    }
    else if (stateCode >= 960 && stateCode < 980) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[33];
    }
    else if (stateCode >= 980 && stateCode < 1000) {
      document.getElementById("lblstate").innerHTML =Object.values(state)[34];
    }
    // else if (stateCode >= 000 && stateCode < 100) {
    //   alert(Object.values(state)[35]);
    // }
    // else if (stateCode >= 000 && stateCode < 100) {
    //   alert(Object.values(state)[36]);
    // }
    // else {
    //   alert("fhsdgfds");
    // }
  }
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  } else {
    return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`;
  }
}
function validateForm() {
  var fnm = document.getElementById("name");
  var email = document.getElementById("email");
  var mobile = document.getElementById("text");
  if (fnm.value == "") {
    document.getElementById("lblError").innerHTML = "Please enter full name";
  }
  if (email.value == "") {
    document.getElementById("lblError2").innerHTML =
      "Please enter email Address";
  }
}
var otp;
function onSubmit() {
  //validateForm();
  var fnm = document.getElementById("name");
  var mobile = document.getElementById("text");

  //alert(mobile.value);

  var email = document.getElementById("email");
  var mobile = document.getElementById("text");
  if (fnm.value != "" && email.value != "" && mobile.value != "") {
    // window.location.href =
    //   "thankYou.html?fnm=" +
    //   fnm.value.split(" ")[0] +
    //   "&mobile=" +
    //   mobile.value;

    //DataAddLoad(email.value,mobile.value);

    localStorage.setItem("Name", fnm.value);
    localStorage.setItem("mobile", text.value);

    otp = Math.floor(1000 + Math.random() * 9000);
    alert("Your One Time Password is " + otp);
    localStorage.setItem("otp", otp);

    window.location.href = "thankYou.html";
    // document.getElementById("fname").innerHTML = lastname;
  }
}
function nameLoad() {
  //window.location.href = "thankYou.html";
  let lastname = localStorage.getItem("Name");
  let mobileNum = localStorage.getItem("mobile");

  document.getElementById("fname").innerHTML = lastname.split(" ")[0];
  document.getElementById("mobile_no").innerHTML = mobileNum;
}

var attemp = 3;

function validateOTP() {

  otpvalidate = localStorage.getItem("otp");

  var otpval = document.getElementById("otp");
  if (otpval.value == " ") {
    document.getElementById("otpError").innerHTML = "Please enter valid otp.";

    document.getElementById("otpError").style.color = "red";
  } else if (otpval.value == otpvalidate) {
    window.location.href = "http://pixel6.co/";
  } else {
    if (attemp > 0) {
      attemp--;
      document.getElementById("attempt").innerHTML = attemp;
      document.getElementById("otpError").style.display = "block";
      otpval.value = " ";
      console.log("attemp--->", attemp);
    } else {
      alert("You enters wrong OTP.");
      window.location.href = "http://pixel6.co/404/";
    }
    //document.getElementById("attempt").style.color = "red";
  }
}
