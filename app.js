// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

let coups = 0;
let nbrsChoisi;

// Etape 2 - Cacher l'erreur
error.style.display = 'none'; 
// Etape 3 - Générer un nombre aléatoire
let nombreAlea = Math.floor(Math.random()*1001); //genere un nombre aleatoire!

// Etape 6 - Créer la fonction vérifier

function verifier(nbrs){

    let instruction = document.createElement('div');

    if( nbrs < nombreAlea){
        //c'est plus
        //Ajouter un contenu "#1"(4) c'est plus!
        instruction.textContent =  "#" + coups  + "(" + nbrs +") C'est plus! ";
        // ajouter les classes instructions et plus
        instruction.className = "instruction plus"
        
    }
    else if (nbrs > nombreAlea){
        //c'est moins 
        //Ajouter un contenu "#1"(4) c'est moins!
        instruction.textContent =  "#" + coups  + "(" + nbrs +") C'est moins! ";
        // ajouter les classes instructions et moins
        instruction.className = "instruction moins"
        
       
    }
    else{
        //felicitation vous avez trouvez le juste prix
        //Ajouter un contenu "#1"(4) Félicitations!
        instruction.textContent =  "#" + coups  + "(" + nbrs +") félicitation! Vous avez trouvez le juste prix ";
        // ajouter les classes instructions et fin
        instruction.className = "instruction fini"
    }

    //ajouter l'element a la page HTMl devant les autres
    
    document.querySelector('#instructions').prepend(instruction);


    
} 



// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = 'inline';
    }
    else{
        error.style.display = 'none';
    }
});
// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == " " ){
        input.style.borderColor = "red";
    }
    else{
        coups++
        input.style.borderColor = "silver";
        nbrsChoisi = input.value; 
        input.value = '';
        verifier(nbrsChoisi);
    }

});

