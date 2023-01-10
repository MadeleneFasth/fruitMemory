const cardContainerList = $(".card-container-ul");

let cardsArray = [
    { 
        title: "kiwi", 
        src: "/images/kiwi.png" 
      },
      { 
        title: "durian", 
        src: "/images/durian.png" 
      },
      { 
        title: "jackfruit", 
        src: "/images/jackfruit.png" 
      },
      { 
        title: "dragon-fruit", 
        src: "/images/dragon-fruit.png" 
      },
      { 
        title: "orange", 
        src: "/images/orange.png" 
      },
      { 
        title: "lychee", 
        src: "/images/lychee.png" 
      },
      { 
        title: "figs", 
        src: "/images/figs.png" 
      },
      { 
        title: "cantaloupe", 
        src: "/images/cantaloupe.png" 
      },
      { 
        title: "lemon", 
        src: "/images/lemon.png" 
      },

      { 
        title: "kiwi", 
        src: "/images/kiwi.png" 
      },
      { 
        title: "durian", 
        src: "/images/durian.png" 
      },
      { 
        title: "jackfruit", 
        src: "/images/jackfruit.png" 
      },
      { 
        title: "dragon-fruit", 
        src: "/images/dragon-fruit.png" 
      },
      { 
        title: "orange", 
        src: "/images/orange.png" 
      },
      { 
        title: "lychee", 
        src: "/images/lychee.png" 
      },
      { 
        title: "figs", 
        src: "/images/figs.png" 
      },
      { 
        title: "cantaloupe", 
        src: "/images/cantaloupe.png" 
      },
      { 
        title: "lemon", 
        src: "/images/lemon.png" 
      },
]

let chosenCards = [];
let chosenCardsIndex = [];

cardsArray.sort(() => Math.random() - 0.5);

//få ut ett kort för varje kort i listan, med 'baksidan' uppåt
$.each( cardsArray, function distributeCards(index, value ){
    cardContainerList.append($(`<li><img src="/images/back.png" class="${index}"></li>`))
});


//vad händer när man klickar på ett kort 
$("img").click(function() {
    let cardIndex = this.className;
    chosenCards.push(cardsArray[cardIndex].title);
    chosenCardsIndex.push(cardIndex);
    
    $(this).attr("src", cardsArray[cardIndex].src);

    if(chosenCards.length == 2){
        setTimeout(checkForMatch, 200);
    }
})

function checkForMatch(){

    let img = $("img");

    if(chosenCards[0] === chosenCards[1] && chosenCardsIndex[0] !== chosenCardsIndex[1]){
        $(img[chosenCardsIndex[0]]).attr("src", "/images/blank.png");
        $(img[chosenCardsIndex[1]]).attr("src", "/images/blank.png");
 
    } else {
        $(img[chosenCardsIndex[0]]).attr("src", "/images/back.png");
        $(img[chosenCardsIndex[1]]).attr("src", "/images/back.png");
    }

    chosenCards = [];
    chosenCardsIndex = [];

}
