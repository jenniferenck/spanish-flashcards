const flashcard = document.getElementById('flashcard');
const previousCard = document.getElementById('previousCard');
const nextCard = document.getElementById('nextCard');
let counter = 0;
let lang ='en';

// Will most likely need to create a 'default lang' that gets 
// Come up with a shuffle/ random ordering of cards

// Next Friday have the scroll through working - COMPLETE!
 
// 1. display a value in the boxed area 
const translations = [
    {'sp': 'comer', 'en': 'to eat'},
    {'sp': 'dormir', 'en': 'to sleep'},
    {'sp': 'beber', 'en': 'to drink'},
    {'sp': 'hablar', 'en': 'to talk'}
]

// 2. change flashcard display (listener) when the box is clicked
// TOOD, Look into Removing eventListeners -> removeEventListener,
flashcard.addEventListener('click', () => {
    if (lang === 'en'){
        lang = 'sp';
    } else{
        lang = 'en';
    } 
    flashcard.textContent = translations[counter][lang];

});

nextCard.addEventListener('click', () => {
    if (counter < translations.length-1){
        counter +=1;
    } else {
        counter = 0;
    }
    flashcard.textContent = translations[counter][lang];            

});

previousCard.addEventListener('click', () => {
    if (counter > 0){
        counter -=1;
    } else {
        counter = translations.length-1;
    }
    flashcard.textContent = translations[counter][lang]; 
});