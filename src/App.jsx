// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import './App.css'
import AddNewList from './AddNewList'
import CompletedTask from './CompletedTask'
import { Route, Routes } from 'react-router-dom'
import { ContextForCompleted } from './assets/useContext/useContext'
import { useState } from 'react'
function App() {
  const [list, setName] = useState([
    // here tasks

  ])

  return (
    <div className='App'>
      <h1 className='mainSentence'>My To Do List</h1>
      {/* <Stack spacing={2} direction="row">
      <Button variant="contained">Click</Button>
    </Stack> */}
      <ContextForCompleted.Provider value={{ list, setName }}>
        <Routes>
          <Route path='/' element={<AddNewList />} />
          <Route path='/CompletedTask' element={<CompletedTask test={list}/>} />
        </Routes>
      </ContextForCompleted.Provider>
    </div>
  )
}

export default App
