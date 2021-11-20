const spinner = `<div class="loader">Loading...</div>`
const loginBtnText = '<text style="margin-left:8px">Sign In</text>'
const loginBtn = document.querySelector('#loginBtn');
const login =    document.querySelector('#login')
const info =    document.querySelector('#info')
const loginFailure = document.querySelector('#loginFailure');


function handleLogin(){
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  if(username === 'jbmu45' && password === 'password'){
   loginBtn.innerHTML =  `${spinner}${loginBtnText}`
   setTimeout(()=>{
	   login.style.display = 'none'
	   info.style.display = 'block'
	   loginFailure.style.display = 'block';
	      loginBtn.innerHTML =  `${loginBtnText}`

   },3000)
  } else {
    loginFailure.style.display = 'block';
  }
}

function handleLogout(){
   login.style.display = 'block'
   info.style.display = 'none'
   loginFailure.style.display = 'none';
}

