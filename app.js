document.addEventListener('DOMContentLoaded', () => {

//Prepare the Array storing items of the Grid
    cards = [
        {
            name: 'Pizza',
            img: 'images/pizza.png'

        },
        {
            name: 'IceCream',
            img: './images/ice-cream.png'

        },
        {
            name: 'Burger',
            img: './images/cheeseburger.png'

        },
        {
            name: 'Fries',
            img: './images/fries.png'

        },
        {
            name: 'HotDog',
            img: './images/hotdog.png'

        },
        {
            name: 'IceCream',
            img: './images/ice-cream.png'

        },
        {
            name: 'Milkshake',
            img: './images/milkshake.png'

        },
        {
            name: 'Burger',
            img: './images/cheeseburger.png'

        },
        {
            name: 'Fries',
            img: './images/fries.png'

        },
        {
            name: 'Pizza',
            img: './images/pizza.png'

        },
        {
            name: 'HotDog',
            img: './images/hotdog.png'

        },
        {
            name: 'Milkshake',
            img: './images/milkshake.png'

        },

    ]


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('.score');
    cardsChosen = []



    function makeGrid(){
        for(let i = 0; i< cards.length ; i++){
            var card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkMatch(){
        imgTags = document.querySelectorAll('img')
        if(cardsChosen[0].name === cardsChosen[1].name){
            resultDisplay.innerHTML = parseInt(resultDisplay.innerHTML) + 1
            imgTags[cardsChosen[0].index].setAttribute('src','./images/white.png')
            imgTags[cardsChosen[1].index].setAttribute('src','./images/white.png')
            alert('You found a match!')       
        }else if(cardsChosen[0].index == cardsChosen[1].index){

        }else{
            imgTags[cardsChosen[0].index].setAttribute('src','./images/blank.png')
            imgTags[cardsChosen[1].index].setAttribute('src','./images/blank.png')            
            alert('Sorry, try again!')
        }

        cardsChosen = []

        // console.log(resultDisplay.innerHTML);
    }



    function flipCard(){
        clickedCardIndex = this.getAttribute('data-id')
        clickedCard = {name: cards[clickedCardIndex].name,index: clickedCardIndex}
        this.setAttribute('src',cards[clickedCardIndex].img)
        cardsChosen.push(clickedCard)
        // console.log(cardsChosen);

        if (cardsChosen.length === 2){
            // checkMatch()
            setTimeout(checkMatch, 500)
        }
    }

    makeGrid();

})