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
        rightAnswer: "Pour attirer votre attention",
        falseAnswer1: "Parce qu'ils sont bons chanteurs",
        falseAnswer2:"Pour vous casser les oreilles",
        comment: "Il donne sa langue au chat !"
    },
    {
        content: "Quelle est la couleur la plus commune des chats?",
        rightAnswer: "gris",
        falseAnswer1: "tricolore",
        falseAnswer2: "noir",
        comment: "Dans la nuit tous les chats sont gris !"
    },
    {
        content: "Quelle est la vitesse maximale atteinte par un chat lorsqu'il court?",
        rightAnswer: "48 km/h",
        falseAnswer1: "10 km/h",
        falseAnswer2: "2 km/h",
        comment: "Parfait pour jouer au chat et à la souris !"
    },
    {
        content: "Ont-ils peur de l’eau ?",
        rightAnswer: "L'eau n'est pas sa meilleure amie",
        falseAnswer1: "Cela dépend de sa couleur",
        falseAnswer2: "Bien sûr, il vit même dans un aquarium",
        comment: "Chat échaudé craint l'eau froide !"
    },
    {
        content: "La plupart du temps, pourquoi mon chat vomit-il ?",
        rightAnswer: "A cause d'une boule de poils qui le gêne",
        falseAnswer1: "Parce que sa maison est trop propre",
        falseAnswer2: "",
        comment: "Il avait sûrement un chat dans la gorge !"
    }
];

// CREER UNE CLASSE

// A faire:
// Y CONSTRUIRE LE CODE HTML DES QUESTIONS

class Question{
    constructor(
        content,
        rightAnswer,
        falseAnswer1,
        falseAnswer2,
        comment)
        {
            this.content=content;
            this.rightAnswer=rightAnswer;
            this.falseAnswer1=falseAnswer1;
            this.falseAnswer2=falseAnswer2;
            this.comment=comment
        }
};



// ********* CODE PRINCIPAL *********
// **********************************

// A faire:





