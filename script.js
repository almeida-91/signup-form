let error = document.getElementsByClassName('error');


for (let i=0 ; i<1 ; i++){
    error[i].addEventListener('keypress', checkpw);
}

function checkpw(){
    let error = document.getElementsByClassName('error');
    let errortext = document.getElementById('errortext');
    if (error[1].value != error[0].value) {
        errortext.textContent = 'Passwords do not match!';
    } else {
        errortext.textContent = '';
    }
}