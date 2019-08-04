import React, { useState, useEffect } from "react"
import ApolloClient from "apollo-boost"
import { gql } from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { Query } from "react-apollo"
import QueryComponent from "./QueryComponent"

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
  .then(result =>
    console.log(result.data.rates, "<-------------My first graphQL query")
  )

export default function App() {
  const [data, setData] = useState([])

  return (
    <ApolloProvider client={client}>
      <div>
        <QueryComponent />
      </div>
    </ApolloProvider>
  )
}
