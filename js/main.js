// *****************************
// ********* FONCTIONS *********
// *****************************



// Trier les réponses dans un ordre aléatoire :
function shuffle(array)
{
    // Créer une copie du tableau array pour ne pas perdre l'ordre du tableau d'origine après l'affichage en aléatoire
    let arrayCopy = [];
    for (i = 0; i < arrayCopy.length; i++) {
    arrayCopy[i] = array[i];
    }

    // Mélanger la copie du tableau
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    };   

    // Retourner la copie du tableau
    return arrayCopy;    
};



// Récupérer "label" de l'élément sélectionné et le ranger dans un tableau
function checkAnswer(event)
{
    // Vérifier si l'élément actuel est sélectionné en utilisant l'attribut "checked"
    // Parcourir les réponses sélectionnées par l'utilisateur
    

    let answerChecked=document.querySelector("#question-"+currentIndex+" input:checked");

    // Si data-rightanswer=0 => ajout classe "wrong"

    let falseAnswer=document.querySelector("#question-"+currentIndex+" input:checked + label");

    if(answerChecked.dataset.rightanswer=="0"){
        falseAnswer.classList.add('wrong');
    };

    // Checker chaque réponse qui a un attribut data-rightanswer=1 
    // Ajouter au label qui suit la classe "right"

    let rightAnswer=document.querySelector('#question-'+currentIndex+' input[data-rightanswer="1"] + label');
    rightAnswer.classList.add('right');

    // On affiche le commentaire qui était masqué
    comment = document.querySelector('#comment-'+currentIndex);
    showElt(comment); // RENOMMER EN COMMENT

    // On affiche le bouton suivant qui était masqué
    if(currentIndex<questions.length-1)
    {
        // Dernier affichage sur avant-dernière question
        showElt(next);
    } else {
        form.innerHTML += 'Merci d\'avoir joué !';
    };


};


// Supprimer la classe "hidden"
function showElt(elt)
{
    console.log(elt);
    elt.classList.remove("hidden");
};

// Ajouter classe hidden
function hideElt(elt)
{
    console.log(elt);
    elt.classList.add("hidden");
};


// Ajouter +1
function nextQuestion()
{
    currentIndex++;
    form.innerHTML = '';
    refresh();
    hideElt(next);
};


// Afficher la question courante
function refresh()
{
    html = questions[currentIndex].toHTML();
    form.innerHTML = html;
};




// **********************************
// ********* CODE PRINCIPAL *********


let currentIndex = 0;
const form=document.querySelector("#form");
let comment = document.querySelector('p.hidden');
let next = document.querySelector("#next");
let submit=document.querySelector('#button');

// Lors du clic sur le bouton next, on affiche la question+1
next.addEventListener('click',nextQuestion);


// 2. On prépare la question
for(let i=0;i<questions.length;i++){

    // 1. Mélanger et afficher les réponses de manière aléatoire
    let answersCopy=shuffle(questions[i].answers);

    // On affiche le html de la question[0]
    questions[i]=new Question(i,questions[i].content,questions[i].type,questions[i].answers,questions[i].comment);
    refresh();

    // Placer un écouteur sur le bouton "submit"
    // On checke les réponses
    submit.addEventListener('click',checkAnswer);

};