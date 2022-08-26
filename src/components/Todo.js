import React,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { addTodo ,deleteTodo, resetTodo} from '../actions/action';
import './todo.css'


const Todo = () => {

const [inputData , setInputData] = useState('');
const list = useSelector((state)=> state.todoReducer.list)
const dispatch = useDispatch()

  return (
    <>
    <div className="main-div">
          <div className='child-div'>
            <figure>
            <figcaption>Add your list here✌</figcaption>
            </figure>


            <div className='addItems'>
              <input type='text' placeholder='📥Add items...' value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
              <i className='fa fa-plus add-btn' onClick={()=>dispatch(addTodo(inputData),setInputData(' ')) }></i>
            </div>


            <div className='showItems'>

              {
                list.map((elem) => {
                return(
                  <div className='eachItem' key={elem.id}>
                  <h3>{elem.inputData2}</h3>
                  <div className='todo-btn'>
                  <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={()=>dispatch(deleteTodo(elem.id)) }></i>
                  </div>
              </div>
                )})
              }
             
            </div>

<div className='showItems'>
  <button className='btn effect04' data-sm-link-text='remove All' onClick={()=> dispatch(resetTodo())}><span>Check List</span></button>
</div>

          </div>
    </div>
    </>
  )
}

export default Todo