function shadowMaker(options){
    let images = document.querySelectorAll('.shadow');

    if(options.shadow_type === 'small')
        options.shadow_type = '5px'
    else if(options.shadow_type === 'medium')
        options.shadow_type = '20px'
    else if(options.shadow_type === 'large')
        options.shadow_type = '50px'
    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding){
            image.style.padding = '1em';
        }
    })
}

function cardsContainerMaker(options){
    let cards = document.querySelectorAll('.cards');

    if(options.cards_size === 'small')
        options.cards_size = '200px'

    else if(options.cards_size === 'medium') 
        options.cards_size = '300px'

    else if(options.cards_size === 'large')
        options.cards_size = '400px'    
    

    cards.forEach(cards => {
        cards.style.display = 'grid';
        cards.style.gridTemplateColumns = `repeat(auto-fill, minmax(${options.cards_size}, 1fr))`
        cards.style.gridTemplateRows = 'auto'
        cards.style.gridGap = '1rem'
    });
}

function cardMaker(options){
    let card = document.querySelectorAll('.card');


    card.forEach(card => {
        card.style.border = '2px solid #e7e7e7'
        card.style.borderRadius = '4px'
        card.style.padding = '1rem'
    })
}

module.exports = {
    shadowMaker,
    cardsContainerMaker,
    cardMaker
}