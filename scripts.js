const spinner = `<div class="loader">Loading...</div>`
const loginBtnText = '<text style="margin-left:8px">Sign In</text>'
const loginBtn = document.querySelector('#loginBtn');
const login =    document.querySelector('#login')
const info =    document.querySelector('#info')
const loginFailure = document.querySelector('#loginFailure');

const types = {
 a: '1,10,98,656.97 CR',
 b: '32,34,293.32 CR'
}


function timeouts(type){
	   loginBtn.innerHTML =  `${spinner}${loginBtnText}`
   setTimeout(()=>{
	   document.querySelectorAll('.data').forEach(x=>x.innerHTML = types[type])
	   login.style.display = 'none'
	   info.style.display = 'block'
	   loginFailure.style.display = 'block';
	   loginBtn.innerHTML =  `${loginBtnText}`

   },3000)

}

function handleLogin(){
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  if(username === 'jbmu45' && password === 'password'){
   timeouts('a')
  } else if(username === 'jbmu45' && password === 'password1'){
   timeouts('b')
  } else {
    loginFailure.style.display = 'block';
  }
}

function handleLogout(){
   login.style.display = 'block'
   info.style.display = 'none'
   loginFailure.style.display = 'none';
}

