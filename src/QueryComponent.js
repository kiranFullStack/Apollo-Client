import React from "react"
import { gql } from "apollo-boost"
import { Query } from "react-apollo"

export default function QueryComponent() {
  return (
    <div style={{ border: "1px solid green", padding: "30px" }}>
      I am form Query Component. Paste your GQL code here and display the data
      <Query
        query={gql`
          {
            allPlanets {
              name
              terrain
              climate
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>
          if (data)
            console.log(data, "<<<<<<<<this is my response form GQL server")
          return data.allPlanets.map(({ name, terrain, climate }) => (
            <div key={name} style={{ border: "1px solid red" }}>
              <h1>Name:{name}</h1>
              <h2> Terrain:{terrain}</h2>
              <h2>Climate :{climate}</h2>
            </div>
          ))
        }}
      </Query>
    </div>
  )
}
