import React from "react";

import { useQuery } from "@apollo/react-hooks";
// import { Query,useQuery } from "react-apollo";

// import gql from "graphql-tag";
import { gql } from "apollo-boost";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const endPointUrl = "http://localhost:5000";
// const endPointUrl = 'http://localhost:5000/graphql'
const clientZ = new ApolloClient({
  link: new HttpLink({ uri: endPointUrl }),
  cache: new InMemoryCache(),
});

// const GET_USERS = gql`
//   query {
//     users(skip: 1, limit: 10) {
//       id
//       name
//       email
//     }
//   }
// `;

async function loadUserssAsync() {
  //   const GET_USERS = gql`
  //     query {
  //       users(skip: 1, limit: 10) {
  //         id
  //         name
  //         email
  //       }
  //     }
  //   `;
  //   const { data } = await clientZ.query({GET_USERS});
  //   console.log(JSON.stringify(data.users));

  const { data } = await clientZ
    .query({
      query: gql`
        {
          users(skip: 1, limit: 10) {
            id
            name
            email
          }
        }
      `,
    })
    // .then((result) => {
    // //   console.log(result);
    //   return Promise.resolve(result);
    // });

  console.log("loadUserssAsync -> data.users", data.users)
  return data;
}

export default   function Hello() {
  
    const data = loadUserssAsync()


  console.log("data", data.users)
  return "<>Hello {JSON.stringify(data.users)}!</>";
}

// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';

// const GET_GREETING = gql`
//   query getGreeting($language: String!) {
//     greeting(language: $language) {
//       message
//     }
//   }
// `;

// function Hello() {
//   const { loading, error, data } = useQuery(GET_GREETING, {
//     variables: { language: 'english' },
//   });
//   if (loading) return <p>Loading ...</p>;
//   return <h1>Hello {data.greeting.message}!</h1>;
// }
