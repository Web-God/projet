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
    // console.log('shuffledCards: ', shuffledCards)
    const[allCardsArrayofObjects, setAllCardsArrayofObjects] = useState(shuffledCards);
    let shuffledCardsCopy = [...shuffledCards];
    let id;
    let stockid=[];
    function cardClicked(e){
        id = e.target.getAttribute('data-id');
        // shuffledCardsCopy[id].show = true;
        setAllCardsArrayofObjects(shuffledCardsCopy[id].show = true);
        stockid.push(id)
        if(stockid.length===2){
            setAllCardsArrayofObjects(shuffledCardsCopy[id].show = false);
            stockid=[];
            console.log("Stock +2: ",stockid);
        }
        console.log('Click copy', stockid);
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
                            <div key={i}>
                                <img className={'card_img' + (shuffledCardsCopy[i].show === true ? ' rotate' : '')} data-id={i}
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
