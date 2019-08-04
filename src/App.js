import React, { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          userId: "1",
          title: "todoTitle2",
          body: "this is the body2"
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
