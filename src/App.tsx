import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle'
import DragDrop from './components/DragDrop/DragDrop'
import FetchData from './components/FetchData/FetchData'
import Form from './components/Form/Form'
import List from './components/List/List'
import Modal from './components/Modal/Modal'
import Pagination from './components/Pagination/Pagination'
import SearchFilter from './components/SearchFilter/SearchFilter'
import ToggleButton from './components/ToggleButton/ToggleButton'
import ToDoList from './components/ToDoList/ToDoList'

function App() {
  const [page, setPage] = useState<number>(1)
  const items = ['apple', 'banana', 'cherry']

  return (
    <>
      <header>
        <h1>Welcome to My App</h1>
        <p>This is a simple React application.</p>
      </header>
      <main>
        <List items={items} />
        <Form />
        <FetchData />
        <Counter />
        <ToggleButton />
        <Modal/>
        <SearchFilter items={items} />
        <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
        <DragDrop />
        <DarkModeToggle />
        <ToDoList/>
      </main>
    </>
  )
}

export default App
