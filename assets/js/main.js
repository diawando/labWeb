document.onload{


    function verification(){
        let password = document.getElementById("mdp");
        let confirmation = document.getElementById("cmdp");
        let confirDiv = document.querySelector(".confirmationmdp");
   
        if (password != confirmation){
            let span = document.createElement('span');
            span.setAttribute('id', 'alert');
            let message = "Votre mot de passe ne correspond pas";
            span.innerHTML += message;
            confirDiv.appendChild(span);

        }
   }



}

