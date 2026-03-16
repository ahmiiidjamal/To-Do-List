import './AddNewList.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextForCompleted } from './assets/useContext/useContext';

export default function AddNewList() {
    // useContext
const {list , setName} = useContext(ContextForCompleted)

    // delete function
    function deleteTask(id) {
        setName(list.map(item => {
            if (item.id === id) {
                return { ...item, result: false };
            }
            return item;
        }))
    }

    // done function
    function doneTask(id) {
        // هون ضيف logic الإكمال
        console.log('Done task:', id)
        setName(list.map(itemTwo => {if(id == itemTwo.id){
            return{...itemTwo , doneIt:true , result: false}
        }
        return itemTwo
    }))
    }

    function changeText(e) {
        setText(e.target.value)
    }

    const [text, setText] = useState('')
    // const [list, setName] = useState([])

    function addListToArray() {
        if (text.trim() !== "") {
            setText('')
            setName([...list, { id: list.length, task: text, result: true , doneIt:false}])
        }
    }

    function pressEnterToAddTask(e) {
        if (e.key === "Enter") {
            addListToArray()
        }
    }

    return (
        <div className='All'>
            <div className='form'>
                <input className="inputList" type='text' 
                    onChange={changeText} 
                    onKeyDown={pressEnterToAddTask} 
                    value={text}
                />
                <button className='btnAddList' onClick={addListToArray}>Add</button>
            </div>

            <ul className='ul'>
                {list.filter(e => e.result === true).map(e => (
                    <li key={e.id}>
                        {e.task}
                        <div>
                            <button className='done-btn' onClick={() => doneTask(e.id)}>Done</button>
                            <button className='dlt' onClick={() => deleteTask(e.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to='/CompletedTask'>
            <button className='btnNextPage'>Complited Tasks</button>
            </Link>
            
        </div>
    )
}