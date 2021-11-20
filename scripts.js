function handleLogin(){
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  if(username === 'jbmu45' && password === 'password'){
   document.querySelector('#login').style.display = 'none'
   document.querySelector('#info').style.display = 'block'
   document.querySelector('#loginFailure').style.display = 'block';
  } else {
    document.querySelector('#loginFailure').style.display = 'block';
  }
}

function handleLogout(){
   document.querySelector('#login').style.display = 'block'
   document.querySelector('#info').style.display = 'none'
   document.querySelector('#loginFailure').style.display = 'none';
}

function handlePasswordChange(ev){
  if(ev.value.length>0){
    document.querySelector('#loginBtn').disabled = false
  }
}
