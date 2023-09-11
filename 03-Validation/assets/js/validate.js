function validate(e) {
    e.preventDefault();
    /* variables for each form elements */
        // document.formName.fieldName.value;
    var name = document.cForm.name.value;
    var email = document.cForm.email.value;
    var mobile = document.cForm.mobile.value;
    var city = document.cForm.city.value;
    var gender = document.cForm.gender.value;
    var lang = [];
    var checkOpt = document.getElementsByName("lang[]");
    for(var i=0; i< checkOpt.length; i++) {
        if(checkOpt[i].checked) {
            // populate lang array with selected input values
            lang.push(checkOpt[i].value);
        }
    }

    // console.log('lang =', lang)
  
    /* define an error variables */ 
    var nameErr = emailErr = mobileErr = genderErr = langErr = true;
    // var nameErr = true;
    // var emailErr = true;
    // var mobileErr = true;
    // var genderErr = true;
    // var langErr = true;

    /* name validation */ 
    if(name === ""){
        printError("nameErr", "Name field Cannot be Empty");
    } else {
        let regex = /^[a-z A-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Please Enter a Valid Name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    /* email validation */ 
    if(email === ""){
        printError("emailErr", "Email field Cannot be Empty");
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Invalid Email Id");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    /* mobile validation */ 
    if(mobile === ""){
        printError("mobileErr", "Mobile field Cannot be Empty");
    } else {
        let regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Invalid Mobile Number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    /* city validation */ 
    if(city === "null") {
        printError("cityErr", "Please Select City Name");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }

    /* gender validation */ 
    if(gender === "") {
        printError("genderErr", "Please Select Gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    /* language validation */ 
    if(lang.length === 0) {
        printError("langErr", "Please Select Language");
    } else {
        printError("langErr", "");
       langErr = false;
    }

    if((nameErr && emailErr && mobileErr && genderErr && cityErr && langErr) === false) {
        let data = {
            name: name,
            email: email,
            mobile: mobile,
            gender: gender,
            city: city,
            language: lang
        };
        console.log('data =', data);
    }
}

/* defining a function to display the error message */
function printError(eleId,msg) {
    document.getElementById(eleId).innerText = msg;
}