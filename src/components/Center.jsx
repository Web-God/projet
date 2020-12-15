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
    const [allCardsArrayofObjects, setAllCardsArrayofObjects] = useState(shuffledCards);
    let lastIndex;
    function cardClicked(i) {
        let stockIndex = [];
        stockIndex.push(i);
        let stockIndexCopy = [...stockIndex, i];
        console.log("Stock +2: ", stockIndexCopy);
        // Assign false to property show of allCardsArrayofObjects
        if (stockIndex.length === 2) {
            for (let cardshow of allCardsArrayofObjects) {
                cardshow.show = false;
            }
        }

        let shuffledCardsCopy = [...allCardsArrayofObjects];
        shuffledCardsCopy[i].show = true;
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
            {/* <Rules /> */}
            <div className="title_president">
                <span>{props.name} </span>       <span> {props.mandat}</span>
            </div>

            <div id="container__card">
                {
                    shuffledCards.map((mask, i) => {
                        return (
                            <div key={i} className="card">
                                <img className={'card_img' + (allCardsArrayofObjects[i].show === true ? ' rotate back' : '')} data-id={i}
                                    onClick={() => {
                                        cardClicked(i);
                                    }}
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
