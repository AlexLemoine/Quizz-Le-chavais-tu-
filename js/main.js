// ********* FONCTIONS *********
// *****************************




// ********* VARIABLES *********
// *****************************

// DE QUOI AI-JE BESOIN ?
// Des questions + des réponses

// A faire:
// Des boutons radio devant chaque réponse
// Un bouton "submit"
// Placer un écouteur sur les boutons radio
// Placer un écouteur sur le bouton "submit"

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

// CREER UNE CLASSE
// Y CONSTRUIRE LE CODE HTML DES QUESTIONS+REPONSES

// A faire:


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
            this.toHTML();
        };
        toHTML()
        {
            let html =
                `<fieldset>
                <legend class="legend">${this.content}</legend>
                `;
            for(let i=0; i<this.answers.length;i++)
            {
                html+=
                    `<div class="answers">
                    <input type="radio" name="" id="answer"> 
                    <label for="answer">${this.answers[i]}</label>
                    </div>`;
            };

            html+=
                `<p class="hidden">${this.comment}</p>
                </fieldset>`;
            const form=document.body.querySelector("#form");
            form.innerHTML+=html;
        };
};



// ********* CODE PRINCIPAL *********
// **********************************

// 

questions=questions.map(question => {
    return new Question(question.content,question.answers,question.rightAnswer,question.comment)
});






