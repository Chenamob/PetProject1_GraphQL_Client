// import React from "react";
// import { fetchUtils, useRefresh } from "react-admin";
// import { stringify } from "query-string";
import { gql } from "apollo-boost";
// import { Query, useQuery } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

// // const apiUrl = 'https://jsonplaceholder.typicode.com';
// const apiUrl = "http://localhost:3008";
// // const apiUrl = 'https://my.api.com/';
// const httpClient = fetchUtils.fetchJson;

const endPointUrl = "http://localhost:5000/graphql";
const clientZ = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({ uri: endPointUrl }),
  cache: new InMemoryCache(),
});

export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    // const query = {
    //   sort: JSON.stringify([field, order]),
    //   range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //   filter: JSON.stringify(params.filter),
    // };
    // const url = `${apiUrl}/${resource}?${stringify(query)}`;

    let asc = 1;
    if (order.toUpperCase() === "DESC") asc = -1;
    let field_ = "_id";
    if (field && field !== "id") field_ = field;
    const { data } = await clientZ.query({
      query: gql`
        {
          users(field:"${field_}", asc:${asc}, 
          skip: ${(page - 1) * perPage}, limit: ${perPage}) {
            id
            name
            email
          }
          total
        }
      `,
      // variables: { id: "123" },
      fetchPolicy: "network-only", //! this is disable caching
    });
    /*    let asc = true;
    let sort_field = field;
    if (order.toUpperCase() === "DESC") asc = false;
    data.users.sort((a, b) => {
      let nA = a[sort_field].toLowerCase(),
        nB = b[sort_field].toLowerCase();
      if (nA < nB) return asc ? -1 : 1;
      if (nA > nB) return asc ? 1 : -1;
      return 0;
    });
    */
    console.log("getList data", data);
    return Promise.resolve({ data: data.users, total: data.total });
  },

  getOne: async (resource, params) => {
    try {
      const { data } = await clientZ.query({
        query: gql`
          {
            user(id: "${params.id}") 
            {
              id
              name
              email
            }
            total
          }
        `,
      });
      console.log("getOne data", data);
      return Promise.resolve({ data: data.user, total: data.total });
    } catch (error) {
      console.log("error", error);
    }
  },

  // getMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;
  //   return httpClient(url).then(({ json }) => ({ data: json }));
  // },

  // getManyReference: (resource, params) => {
  //   const { page, perPage } = params.pagination;
  //   const { field, order } = params.sort;
  //   const query = {
  //     sort: JSON.stringify([field, order]),
  //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //     filter: JSON.stringify({
  //       ...params.filter,
  //       [params.target]: params.id,
  //     }),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //   return httpClient(url).then(({ headers, json }) => ({
  //     data: json,
  //     total: parseInt(headers.get("content-range").split("/").pop(), 10),
  //     // total: parseInt(headers.get('content-lenght').split('/').pop(), 10),
  //   }));
  // },

  update: async (resource, params) => {
    const { data } = await clientZ.mutate({
      mutation: gql`
        mutation {
          updateUser(id: "${params.id}",input:{
            name:"${params.data.name}"
            email:"${params.data.email}"
          }) {
            id
            name
            email
          }                    
        }
      `,
    });
    console.log("update data", data);
    return Promise.resolve({ data: data.updateUser });
  },

  // updateMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //     method: "PUT",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json }));
  // },

  create: async (resource, params) => {
    const mutation = gql`
      mutation {
          createUser (input: {
            name:"${params.data.name}"
            email:"${params.data.email}"
          })       
            {
              id
              name
              email
            }              
           }
        `;

    console.log("mutation", mutation);
    const { data } = await clientZ.mutate({ mutation });
    console.log("create data", data);
    return Promise.resolve({ data: data.createUser });
  },

  delete: async (resource, params) => {
    const { data } = await clientZ.mutate({
      mutation: gql`
        mutation {
          deleteUser(id: "${params.id}") {
            id
            name
            email
          }                    
        }
      `,
    });
    console.log("delete data", data);
    return Promise.resolve({ data: data.deleteUser });
  },

  deleteMany: async (resource, params) => {
    let a = `[${params.ids.map((e) => `"${e}"`)}]`;
    // console.log("a", a);
    const mutation = gql`
      mutation {
          deleteUsers (ids: ${a})          
           }
        `;
    // console.log("mutation", mutation);

    // useRefresh() 
    //     const refetchQueries = [{ query: LIST_COMMENTS }]

    const { data } = await clientZ.mutate({ mutation });
    console.log("deleteMany data", data);
    return Promise.resolve({ data: data.users, total: data.total });
  },
};
