
const CardsBackground = (type) => {
    // export const backgroundAccordingToType = pokemonType => {
        switch(type){
            case'normal':
            return "linear-gradient(212deg, rgba(27,10,9,0.6867121848739496) 10%, rgba(255,239,147,1) 99%)"
            case'fighting':
            return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(74,30,13,1) 0%, rgba(187,65,24,0.908000700280112) 85%)"
            case'flying':
            return 'linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)'
            case'poison':
            return "linear-gradient(293deg, rgba(46,29,55,1) 0%, rgba(165,56,184,0.908000700280112) 100%) "
            case'ground':
            return "linear-gradient(0deg, rgba(168,135,41,1) 0%, rgba(55,43,9,0.908000700280112) 83%)"
            case'rock':
            return "linear-gradient(0deg, rgba(10,10,10,1) 0%, rgba(156,156,156,1) 84%, rgba(185,185,185,1) 99%)"                                                        
            case'bug':
            return "linear-gradient(90deg, rgba(37,68,34,1) 0%, rgba(88,184,56,0.908000700280112) 100%)"
            case'ghost':
            return "linear-gradient(0deg, rgba(12,35,230,0.8155637254901961) 12%, rgba(31,1,50,1) 99%)"
            case'steel':
            return " linear-gradient(57deg, rgba(171,189,204,1) 15%, rgba(24,49,65,1) 97%)"
            case'fire':
            return "linear-gradient(212deg, rgba(253,29,29,1) 9%, rgba(252,176,69,1) 100%)"
            case'water':
            return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,131,175,1) 91%)"
            case'grass':
            return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,131,175,1) 91%)"
            case'electric':
            return "linear-gradient(333deg, rgba(12,37,59,1) 15%, rgba(19,131,204,1) 97%)"
            case'psychic':
            return "linear-gradient(63deg, rgba(247,231,147,0.9304096638655462) 19%, rgba(116,86,0,1) 97%)"
            case'ice':
            return "linear-gradient(63deg, rgba(11,56,84,0.9304096638655462) 19%, rgba(0,116,85,1) 97%)"
            case'dragon':
            return "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)"
            case'dark':
            return "linear-gradient(71deg, rgba(111,111,111,1) 16%, rgba(101,104,106,1) 19%, rgba(0,0,0,1) 97%)"
            case'fairy':
            return " linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)"
            case'unknown':
            return "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)"
            default:
            return "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)"
            }
    // };

  
};

export default CardsBackground;