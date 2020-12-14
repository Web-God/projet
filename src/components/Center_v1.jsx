import { useState } from 'react';
import Rules from './Rules'
import medals from './Medals';

// Array with tiles
const tiles_array = [
    {   id: 1,
        tile: "tile1",
    },
    {   id: 2,
        tile: "tile2",
    },
    {   id: 3,
        tile: "tile3",
    },
    {   id: 4,
        tile: "tile4",
    },
    {   id: 5,
        tile: "tile5",
    },
    {   id: 6,
        tile: "tile6",
    },
    {   id: 7,
        tile: "tile7",
    },
    {   id: 8,
        tile: "tile8",
    },
    {   id: 9,
        tile: "tile9",
    },
    {   id: 10,
        tile: "tile10",
    },
    {   id: 11,
        tile: "tile11",
    },
    {   id: 12,
        tile: "tile12",
    },
    {   id: 13,
        tile: "tile13",
    },
    {   id: 14,
        tile: "tile14",
    },
];

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
    let [tile, setTile] = useState(false);
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
        let id = "tile" + e.target.getAttribute('data-id');
        let imgId = e.target.getAttribute('data-id');
        let len = clickCard.length;
        console.log("id:", id, "tileId:", tileId)
        clickCard.push(imgId);
        console.log(imgId)
        // setTile1(tile1 = true);
        if (len === 1) {
            if (clickCard[0] === clickCard[1]) {
                console.log("Matched");
                clickCard = [];
            }
            else if (imgId != tileId) {
                console.log("Unmatched")
                clickCard = [];
            }
        }
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
                            <div key={mask.id}
                                onClick={cardClicked}
                                id={mask.id} data-card={m} className={'card' + (tile1 === true ? ' rotate' : '')}><img className={'card_img' + (tile[img_id] === true ? ' back' : '')} data-id={img_id} src={img_url} alt="" /></div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}
export default Center
