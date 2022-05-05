
const INITIAL_STATE = {
    //propiedades que van a ser parte de este estado
    userName: "",
    isDark : false,
    page : 1,
    Number :1,

}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type){

        case "GET_USERNAME":
            return {...state,
                    userName:action.payload}

        case "SET_ISDARK":
            return{
                ...state,
                isDark: !state.isDark
            }
        
        case "SET_PAGE-1":
            return{
                ...state,
                page: state.page -1

            }
        case "SET_NUM-1":
            return{
                ...state,
                Number : state.Number -1
            }
        
        case "SET_PAGE+1":
                return{
                    ...state,
                    page: state.page +1
                }
        
        case "SET_NUM+1":
            return{
                ...state,
                Number : state.Number +1
            }        

        case "SET_PAGE":
            return{
                ...state,
                page: action.payload
            }
        
        case "SET_NUM":
            return{
                ...state,
                Number: action.payload
            }
        
        case "RESET_PAGE":
            return{
                ...state,
                page :1
            }
        
        

        case "RESET_NUM":
            return{
                ...state,
                Number :1
            }

    

    default:
	    return state;
    }
}

export default reducer;