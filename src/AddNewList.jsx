import './AddNewList.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextForCompleted } from './assets/useContext/useContext';

export default function AddNewList() {
    // useContext
    const { list, setName } = useContext(ContextForCompleted)

    const [text, setText] = useState('')
    // const [list, setName] = useState([])

    function changeText(e) {
        setText(e.target.value)
    }




    useEffect(() => {
        console.log("useEffect")
        const saved = localStorage.getItem("lists")
        if (saved) {
            setName(JSON.parse(saved))
        } else {
            setName([])
        }
    }, [])

    function addListToArray() {
        if (text.trim() !== "") {
            const newList = [...list, { id: list.length, task: text, result: true, doneIt: false }]

            setText('')
            setName(newList)
            localStorage.setItem("lists", JSON.stringify(newList))
        }
    }

    function pressEnterToAddTask(e) {
        if (e.key === "Enter") {
            addListToArray()
        }
    }



    function deleteTask(id) {
        const newList = list.map(item => {
            if (item.id === id) {
                return { ...item, result: false };
            }
            return item;
        })
        setName(newList)
        localStorage.setItem("lists", JSON.stringify(newList))
    }

    function doneTask(id) {
        const newList = list.map(itemTwo => {
            if (id == itemTwo.id) {
                return { ...itemTwo, doneIt: true, result: false }
            }
            return itemTwo
        })
        setName(newList)
        localStorage.setItem("lists", JSON.stringify(newList))  // 👈 حفظ
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