import { useState } from "react"
import AddTodo from "./comps/AddTodo"
import ViewTodo from "./comps/ViewTodo"

function App() {
  // todo Array
  const [todos, setTodos] = useState([])
  
  return (
    <>
      <div className="flex w-5/6 gap-1 m-auto mt-10">
      <div className="w-1/2 bg-white/10 rounded-lg">
        <AddTodo todos={todos} setTodos={setTodos} />
      </div>
      <div className="w-full bg-white/10 rounded-lg">
        <ViewTodo todos={todos} setTodos={setTodos} />
      </div>
      </div>

    </>
  )
}

export default App
