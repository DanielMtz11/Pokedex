
const INITIAL_STATE = {
    //propiedades que van a ser parte de este estado
    userName: "",
    isDark : false


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
        

    default:
	    return state;
    }
}

export default reducer;