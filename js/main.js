// *****************************
// ********* FONCTIONS *********
// *****************************

// Trier les réponses dans un ordre aléatoire
function shuffle(array)
{
    // Créer une copie du tableau array pour ne pas perdre l'ordre du tableau d'origine après l'affichage en aléatoire
    
    let arrayCopy = [];
    for (i = 0; i < array.length; i++) {
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


// Y appliquer la fonction shuffle, à la fois pour les questions et pour les réponses de chaque question

function toHTML(question)
{   
    let answersCopy=shuffle(question.answers);
    let html =
        `<fieldset class="questions">
        <legend class="legend">${question.content}</legend>
        `;
    for(let indice=0; indice<answersCopy.length;indice++){
        html+=
            `<div class="answers">
            <input type="radio" name="" id="answer"> 
            <label for="answer">${answersCopy[indice]}</label>
            </div>`;
    };
    html+=
        `<p class="hidden">${question.comment}</p>
        </fieldset>`;
    const form=document.body.querySelector("#form");
    form.innerHTML+=html;
};


// *****************************
// ********* VARIABLES *********
// *****************************

// DE QUOI AI-JE BESOIN ?

// Des questions + des réponses

let questions = [
    {
        content: "Pourquoi les chats miaulent-ils?",
        answers: ["Pour attirer votre attention","Parce qu'ils sont bons chanteurs","Pour vous casser les oreilles"],
        rightAnswer:0,
        comment: "Il donne sa langue au chat !"
    },
    {
        content: "Quelle est la couleur la plus commune des chats?",
        answers: ["gris","tricolore","noir"],
        rightAnswer:0,
        comment: "Dans la nuit tous les chats sont gris !"
    },
    {
        content: "Quelle est la vitesse maximale atteinte par un chat lorsqu'il court?",
        answers: ["48 km/h","10 km/h","2 km/h"],
        rightAnswer:0,
        comment: "Parfait pour jouer au chat et à la souris !"
    },
    {
        content: "Ont-ils peur de l’eau ?",
        answers: ["L'eau n'est pas sa meilleure amie","Cela dépend de sa couleur","Bien sûr, il vit même dans un aquarium"],
        rightAnswer:0,
        comment: "Chat échaudé craint l'eau froide !"
    },
    {
        content: "La plupart du temps, pourquoi mon chat vomit-il ?",
        answers: ["A cause d'une boule de poils qui le gêne","Parce que sa maison est trop propre","Pour vous mettre au travail"],
        rightAnswer:0,
        comment: "Il avait sûrement un chat dans la gorge !"
    }
];

// Créer une classe
// Créer des boutons radio devant chaque réponse
// Y construire le code HTML des questions+réponses


class Question{
    constructor(
        content,
        answers,
        rightAnswer,
        comment)
        {
            this.content=content;
            this.answers=answers;
            this.rightAnswer=rightAnswer;
            this.comment=comment;
        };   
};


// Des boutons radio à écouter
const choice=document.querySelector('#answer');

// Un bouton "submit"
const submit=document.querySelector('#button');




// **********************************
// ********* CODE PRINCIPAL *********
// **********************************

// A faire:

// Afficher les questions de manière aléatoire
// Afficher les réponses de manière aléatoire
// Placer un écouteur sur les boutons radio
// Placer un écouteur sur le bouton "submit"


questions=questions.map(question => {
    return new Question(question.content,question.answers,question.rightAnswer,question.comment)
});


let questionsCopy=shuffle(questions);
for(let i=0;i<questionsCopy.length;i++)
{
    toHTML(questionsCopy[i]);
};


// let answersCopy=shuffle(question.answers);


// for(let i=0;i<answersCopy.length;i++)
// {
//     toHTML(answersCopy[i]);
// };

console.log(questions);
console.log(questionsCopy);








