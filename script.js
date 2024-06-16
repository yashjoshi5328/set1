function validate() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const msg = document.getElementById("msg").value;
    const error = document.getElementById("error");

    const nameReg = /^[a-zA-Z\s]{6,}$/;
    const mailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear previous errors
    error.innerHTML = "";

    if (name.trim() === "") {
        error.innerHTML = "Name is Required";
        return false;
    }

    if (email.trim() === "") {
        error.innerHTML = "Email is Required";
        return false;
    }

    if (!nameReg.test(name)) {
        error.innerHTML = "Name is Invalid";
        return false;
    }

    if (!mailReg.test(email)) {
        error.innerHTML = "Email is Invalid";
        return false;
    }

    if (phone !== "") {
        if (!/^\d{10}$/.test(phone) && !/^\d{12}$/.test(phone)) {
            error.innerHTML = "Phone is Invalid";
            return false;
        }
    }

    if (msg.trim() !== "") {
        if (msg.trim().length > 500) {
            error.innerHTML = "Message is Invalid";
            return false;
        }
    }

    error.innerHTML="";
    alert("All fields are Correct!!");
    document.getElementById("myform").reset();
    return true;
}
