function signup(e){
    e.preventDefault();

    let signup_data = document.getElementById("signup_form");

    let name = signup_data.name.value;

    let email = signup_data.email.value;

    let mobile = signup_data.mobile.value;

    let password1 = signup_data.password.value;

    let password2 = signup_data.password2.value;

    let dob = signup_data.dob.value;
    
    let gender = document.querySelector('input[name = "gender"]:checked').value;


    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    let a=re.test(password1);

    
    if(a==false){
        alert("password should contain at least one digit, one lower case, one upper case and minimum length of 8 character");
        return a;
    }
    if(password1 != password2){
        alert("Password is not same");
        return false;
    }

    // let checked = document.querySelector('input[type = "checkbox"]:checked').value;

    // console.log("name : " + name + " " + "dob:" + dob + " " + "mobile:" + mobile + " " + "email : " + email + " " + "gender : " + gender + " " + "password :" + password + "checked : " + checked);


    if(localStorage.getItem("users") === null){
        localStorage.setItem("users", JSON.stringify([]));
    };

    let user = {
        name,
        dob,
        mobile,
        email,
        gender,
        password1
        // refferal: checked
    }

    // console.log(user);


    let arr = JSON.parse(localStorage.getItem("users"));

    arr.push(user);

    localStorage.setItem("users", JSON.stringify(arr));

}