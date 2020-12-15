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
    let id;
    let stockid=[];
    function cardClicked(i){
        let shuffledCardsCopy = [...allCardsArrayofObjects];
        shuffledCardsCopy[i].show = true;
        setAllCardsArrayofObjects(shuffledCardsCopy);
        // shuffledCardsCopy.map((index)=>{
        //     shuffledCardsCopy[index].show = false
        //  })
        // if(shuffledCardsCopy[i].show === true){
        //     setAllCardsArrayofObjects(shuffledCardsCopy[i].show=false);
        //     console.log('Shuffle Copy: ', shuffledCardsCopy.show)
        // }
        // else{
        //     shuffledCardsCopy[i].show = true;
        //     setAllCardsArrayofObjects(shuffledCardsCopy);

        // }

        // setAllCardsArrayofObjects(prevCheck => prevCheck + 1);
        // console.log('Card index function', allCardsArrayofObjects);
        
        // setAllCardsArrayofObjects(allCardsArrayofObjects)
        // stockid.push(id)
        // if(stockid.length===2){
        //     setAllCardsArrayofObjects(shuffledCardsCopy[id].show = false);
        //     stockid=[];
        //     console.log("Stock +2: ",stockid);
        // }
        // console.log('Click copy', stockid);
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
                                <img className={'card_img' + (allCardsArrayofObjects[i].show === true ? ' rotate' : '')} data-id={i}
                                onClick ={()=>{
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
//     this.setState({items});
// },