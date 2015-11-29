# Joy Division Unknown Pleasures Album Cover

## Rendu final
Pour découvrir le rendu final ouvrez le fichier : 'build/index.html'.

## Stack
* HTML & SASS
* Javascript ES6 (avec Babel)
* Canvas
* Gulp (avec sourcemaps, autoprefixer, browserSync)
* GitHub

## Inspiration
Ayant un t-shirt de Joy Division et aimant cette pochette d'album je me suis rapidement lancé dans cette direction
http://www.wikiwand.com/en/Unknown_Pleasures

## Problèmes rencontrés
N'ayant jamais utilisé ni Sass, ni ES6, ni Gulp, ni GitHub, ni canvas, je me suis donné comme défis de débuter cette semaine avec ce qui n'a pas été toujours simple.
Ma plus grand déception est que je n'ai pas pu animer avec le son mon canvas car avec le requestAnimationFrame tourne en moyenne à 25 images par seconde et souvent moins de 20...
J'ai donc ajouté une fonction RANDOMIZE IT pour pouvoir toucher au requestAnimationFrame.
J'ai aussi eu du mal à créer une fonction permettant de tracer une courbe entre deux points avec une courbe plus ou moins marqué en fonction de l'ancien point X de départ et point X d'arrivée


## Points particuliers
Ce site n'est pas responsive

## Pour modifier le code source

J'ai laissé le package.json dans la racine et mon gulpfile.js, il est donc nécessaire d'avoir Gulp installé en global.
J'ai aussi mis en place un sourcemap pour que l'on puisse regarder le code source dans le debugger.
