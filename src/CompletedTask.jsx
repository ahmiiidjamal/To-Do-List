import './AddNewList.css'
import { useContext } from "react"
import { ContextForCompleted } from './assets/useContext/useContext';
import { Link } from "react-router-dom";
export default function CompletedTask() {
    const { list, setName } = useContext(ContextForCompleted)
    console.log(list)
    return (
        <div className='ComplitedTask'>
            {console.log(list)}
            
        <ul className='ul'>
                {list.filter(e => e.result === false &&  e.doneIt === true).map(e => (
                    <li key={e.id}>
                        {e.task}
                    </li>
                ))}
            </ul>


            <Link to='/'>
                <button className='btnNextPage'>Home Page</button>
            </Link>
        </div>
    )
}