import jim from './President';
import joe from './Medals';
import { useState } from 'react';
import imgPresident from './President';
import importImg from './Medals';
// random number to display picts of Presidents
let numPres = Math.floor(Math.random() * imgPresident.length);

// Array with tiles
const tiles_array = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", "tile11", "tile12", "tile13", "tile14"];
function rotateCard() {
    this.classList.add('back');
}
// Fisher - Yates Shuffle Cards
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  let shuffledCards = shuffle(tiles_array);
  console.table(shuffledCards);
  function startGame(){
    // https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-1-shuffing-cards

  }
//   Matching Cards
// function cardOpen() {
//     openedCards.push(this);
//     var len = openedCards.length;
//     if(len === 2){
//         moveCounter();
//         if(openedCards[0].type === openedCards[1].type){
//             matched();
//         } else {
//             unmatched();
//         }
//     }
// };

  /*****************************/
function Center() {
    const [close, setClose] = useState(false);
    const [back, setBack] = useState(false);
    const [cards, setCards]= useState([]);

    return (
        <div className="container__center center_img" style={{ backgroundImage: "url(" + jim[numPres].src + ")" }}>
            <div className={'rules' + (close === true ? ' close' : '')}>
                <span
                    onClick={() => {
                        setClose(true);
                    }}
                    className="btn-close">X</span>
                <h3>Jeux du Président</h3>
                <h4>But du jeu : Découvrir tous les Présidents de la République française</h4>
                <p> Apparenté au jeu Memory</p>
                <h5>Début du jeu</h5>
                <p>
                    Une photo de chaque président est cachée.
                    Un indice textuel de la vie du président apparaît également.
                    Un champ réponse avec un bouton "Réponse" permet de d'essayer de deviner quel président se cache.
                    Au début de la partie une seule carte (déterminée aléatoirement) est retournée laissant apparaître une partie du visage.
                </p>
                <h5>Commencer le jeu</h5>
                <p>
                    Cliquer sur les cartes pour découvrir les paires de cartes identiques
                    A chaque paire découverte, il est possible de donner une réponse.
                    Une paire retournée donne un indice supplémentaire et enlève des points.
                    Chaque fausse réponse enlève des points.
                    Le score est affiché et se décrémente à chaque paire retournée.
                </p>
                <h5>Découvrir un indice</h5>
                <p>
                    Un bouton "Découvrir" permet de découvrir un paire et un indice, mais enlève des points.
                    On ne peut utiliser le bouton "Découvrir" que 3 fois
                    Le temps pour découvrir le président est prise en compte et donne un bonus.
                </p>
                <h5>Les points</h5>
                <p>
                    Score max: 1000 (réponse avant de cliquer)
                    onus de 1mn: +100
                    nus de 2mn: +50
                    us de 3mn: +10
                    se réponse: -50
                    retournée: -20
                    Découvrir: 1er -40, 2eme -60, 3eme -80
                </p>
                <h5>Fin du jeu</h5>
                <p>
                    Le jeu se termine quand le joueur à trouver le nom du Président caché
                    La photo, le nom du Président, et les dates du mandat se dévoilent avec un résumé de son histoire, le chiffre de la république, un lien "En svoir plus" et une anecdote
                </p>
            </div>
            <div className="title_president">
                <span>{jim[numPres].name} </span>       <span> {jim[numPres].mandat}</span>
            </div>

            <div id="container__card">
                {
                    shuffledCards.map((mask, i) => {
                        let numMedal = Math.floor(Math.random() * importImg.length);
                        // let m = Math.floor(Math.random() * tiles_array.length);
                        let m = i + 1;
                        return (
                            <div
                            // onClick={() => {
                            //     setBack(true);
                            // }}
                            id={mask} data-card={m + '_tips'} className={'card' + (back === true ? ' rotate' : '')}><img className={'card_img' + (back === true ? ' back' : '')} src={joe[numMedal].import} alt="" /></div>
                        )
                    }

                    )
                }
            </div>
        </div>
    );
}
export default Center
