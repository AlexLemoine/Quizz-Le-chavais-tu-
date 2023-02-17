// *****************************
// ********* VARIABLES *********


// Tableau de questions + réponses :
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
// Créer le code HTML de la question
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
        let html =
            `<fieldset class="questions ${this.type}" id="question-${this.indice}">
            <legend class="legend">${this.content}</legend>
            `;

        let uniqId=Date.now()+Math.floor(Math.random()*1000);

        // pour chaque réponse
        for(let indiceAnswers=0 ; indiceAnswers<this.answers.length ; indiceAnswers++)
        {
            if(this.type=="radio"){
                // S'il s'agit d'un bouton radio à ajouter
                html+=
                    `<div class="answers">
                        <input type="radio" name="answer${uniqId}" class="answer" data-rightAnswer="${this.answers[indiceAnswers].rightAnswer}"> 
                        <label for="answer">${this.answers[indiceAnswers].label}</label>
                    </div>`;
            }else if(this.type=="radioImg"){
                // S'il s'agit d'une image à afficher en guise de réponse
                html+=
                    `<div class="answers">
                        <input type="radio" name="answer${uniqId}" class="answer" data-rightAnswer="${this.answers[indiceAnswers].rightAnswer}"> 
                        <label for="answer">
                            <figure>
                                <img src="img/${this.answers[indiceAnswers].img}" alt="${this.answers[indiceAnswers].label}">
                                <figcaption>${this.answers[indiceAnswers].label}</figcaption>
                            </figure>
                        </label>
                    </div>`;
            };
        };
        // Ajout du commentaire avec classe hidden pour le masquer lors de l'affichage
        // il sera démasqué par la suite à un moment préçis
        html+=
            `<p class="hidden" id="comment-${this.indice}"><i class="fa-solid fa-cat"></i> ${this.comment}</p>
            </fieldset>`;
        return html;
    }
};