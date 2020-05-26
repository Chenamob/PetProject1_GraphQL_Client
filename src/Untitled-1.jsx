// const GET_USERS = gql`
// query {
//   # users(skip: ($page - 1) * $perPage, limit: $perPage) {
//   users(skip: 1, limit: 10) {
//     id
//     name
//     email
//   }
// }
// `;

//     const { loading, error, data } = useQuery(GET_USERS);
//     Query({query:{GET_USERS}})
//     <Query query={GET_USERS}>
//       {({ loading, error, data }) => {
//         if (loading) return <div>Loading...</div>;
//         if (error) return <div>Error :(</div>;

//         return (
//           <div>
//             {/* <Movie title={data.movie.title} /> */}
//             <h1>Custom Home Page</h1>
//             <div>{JSON.stringify(data.users)}</div>
//           </div>
//         );
//       }}
//     </Query>

const essss = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "google"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
