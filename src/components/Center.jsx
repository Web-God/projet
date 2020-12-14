import { useState } from 'react';
import Rules from './Rules'
import medals from './Medals';

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
/*****************************/
let shuffledCards = shuffle(medals);

function Center(props) {
    // const [shuffledCards, setShuffledCards] = useState([]);
    console.log(shuffledCards)
    const[allCardsArrayofObjects, setAllCardsArrayofObjects] = useState(shuffledCards);
    function cardClicked(){
        let shuffledCardsCopy = [...shuffledCards];
        console.log(shuffledCardsCopy[0].show);
    }
    return (
        <div className="container__center center_img" style={{ backgroundImage: "url(" + props.pict + ")" }}>
            {/* <Rules /> */}
            <div className="title_president">
                <span>{props.name} </span>       <span> {props.mandat}</span>
            </div>

            <div id="container__card">
                {
                    shuffledCards.map((mask, i) => {
                        return (
                            <div>
                                <img
                                onClick ={cardClicked}
                                src={shuffledCards[i].url} alt="" />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}
export default Center
