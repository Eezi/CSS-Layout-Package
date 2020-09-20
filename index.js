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
        options.cards_size = '250px'

    else if(options.cards_size === 'medium') 
        options.cards_size = '350px'

    else if(options.cards_size === 'large')
        options.cards_size = '450px'    
    

    cards.forEach(cards => {
        cards.style.display = 'grid';
        cards.style.gridTemplateColumns = `repeat(auto-fill, minmax(${options.cards_size}, 1fr))`
        cards.style.gridTemplateRows = 'auto auto'
        cards.style.gridGap = '1rem'
    });
}

function cardMaker(options){
    let card = document.querySelectorAll('.card');

    if(options.boxShadow === true)
    
        options.boxShadow = '-1.5rem 0 3rem rgba(0,0,0,0.5)'
    else
        options.boxShadow = '2px solid #e7e7e7'

    card.forEach(card => {
        card.style.border = options.boxShadow
        card.style.borderRadius = '16px'
        card.style.padding = '1rem'
        card.style.display = 'flex'
        card.style.flexDirection = 'column'
        card.style.minWidth = '250px'
        card.style.boxShadow = options.boxShadow
        card.style.position = 'relative'

        /*card.addEventListener("mouseover", function(event) {   
            // highlight the mouseenter target
            event.target.style.transition = 'all 0.2s ease-out'
            event.target.style.boxShadow = '-16px 4px 16px rgba(38, 38, 38, 0.2)'
        
        })*/
    })
}
module.exports = {
    shadowMaker,
    cardsContainerMaker,
    cardMaker
}