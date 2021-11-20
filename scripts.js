function handleLogin(){
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  if(username === 'jbmu45' && password === 'password'){
   document.querySelector('#login').style.display = 'none'
   document.querySelector('#info').style.display = 'block'
  }
}

function handleLogout(){
   document.querySelector('#login').style.display = 'block'
   document.querySelector('#info').style.display = 'none'
}
