//Reducer is that which basically holds currentState and action.useReducer returns a new state and dispatch it depending upon the action.

const initialState = {
    list:[]
}

const todoReducer = (state = initialState,action ) => {
    switch(action.type){
        case "ADD_TODO":

        const { id, inputData2} = action.payload;
        return{
            ...state,//Deep copy of that orginal object
            list:[
                ...state.list,//We want to keep the list of earlier items as it is.
                {
                    id:id,
                    inputData2:inputData2
                }
            ]
        }

        case "DELETE_TODO":
const newList = state.list.filter((elem) => elem.id !== action.id)//The id which is same that will get deleted and the others will get returned and get stored in the newList variable 
        return{
            ...state,
            list : newList
        }
        
        case "REMOVE_ALL": return{
            ...state,
            list : []
        }
        default: return state

        }
    }




export default todoReducer;