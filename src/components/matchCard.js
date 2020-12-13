
  // //   Matching Cards
  // let openedCards = [];
  // function cardOpen() {
  //   openedCards.push(this);
  //   var len = openedCards.length;
  //   if (len === 2) {
  //     // moveCounter();
  //     if (openedCards[0].type === openedCards[1].type) {
  //       matched();
  //     } else {
  //       unmatched();
  //     }
  //   }
  // };
  // //for when cards match
  // function matched(){
  //     openedCards[0].classList.add("match");
  //     openedCards[1].classList.add("match");
  //     openedCards[0].classList.remove("show", "open");
  //     openedCards[1].classList.remove("show", "open");
  //     openedCards = [];
  // }

  // //for when cards don't match
  // function unmatched(){
  //     openedCards[0].classList.add("unmatched");
  //     openedCards[1].classList.add("unmatched");
  //     // disable();
  //     setTimeout(function(){
  //         openedCards[0].classList.remove("show", "open", "unmatched");
  //         openedCards[1].classList.remove("show", "open", "unmatched");
  //         // enable();
  //         openedCards = [];
  //     },1100);
  // }

  //disable cards temporarily
  // function disable(){
  //     Array.prototype.filter.call(cards, function(card){
  //         card.classList.add('disabled');
  //     });
  // }

  //enable cards and disable matched cards
  // function enable(){
  //     Array.prototype.filter.call(cards, function(card){
  //         card.classList.remove('disabled');
  //         for(var i = 0; i < matchedCard.length; i++){
  //             matchedCard[i].classList.add("disabled");
  //         }
  //     });
  // }


// export default MatchCard
