// Stockage dans la constante 'dataLowercase' toutes les lettres minuscules de l'alphabet 
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
/* Stockage dans la constante 'dataUppercase' toutes les lettres majuscules de l'alphabet 
On reprend la constante 'dataLowercase' pour passer les caractères en majuscule*/ 
const dataUppercase = dataLowercase.toLocaleUpperCase();
// Stockage dans la constante 'dataNumbers' tous les numéros de 0 à 9 
const dataNumbers = "0123456789";
// Stockage dans la constante 'dataSymbols' certains symboles présents sur le clavier 
const dataSymbols = "&?,.;/:§!%ù*^$+";
// Stockage dans la constante 'rangeValue' la longueur du mot de passe séléctionné par l'utilisateur 
const rangeValue = document.getElementById('password-length');
// Stockage dans la constante 'passwordOutput' le résultat du mot de passe avec les critères demandés
const passwordOutput = document.getElementById("password-output");


function generatePassword()
{
    let data = [];
    let password = "";

    // Si l'utilisateur a séléctionné les minuscules, ajout dans le tableau 'data' les lettres minuscules 
    if(lowercase.checked) data.push(...dataLowercase);
    // Si l'utilisateur a séléctionné les majuscules, ajout dans le tableau 'data' les lettres majuscules 
    if(uppercase.checked) data.push(...dataUppercase);
    // Si l'utilisateur a séléctionné les nombres, ajout dans le tableau 'data' les nombres 
    if(number.checked) data.push(...dataNumbers);
    // Si l'utilisateur a séléctionné les symboles, ajout dans le tableau 'data' les symboles 
    if(symbols.checked) data.push(...dataSymbols);

    // Si l'utilisateur n'as séléctionné aucunes des conditions pour son mot de passe, affichage d'un message d'erreur
    if(data.length === 0)
    {
        alert('Veuillez selectionner des critères');
        return;
    }

    /* Boucle qui permet d'attribuer des caractères aléatoires suivant la longueur du mot de passe et les conditions 
    demandées par l'utilisateur*/
    for (i = 0; i < rangeValue.value; i++)
    {
        password += data[Math.floor(Math.random() * data.length)];
    }

    // Stockage dans la constante 'passwordOutput' le resultat du mot de passe généré
    passwordOutput.value = password;
}

// Au clic sur le bouton 'generateButton', déclenchement de la fonction 'generatePassword' 
generateButton.addEventListener("click", generatePassword);