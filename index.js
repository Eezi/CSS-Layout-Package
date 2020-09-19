function shadowMaker(options){
    let images = document.querySelectorAll('.shadowmaker');

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

function cardMaker(options){
    let cards = document.querySelectorAll('.cardMaker');

    if(options.card_type === 'small')
        options.card_type = '50px'

    else if(options.card_type === 'medium') 
        options.cardMaker = '100px'
    
    cards.forEach(card => {
        card.style.height = options.card_type
        card.style.width = options.card_type
        card.style.backgroundColor = '#394359'
        card.style.border = '1px solid #F2BE8D'
    });
}

module.exports = {
    shadowMaker,
    cardMaker
}