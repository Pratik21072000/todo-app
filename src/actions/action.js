//creating action creator - action creator is a function that returns an action
export const addTodo = (inputData2) =>{
  return  {
        type: "ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            inputData2: inputData2
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type : 'DELETE_TODO',
        id
     
    }
}


export const resetTodo = () => {
    return {
        type: 'REMOVE_ALL'
    }
}