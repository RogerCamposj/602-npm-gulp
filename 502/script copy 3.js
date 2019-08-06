


if(userName){
    
}


    var salvarDados = function() {
        var userName = document.getElementById('User').value;
        localStorage.setItem('username', `${userName}`)
    }



document.onchange = salvarDados;


