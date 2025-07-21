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

function App() {

  return (
    <>
      <header>
        <h1>Welcome to My App</h1>
        <p>This is a simple React application.</p>
      </header>
      <main>
        <List items={['Apple', 'Banana', 'Cherry']} />
        <Form />
        <FetchData />
        <Counter />
        <ToggleButton />
        <Modal/>
        <SearchFilter items={['apple', 'banana', 'cherry']} />
        <Pagination currentPage={1} totalPages={3} onPageChange={(page) => console.log(`Page changed to: ${page}`)} />
        <DragDrop />
        <DarkModeToggle />
      </main>
    </>
  )
}

export default App
