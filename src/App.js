import React, { useState, useEffect } from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import QueryComponent from "./QueryComponent"
import "./App.scss"

const client = new ApolloClient({
  uri: "https://swapi.graph.cool/"
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      I am Outer App Component with Apollo privider wrapped. I have a query
      component which takes care of the query within itself
      <div className="app-comp">
        <QueryComponent />
      </div>
    </ApolloProvider>
  )
}
