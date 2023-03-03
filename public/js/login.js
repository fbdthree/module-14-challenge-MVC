async function signupHandler(e){
e.preventDefault();
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
const username = usernameEl.value.trim()
const password = passwordEl.value.trim()

const userValid = usernameEl.checkValidity()
usernameEl.reportValidity()
const passwordValid = passwordEl.checkValidity()
passwordEl.reportValidity()
if(userValid && passwordValid){
    const response = await fetch('/api/user/', {
        method: 'post',
        body: JSON.stringify({
            username,
            password
        }),
        headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok){
        document.location.replace('/dashboard')
    }else {
        alert(response.statusText)
    }
}
}
// constraint validators html input elements
document.getElementById("login-form").addEventListener('submit', signupHandler);