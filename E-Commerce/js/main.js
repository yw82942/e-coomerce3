let errorel = document.getElementById('error');
let form = document.getElementById('form');
let text = document.getElementById('text');
let pass = document.getElementById('pass');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(e) {
    let error = [];
    if(text.value ==='' || text.value == null){
error.push('Please enter Email or Phone Number');
    }
    
    if(pass.value === '' || pass.value == null){
        error.push('Please enter Password');
    }

    if(pass.value === "password"){
        error.push('password cannot be "password"');
    }
  if(error.length >0){
    e.preventDefault();
    errorel.innerHTML = error.join('<br>');
  }
})