
const CardsColor = (type) => {
    switch(type){
        case'normal':
        return "#543c03"
        case'fighting':
        return "#96402A"
        case'flying':
        return 'green'
        case'poison':
        return "#5B3184"
        case'ground':
        return "#654008"
        case'rock':
        return "#7E7E7E"                                                        
        case'bug':
        return "#4AB648"
        case'ghost':
        return "#323569"
        case'steel':
        return "#5E736C"
        case'fire':
        return "#E75C35"
        case'water':
        return "#0b3854"
        case'grass':
        return "#416460"
        case'electric':
        return "#153755"
        case'psychic':
        return "#ad6a21"
        case'ice':
        return "#007455"
        case'dragon':
        return "#478A93"
        case'dark':
        return "#030706"
        case'fairy':
        return "#971B45"
        default:
        return "#030706"
    }
};

export default CardsColor;