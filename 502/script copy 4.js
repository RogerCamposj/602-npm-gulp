

var armazenamento = localStorage.getItem()
if(userName){
    
}


    var salvarDados = function() {
        var userName = localStorage.setItem('User');
        document.getElementById('User').value = userName;
    }



document.onchange = salvarDados;


