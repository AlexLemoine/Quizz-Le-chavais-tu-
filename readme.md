QUIZZ "# Quizz-Le-chavais-tu-?"

V0 : définition du projet de base
L'ordinateur va poser des questions à l'utilisateur.

V1 : 
L'utilisateur choisit ses réponses (bouton radio) et les valide à la fin (submit).
Les réponses correctes s'affichent.

Ajout ordre aléatoire des questions et réponses
Ajout écouteur sur bouton submit

Ajout fichier CSS
=> classe hidden: invisible (à supprimer après le clic sur submit)
=> classe right: couleur verte 
=> classe wrong: couleur rouge


V2 : évolution du quizz:
Modifications :
=> ajouter une classe aux questions: classe radio, classe checkbox, classe radioImg
=> lier des images pour quelques réponses
=> modifier classe Question (ajout fonction toHTML() dans la classe)
=> ajouter classe Quizz: parcourir questionsCopy et récupérer le HTML de chaque question


Reste à faire:
=> modififer classe Quizz: intégrer fonction check dans la classe, affichage question par question (projet Slider avant) 

Prévoir les cas où il y aura plusieurs réponses possibles (cases à cocher)

Transformer le quizz sous forme de jeu:
=> l'utilisateur aura 7 vies, donc 7 possibilités d'erreurs
=> prévoir + de questions/réponses
=> afficher les questions une par une (diapo)
