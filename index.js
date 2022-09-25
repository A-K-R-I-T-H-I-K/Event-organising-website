const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const zip = document.getElementById('zip');
const mobile = document.getElementById('mobile');
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});
mobile.onfocus = function() {
  document.getElementById("message4").style.display = "block";
}
mobile.onblur = function() {
  document.getElementById("message4").style.display = "none";
}
zip.onfocus = function() {
  document.getElementById("message3").style.display = "block";
}
zip.onblur = function() {
  document.getElementById("message3").style.display = "none";
}
email.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
email.onblur = function() {
  document.getElementById("message").style.display = "none";
}
password.onfocus = function() {
  document.getElementById("message1").style.display = "block";
}
password.onblur = function() {
  document.getElementById("message1").style.display = "none";
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidPassword = password => {
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(String(password));
}
const isValidEmail = email => {
    const re = /^([a-zA-Z0-9\.-]+)@(vit)(.)+\.(ac)(\.in)$/;
    return re.test(String(email).toLowerCase());
}
const isValidMobile = mobile => {
  const re = /^\d{10}$/;
  return re.test(String(mobile));
}
const isValidZip = zip => {
  const re = /^\d{5}$/;
  return re.test(String(zip));
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const zipValue = zip.value.trim();
    const mobileValue = mobile.value.trim();
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (!isValidPassword(password) ) {
      setSuccess(password);
    } else {
        setSuccess(password);
    }
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    if(zipValue === '') {
      setError(zip, 'Zip code is required');
    } else if (!isValidZip(zipValue)) {
      setSuccess(zip);
    } else {
      setSuccess(zip);
    }
    if(mobileValue === '') {
      setError(mobile, 'Mobile Number is required');
    } else if (!isValidMobile(mobileValue)) {
      setError(mobile, 'Provide a valid Mobile Number');
    } else {
      setSuccess(mobile);
    }
    alert('Thank You for Registering');
};