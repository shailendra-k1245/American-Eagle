function signin(e){
    
    e.preventDefault();

    let formData = document.getElementById("signIn_Form");

    let email = formData.email.value;

    let password = formData.password.value;

    // console.log(email,password);

    let all_users = JSON.parse(localStorage.getItem("users"));

    all_users.forEach(function (user){
        if (email === user.email && password === user.password1){
            alert("Logged in successfully");
            // window.location.href = "./signup.html"
        }
    })
}