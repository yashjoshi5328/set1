function Calculate() {
    const number = document.getElementById('number').value;
    const output = document.getElementById('output');
    const error = document.getElementById('error');

    const posIntReg = /^\d+$/;

    // Clear previous errors
    error.innerHTML = "";

    if (!posIntReg.test(number)) {
        error.innerHTML = "Input is Invalid";
        return false;
    }

    const numValue = parseInt(number, 10);

    if (numValue > 100) {
        error.innerHTML = "Input should be less than or equal to 100";
        return false;
    }

    let fact = 1;
    for (let i = 1; i <= numValue; i++) {
        fact *= i;
    }

    output.value = fact;
    return true;
}
