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






// Fonction check: 
// Récupérer "label" de l'élément sélectionné et le ranger dans un tableau


function check(event)
{
    
    // Vérifier si l'élément actuel est sélectionné en utilisant l'attribut "checked"
    // Parcourir les réponses sélectionnées par l'utilisateur
    
    for(let i=0;i<questions.length;i++){
        let answerChecked=document.querySelector("#question-"+i+" input:checked");

        // Si data-rightanswer=0 => ajout classe "wrong"

        let falseAnswer=document.querySelector("#question-"+i+" input:checked + label");

        if(answerChecked.dataset.rightanswer=="0"){
            falseAnswer.classList.add('wrong');
        };
    };


    // Checker chaque réponse qui a un attribut data-rightanswer=1 
    // Ajouter au label qui suit la classe "right"

    let rightAnswer=document.querySelectorAll('input[data-rightanswer="1"] + label');

    for(let i=0;i<rightAnswer.length;i++){
        rightAnswer[i].classList.add('right');
    }; 


    // Supprimer la classe "hidden" des comment pour les afficher    
    let p=document.querySelectorAll('p.hidden');
    for(let i=0;i<p.length;i++){
        p[i].classList.remove("hidden");
    };

};




// *****************************
// ********* VARIABLES *********
// *****************************

// DE QUOI AI-JE BESOIN ?

// Des questions + des réponses :

let questions = [
    {
        content: "Pourquoi les chats miaulent-ils?",
        type: "radio",
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
        content: "Quel chat retrouve-t-on le plus?",
        type: "radioImg",
        answers: [
            {label:"Le chat gris",
            rightAnswer:"1",img:"grey-cat.jpg"},
            {label:"Le chat tricolore",
            rightAnswer:"0",img:"tricolor-cat.jpg"},
            {label:"Le chat noir",
            rightAnswer:"0",img:"black-cat.jpg"}
        ],
        comment: "Dans la nuit tous les chats sont gris !"
    },
    {
        content: "Quelle est la vitesse maximale atteinte par un chat lorsqu'il court?",
        type: "radio",
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
        type: "radio",
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
        type: "radio",
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

// Créer une classe Question :
// Créer le code HTML de chaque question

class Question{
    constructor(
        indice,
        content,
        type,
        answers,
        comment,)
        {
            this.indice=indice;
            this.content=content;
            this.type=type;
            this.answers=answers;
            this.comment=comment;
        };   

    toHTML()
    {   
        
        // Afficher les réponses de manière aléatoire
        let answersCopy=shuffle(this.answers);
        let html =
            `<fieldset class="questions ${this.type}" id="question-${this.indice}">
            <legend class="legend">${this.content}</legend>
            `;

        let uniqId=Date.now()+Math.floor(Math.random()*1000);

        for(let indiceAnswers=0; indiceAnswers<answersCopy.length;indiceAnswers++){
            if(this.type=="radio"){
                html+=
                    `<div class="answers">
                        <input type="radio" name="answer${uniqId}" class="answer" data-rightAnswer="${answersCopy[indiceAnswers].rightAnswer}"> 
                        <label for="answer">${answersCopy[indiceAnswers].label}</label>
                    </div>`;
            }else if(this.type=="radioImg"){
                html+=
                    `<div class="answers">
                        <input type="radio" name="answer${uniqId}" class="answer" data-rightAnswer="${answersCopy[indiceAnswers].rightAnswer}"> 
                        <label for="answer">
                            <figure>
                                <img src="img/${answersCopy[indiceAnswers].img}" alt="${answersCopy[indiceAnswers].label}">
                                <figcaption>${answersCopy[indiceAnswers].label}</figcaption>
                            </figure>
                        </label>
                    </div>`;
            };
        };
        html+=
            `<p class="hidden"><i class="fa-solid fa-cat"></i> ${this.comment}</p>
            </fieldset>`;
        return html;
    }
        
};


// Créer une classe Quizz
// Afficher les questions une par une


class Quizz{
    constructor(
        questions
    )
    {
        this.questions=shuffle(questions);
        for(let i=0;i<this.questions.length;i++){
            this.questions[i]=new Question(i,this.questions[i].content,this.questions[i].type,this.questions[i].answers,this.questions[i].comment)
        };

        const form=document.querySelector("#form");
        for(let i=0;i<this.questions.length;i++)
        {
            form.innerHTML+=this.questions[i].toHTML();
        };


        // Placer un écouteur sur le bouton "submit"

        let submit=document.querySelector('#button');
        submit.addEventListener('click',check);
    }; 
};



// **********************************
// ********* CODE PRINCIPAL *********
// **********************************


const quizz=new Quizz(questions);

