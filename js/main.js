// *****************************
// ********* FONCTIONS *********
// *****************************

// Trier les réponses dans un ordre aléatoire :

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


// Y appliquer la fonction shuffle, à la fois pour les questions et pour les réponses de chaque question :
// Créer des boutons radio devant chaque réponse :
// Y construire le code HTML des questions+réponses :

function toHTML(question)
{   
    let answersCopy=shuffle(question.answers);
    let html =
        `<fieldset class="questions">
        <legend class="legend">${question.content}</legend>
        `;
    let uniqId=Date.now()+Math.floor(Math.random()*1000);
    for(let indice=0; indice<answersCopy.length;indice++){
        html+=
            `<div class="answers">
            <input type="radio" name="answer${uniqId}" class="answer" data="${answersCopy[indice].rightAnswer}"> 
            <label for="answer">${answersCopy[indice].label}</label>
            </div>`;
    };
    html+=
        `<p class="hidden">${question.comment}</p>
        </fieldset>`;
    const form=document.body.querySelector("#form");
    form.innerHTML+=html;
};



// Fonction answersGaver: Parcourir les réponses sélectionnées par l'utilisateur

// Vérifier si l'élément actuel est sélectionné en utilisant l'attribut "checked"
// if (element.classList.contains('.checked')==true)

// Récupérer "answersCopy[indice].label" de l'élément sélectionné et le ranger dans un tableau "choices" (.push())

// function answersGaver(event)
// {

// };



// *****************************
// ********* VARIABLES *********
// *****************************

// DE QUOI AI-JE BESOIN ?

// Des questions + des réponses :

let questions = [
    {
        content: "Pourquoi les chats miaulent-ils?",
        answers: [
            {label:"Pour attirer votre attention",rightAnswer:"1"},
            {label:"Parce qu'ils sont bons chanteurs",
            rightAnswer:"0"},
            {label:"Pour vous casser les oreilles",
            rightAnswer:"0"}
        ],
        comment: "Il donne sa langue au chat !"
    },
    {
        content: "Quelle est la couleur la plus commune des chats?",
        answers: [
            {label:"gris",
            rightAnswer:"1"},
            {label:"tricolore",
            rightAnswer:"0"},
            {label:"noir",
            rightAnswer:"0"}
        ],
        comment: "Dans la nuit tous les chats sont gris !"
    },
    {
        content: "Quelle est la vitesse maximale atteinte par un chat lorsqu'il court?",
        answers: [
            {label:"48 km/h",
            rightAnswer:"1"},
            {label:"10 km/h",
            rightAnswer:"0"},
            {label:"2 km/h",
            rightAnswer:"0"}
        ],
        comment: "Parfait pour jouer au chat et à la souris !"
    },
    {
        content: "Ont-ils peur de l’eau ?",
        answers: [
            {label:"L'eau n'est pas sa meilleure amie",
            rightAnswer:"1"},
            {label:"Cela dépend de sa couleur",
            rightAnswer:"0"},
            {label:"Bien sûr, il vit même dans un aquarium",
            rightAnswer:"0"},
        ],
        comment: "Chat échaudé craint l'eau froide !"
    },
    {
        content: "La plupart du temps, pourquoi mon chat vomit-il ?",
        answers: [
            {label:"A cause d'une boule de poils qui le gêne",
            rightAnswer:"1"},
            {label:"Parce que sa maison est trop propre",
            rightAnswer:"0"},
            {label:"Pour vous mettre au travail",
            rightAnswer:"0"},
        ],
        comment: "Il avait sûrement un chat dans la gorge !"
    }
];

// Créer une classe :

class Question{
    constructor(
        content,
        answers,
        comment)
        {
            this.content=content;
            this.answers=answers;
            this.comment=comment;
        };   
};




// **********************************
// ********* CODE PRINCIPAL *********
// **********************************


questions=questions.map(question => {
    return new Question(question.content,question.answers,question.comment)
});


// Afficher les questions de manière aléatoire
// Afficher les réponses de manière aléatoire

let questionsCopy=shuffle(questions);
for(let i=0;i<questionsCopy.length;i++)
{
    toHTML(questionsCopy[i]);
};


// Placer un écouteur sur le bouton "submit"

const submit=document.querySelector('#button');
submit.addEventListener('click',answersGaver);




