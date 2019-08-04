import React from "react"
import { gql } from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { Query } from "react-apollo"

export default function QueryComponent() {
  return (
    <div>
      <Query
        query={gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>
                {currency}: {rate}
              </p>
            </div>
          ))
        }}
      </Query>
    </div>
  )
}
