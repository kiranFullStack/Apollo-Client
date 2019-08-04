import React, { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          userId: "1",
          title: "todoTitle22222",
          body: "this is the body22222"
        }
      )
      setData(result.data)
    }
    fetchData()
  }, [])
  console.log(data)
  return (
    <div>
      {/* {data.map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
        </div>
      ))} */}
      <button />
    </div>
  )
}
