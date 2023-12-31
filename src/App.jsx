import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  return (
    <>
      <div classname="App">
        {
           puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>;
          })
        }
      </div>
      
    </>
  )
}

export default App
