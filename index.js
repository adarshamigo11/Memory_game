const cardArray = [ 
   {
       name:'fries',
       img :  'fries.png' ,
   },
   {
    name:'cheeseburger',
    img :  'cheeseburger.png' ,
},
{
    name:'hotdog',
    img :  'hotdog.png' ,
},
{
    name:'ice-cream',
    img :  'ice-cream.png' ,
},
{
    name:'milkshake',
    img :  'milkshake.png' ,
},
{
    name:'pizza',
    img :  'pizza.png' ,
},
{
    name:'fries',
    img :  'fries.png' ,
},
{
 name:'cheeseburger',
 img :  'cheeseburger.png' ,
},
{
 name:'hotdog',
 img :  'hotdog.png' ,
},
{
 name:'ice-cream',
 img :  'ice-cream.png' ,
},
{
 name:'milkshake',
 img :  'milkshake.png' ,
},
{
 name:'pizza',
 img :  'pizza.png' ,
},


]

cardArray.sort(() => 0.5 - Math.random()) //for sorting of elements in array randomly

const gridDisplay = document.querySelector('#grid')
const cardChosen = []
const cardsChosenIds = []

function createBoard() {
    
    for(let i = 0 ; i < cardArray.length; i++){
       const card = document.createElement('img')
       card.setAttribute('src','blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click' , flipCard)
       gridDisplay.appendChild(card)
       
    }

}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    cardChosen[0] === cardChosen[1]
        alert('you find a match')
       
    
}


function flipCard() {
   let cardId = this.getAttribute('data-id')
   cardArray[cardId]
   cardChosen.push(cardArray[cardId].name)
   cardsChosenIds.push(cardId)

   console.log('clicked', cardId )
   console.log(cardChosen)
   this.setAttribute('src', cardArray[cardId].img)
if(cardChosen.length == 2){
    setTimeout(checkMatch , 500)
}
}