/*=============== SHOW HIDDEN - PASSWORD ===============*/

const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
    
    iconEye.addEventListener('click', () => {
        // Change password to text
        if(input.type === 'password') {
            // Switch to text
            input.type = 'text'

            // Icon change
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            // Change to password
            input.type = 'password'

            // Icon change
            iconEye.classList.add('ri-eye-off-line')
            iconEye.classList.remove('ri-eye-line')
        }
    })
}

showHiddenPass('login-pass', 'login-eye')

/*=============== EMAIL VALIDATION ===============*/
const emailInput = document.getElementById('email-input');
const email = emailInput.value;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function(event) {
    if (!emailRegex.test(email)) {
        event.preventDefault(); // Prevents the form from being submitted
        alert("E-mail inválido!")
      }
});
