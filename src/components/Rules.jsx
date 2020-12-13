import { useState } from "react";

const Rules = () => {
  const [close, setClose] = useState(false);
  return (

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
  )

}
export default Rules
