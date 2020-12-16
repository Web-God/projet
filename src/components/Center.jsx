import { useState, useEffect } from 'react';
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
// Shuffling images Cards
/*****************************/
let shuffledCards = shuffle(medals);
function Center(props) {
    const [allCardsArrayofObjects, setAllCardsArrayofObjects] = useState(shuffledCards);
    const [stockIndex, setStockIndex] = useState([]);
    let intervalId;
    // Function to flip card on click
    function cardClicked(i) {
        let stockIndexCopy = [...stockIndex];
        let shuffledCardsCopy = [...allCardsArrayofObjects];
        // Push i in stockIndexCopy
        stockIndexCopy.push(shuffledCardsCopy[i].id);
    console.log("Id de medals", shuffledCardsCopy[i].show)
        console.log("copie Stock +2: ", stockIndexCopy);
        // Assign false to property show of allCardsArrayofObjects     
        if (stockIndexCopy.length === 2) {
            // shuffledCardsCopy[stockIndexCopy[0]].show = "unflipped";
            // shuffledCardsCopy[stockIndexCopy[1]].show = "unflipped";
            // for (let cardshow of shuffledCardsCopy) {
                //     cardshow.show = "unflipped";
                // }
                if (stockIndexCopy[0] === stockIndexCopy[1]){                    
                    shuffledCardsCopy[i].show = 'close';                    
                    console.log("Matched")
                }else {
                    shuffledCardsCopy.show = "unflipped";
                    console.log("Unmatched")
                }
                stockIndexCopy = [];
            }
        // Copy array of object medals to modify property show to flipped
        shuffledCardsCopy[i].show = "flipped";

        setStockIndex(stockIndexCopy);
        setAllCardsArrayofObjects(shuffledCardsCopy);
        // i = lastIndex;

        // if (stockIndex.length === 2) {
        //     // stockIndex=[];
        //     // setAllCardsArrayofObjects(shuffledCardsCopy[id].show = false);
        //     console.log(stockIndex)
        // }
    }

    return (
        <div className="container__center center_img" style={{ backgroundImage: "url(" + props.pict + ")" }}>
            <Rules />
            <div className="title_president">
                <span>{props.name} </span>       <span> {props.mandat}</span>
            </div>

            <div id="container__card" className={props.lucky === props.name ? 'hide' : ''}>
                {
                    shuffledCards.map((mask, i) => {
                        return (
                            <div key={i} className = {allCardsArrayofObjects[i].show === "none" ? "hide card" : "card"}>
                                <img className={'card_img' + (allCardsArrayofObjects[i].show === "flipped" ? ' rotate back' : '')} data-id={i}
                                    onClick={() => {
                                        cardClicked(i);
                                    }}
                                    src={shuffledCards[i].url} title={allCardsArrayofObjects[i].show === "flipped" ? allCardsArrayofObjects[i].title : null} alt={allCardsArrayofObjects[i].title} />
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
// handleChange: function (e) {
//     // 1. Make a shallow copy of the items
//     let items = [...this.state.items];
//     // 2. Make a shallow copy of the item you want to mutate
//     let item = {...items[1]};
//     // 3. Replace the property you're intested in
//     item.name = 'newName';
//     // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
//     items[1] = item;
//     // 5. Set the state to our new copy
//     setCount({items});
// },
