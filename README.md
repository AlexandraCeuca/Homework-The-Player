# Homework-The-Player

Cerinte:

(obligatoriu) Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) unde puteti playerul - il numim gameContainer

(obligatoriu) Player sa poate misca in toate directile

(obligatoriu) Un player nu poate iesi inafara gameContainer ( de la punctul 1)

(optional) Adaugati abstacole, puneti cateva div-uri ( dimensiuni fixe cu anumita culoare) in gameContainer, pot fi random puse in container.

(optional) Player daca intalneste un obstacol, nu poate trece de el

(optional) Player sa aiba o proprietate life, care default va avea valoare 100, o afisam deasupra de Player ( div-ului care reprezinta )

(optional) De fiecare data cand Player-ul loveste un obstacol, ii vom scadea 1 punct din viata lui

o secunda viata lui va fi de culoare rosie. Dupa care revenit la culoarea default setata ( pentru a oferi feedback, utilizatorului care se joaca )

(optional) Daca Player-ul ajunge sa aiba viata egal cu zero, atunci resetam jocul.

Observati:

Sa folositi sintaxa noua de ES6
OOP Style
Codul cat mai granular, o singura responsabilitate per functie/metoda, o functie/metoda minim 10 maxim de cod ( pot exista excepti dar ca regula de urmat)
Sfaturi:

In metoda move din clasa Player, se va pune logica de la cerinta 2

Daca apasam arrow up, vom face style.top = style.top - 20
Daca apasam arrow down, vom face style.top = style.top + 20
etc.
Cerinta 3, acolo recomand o metoda playerIsOutsideOfContainer(nextTop, nextLeft) care sa returneze true sau false. Daca returneza true atunci nu mai facem update la style.top/left, pe false, facem

Cerinta 5, la fel ca mai sus, facem o metoda care o punem in clasa Game, playerHitObstacle. Recomand sa se faca o clasa Game pentru logica cu obstacole, la fel si pentru obstacole, o clasa Obstacle. Game va avea o lista de obiecte Obstacle si un obiect player. Avem o lista de obiecte Obstacle, verifici cu fiecare Ca sa facem verificare, aveti doua variante:

Mutati logica de miscare in Game
Folositi o functie callback, care o apelati de fiecare data cand user vrea sa miste Player-ul, asta o trimiteti din Clasa Game catre obiectul player