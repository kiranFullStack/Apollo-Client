import React, { useState, useEffect } from "react"
import ApolloClient from "apollo-boost"
import { gql } from "apollo-boost"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
})

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result, "<-------------My first graphQL query"))

export default function App() {
  const [data, setData] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.post(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         userId: "1",
  //         title: "Kirnsdsdsda",
  //         body: "this is the body22222"
  //       }
  //     )
  //     setData(result.data)
  //   }
  //   fetchData()
  // }, [])
  console.log(data, "<-------Response from server")
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  )
}
