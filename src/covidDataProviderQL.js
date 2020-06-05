import React from "react";
// import { fetchUtils, useRefresh } from "react-admin";
// import { stringify } from "query-string";
import { gql } from "apollo-boost";
// import { Query, useQuery } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
// import { useQuery } from '@apollo/react-hooks';


const endPointUrl = "http://cors-anywhere.herokuapp.com/covid.quintero.io/";
// const endPointUrl = "http://covid.quintero.io/";
const clientZ = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({ uri: endPointUrl }),
  cache: new InMemoryCache(),
});

export default {
  getCountry2: async (resource, params) => {
    try {
      const { data } = await clientZ.query({
        query: gql`
          {
            country(identifier: ${params.identifier}) 
            {
              name
              todayCases  
              casesPerOneMillion
              deathsPerOneMillion
              testsPerOneMillion
            }
          }
        `,
      });
      console.log("getCountry data", data);
      return Promise.resolve({ data: data.country });
    } catch (error) {
      console.log("error", error);
    }
  },
  
};

// function getCountry({ params }) {
//   const GET_COUNTRY = gql`
//       {
//         country(identifier: ${params.identifier}) 
//         {
//           name
//           todayCases  
//           casesPerOneMillion
//           deathsPerOneMillion
//           testsPerOneMillion
//         }
//       }
//     `;

//   const { loading, error, data } = useQuery(GET_COUNTRY, {
//     variables: { params },
//   });

//   if (loading) return null;
//   if (error) return `Error! ${error}`;

//   return (
//     <img src={data.country.name} style={{ height: 100, width: 100 }} />
//   );
// }

// export default getCountry;