import { useState } from "react";


function App() {
  const fruits = ["mango", "apple", "orange", "banana"];
  const [allFruits, setAllFruits] = useState(fruits)
  //name for new fruit
  const [newFruit, setNewFruit] = useState(null)
  const [error, setError] = useState(false)
  //delte frunction
  const deleteFruit = (name) => {
    const updated = allFruits.filter((data) => data != name);
    setAllFruits(updated)
  }
  // function for creating the new fruit
  function newFruitFunction() {
    // if condition to check the new fruit is not empty
    if (!newFruit) {
      setError(true)
      return
    }
    //spread operator first
    setAllFruits([...allFruits, newFruit])
    //we set input to empty by setting new fruit tonull again
    setNewFruit("")
  }
  //for handeling inputs the new fruit
  const handelInput = (e) => { 
    setNewFruit(e.target.value); 
    setError(false) 
  }
  return (
    <>
      {/** Form for adding new element */}
      <div className="flex">
        <div className="w-full p-2 bg-blue-100">
          <h2 className="text-2xl font-bold text-center text-black mt-2 mb-2">Add New Fruit</h2>
          {error && <div className="text-orange-500 bg-orange-100 p-2 rounded-lg mt-2 mb-2">Fruit Name Required</div>}
          <input value={newFruit} onChange={(e) => handelInput(e)} type="text" className="p-2 w-full border border-blue-100 outline-none bg-white" placeholder="Enter Fruit Name" />
          <button onClick={newFruitFunction} className="p-2 w-full border border-blue-100 outline-none bg-blue-500 mt-4 mb-2 text-white rounded-md cursor-pointer hover:bg-blue-600" >Add New Fruit </button>
        </div>
        <table className="m-auto w-full bg-gray-100">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-2">No<sup>o</sup></th>
              <th className="p-2">Fruit Name</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allFruits.map((fruit, index) => (
              <tr>
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{fruit}</td>
                <td className="p-2">
                  <button onClick={() => deleteFruit(fruit)} className="p-1 text-xs text-red-500 bg-red-100 rounded-sm cursor-pointer hover:bg-red-500 hover:text-white">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
