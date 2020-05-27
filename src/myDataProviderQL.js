import React from "react";

import { fetchUtils, useRefresh } from "react-admin";
import { stringify } from "query-string";

import { gql } from "apollo-boost";
// import { Query, useQuery } from "react-apollo";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

// const apiUrl = 'https://jsonplaceholder.typicode.com';
const apiUrl = "http://localhost:3008";
// const apiUrl = 'https://my.api.com/';
const httpClient = fetchUtils.fetchJson;

const endPointUrl = "http://localhost:5000";
// const endPointUrl = 'http://localhost:5000/graphql'
const clientZ = new ApolloClient({
  link: new HttpLink({ uri: endPointUrl }),
  cache: new InMemoryCache(),
});

const ddd = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: { lat: "-68.6102", lng: "-47.0653" },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: { lat: "29.4572", lng: "-164.2990" },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: { lat: "-31.8129", lng: "62.5342" },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: { lat: "-71.4197", lng: "71.7478" },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: { lat: "24.8918", lng: "21.8984" },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: { lat: "-14.3990", lng: "-120.7677" },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: { lat: "24.6463", lng: "-168.8889" },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
];

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
    });
    // let asc = true;
    // let sort_field = field;
    // if (order.toUpperCase() === "DESC") asc = false;
    // data.users.sort((a, b) => {
    //   let nA = a[sort_field].toLowerCase(),
    //     nB = b[sort_field].toLowerCase();
    //   if (nA < nB) return asc ? -1 : 1;
    //   if (nA > nB) return asc ? 1 : -1;
    //   return 0;
    // });
    console.log("data", data);
    return Promise.resolve({ data: data.users, total: data.total });
  },

  // getOne: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
  //     data: json,
  //   })),

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

  // update: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json })),

  // updateMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //     method: "PUT",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json }));
  // },

  // create: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}`, {
  //     method: "POST",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({
  //     data: { ...params.data, id: json.id },
  //   })),

  // delete: async (resource, params) => {
  //   const { data } = await clientZ.mutate({
  //     mutation: gql`
  //       {
  //         deleteUser(id: ${params.id}) {
  //           id
  //           name
  //           email
  //         }
  //         total
  //       }
  //     `,
  //   });
  //   console.log("data", data);
  //   return Promise.resolve({ data: data.users, total: data.total });
  // },
  // delete: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //     method: "DELETE",
  //   }).then(({ json }) => ({ data: json })),

  deleteMany: async (resource, params) => {
    // const query = {
    //   filter: JSON.stringify({ id: params.ids }),
    // };
    // console.log("query", query)
    let a = `[${params.ids.map((e) => `"${e}"`)}]`;
    console.log("a", a);

    // deleteUsers (ids: "${params.ids}")
    // const mutation = gql`
    //   mutation {
    //       deleteUsers (ids: ${a})
    //        }
    //     `;
    const mutation = gql`
      mutation {
          deleteUsers (ids: ${a})          
           }
        `;
    //   ,
    // {
    //   options: {
    //     refetchQueries: ["users"],
    //   },
    // };

    const refetchQueries = [{ query: "users" }];
    
    // useRefresh() //! not не допустимо
    // TODO refetchQueries
    //     const refetchQueries = [{ query: LIST_COMMENTS }]
    // await client.mutate(ADD_COMMENT, { variables, refetchQueries })
    console.log("mutation", mutation);

    // const { data } = await clientZ.mutate({ mutation }, { refetchQueries });
    const { data } = await clientZ.mutate({ mutation });
    console.log("data", data);
    return Promise.resolve({ data: data.users, total: data.total });
  },
  // deleteMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //     method: "DELETE",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json }));
  // },
};
