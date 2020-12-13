import { useState } from 'react';
import Rules from './Rules'
import medals from './Medals';

// Array with tiles
const tiles_array = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", "tile11", "tile12", "tile13", "tile14"];
function rotateCard() {
    this.classList.add('back');
}
// Fisher - Yates Shuffle Cards
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
// Shuffling Cards
//   let shuffledCards = shuffle(tiles_array);



// //for when cards match
// function matched() {
//     openedCards[0].classList.add("match");
//     openedCards[1].classList.add("match");
//     openedCards[0].classList.remove("show", "open");
//     openedCards[1].classList.remove("show", "open");
//     openedCards = [];
// }

// //for when cards don't match
// function unmatched() {
//     openedCards[0].classList.add("unmatched");
//     openedCards[1].classList.add("unmatched");
//     // disable();
//     setTimeout(function () {
//         openedCards[0].classList.remove("show", "open", "unmatched");
//         openedCards[1].classList.remove("show", "open", "unmatched");
//         // enable();
//         openedCards = [];
//     }, 1100);
// }



/*****************************/
function Center(props) {
    let [tile, setTile] = useState({ tile1: false, tile2: false, tile3: false, tile4: false, tile5: false, tile6: false, tile7: false });
    let [tile1, setTile1] = useState(false);
    let [tile2, setTile2] = useState(false);
    let [tile3, setTile3] = useState(false);
    let [tile4, setTile4] = useState(false);
    let [tile5, setTile5] = useState(false);
    let [tile6, setTile6] = useState(false);
    let [tile7, setTile7] = useState(false);
    // Shuffle images
    let shuffledImg = shuffle(medals);
    let clickCard = [];
    function cardClicked(e) {
        e.preventDefault();
        let tileId = e.target.parentNode.getAttribute('data-card');
        let id = e.target.getAttribute('data-id');
        let imgId = "tile" + e.target.getAttribute('data-id');
        let len = clickCard.length;
        console.log("id : ", id, tileId)
        clickCard.push(imgId);
        // setTile(imgId = true);
        if (len === 1) {
            if (clickCard[0] === clickCard[1]) {
                console.log("Matched");
                clickCard = [];
            }
            else if (clickCard[0] !== clickCard[1]) {
                console.log("Unmatched")
                clickCard = [];
            }
        }

        // e.currentTarget.style.visibility = 'hidden';
        // openedCards.push(m);
        // let len = openedCards.length;
        // if (len === 2) {
        //     // moveCounter();
        //     if (openedCards[0] === openedCards[1]) {
        //         // matched();
        //         console.log("Matched")
        //     } else {
        //         // unmatched();
        //         console.log("Un_Matched")
        //     }
        // }
    };

    return (
        <div className="container__center center_img" style={{ backgroundImage: "url(" + props.pict + ")" }}>
            {/* <Rules /> */}
            <div className="title_president">
                <span>{props.name} </span>       <span> {props.mandat}</span>
            </div>

            <div id="container__card">
                {
                    tiles_array.map((mask, i) => {
                        let m = i + 1;
                        let img_url = shuffledImg[i].url;
                        let img_id = shuffledImg[i].id;
                        return (
                            <div key={i}
                                onClick={cardClicked}
                                id={mask} data-card={m + '_tips'} className={'card' + (tile[img_id] === true ? ' rotate' : '')}><img className={'card_img' + (tile[img_id] === true ? ' back' : '')} data-id={img_id} src={img_url} alt="" /></div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}
export default Center
