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

let types = {
  data: {
    __schema: {
      types: [
        {
          name: "Affected",
        },
        {
          name: "Boolean",
        },
        {
          name: "Continent",
        },
        {
          name: "ContinentIdentifier",
        },
        {
          name: "Country",
        },
        {
          name: "CountryIdentifier",
        },
        {
          name: "DataPoint",
        },
        {
          name: "Date",
        },
        {
          name: "DetailedAffected",
        },
        {
          name: "DetailedContinent",
        },
        {
          name: "Float",
        },
        {
          name: "HistoricalData",
        },
        {
          name: "ImageURL",
        },
        {
          name: "Info",
        },
        {
          name: "Int",
        },
        {
          name: "NewsStory",
        },
        {
          name: "Query",
        },
        {
          name: "Source",
        },
        {
          name: "String",
        },
        {
          name: "Timeline",
        },
        {
          name: "URL",
        },
        {
          name: "World",
        },
        {
          name: "__Affected",
        },
        {
          name: "__Continent",
        },
        {
          name: "__DetailedAffected",
        },
        {
          name: "__Directive",
        },
        {
          name: "__DirectiveLocation",
        },
        {
          name: "__EnumValue",
        },
        {
          name: "__Field",
        },
        {
          name: "__InputValue",
        },
        {
          name: "__Schema",
        },
        {
          name: "__Type",
        },
        {
          name: "__TypeKind",
        },
      ],
    },
  },
};

let Country = {
  data: {
    __type: {
      name: "Country",
      fields: [
        {
          name: "active",
        },
        {
          name: "cases",
        },
        {
          name: "casesPerOneMillion",
        },
        {
          name: "continent",
        },
        {
          name: "continentIdentifier",
        },
        {
          name: "critical",
        },
        {
          name: "deaths",
        },
        {
          name: "deathsPerOneMillion",
        },
        {
          name: "identifier",
        },
        {
          name: "info",
        },
        {
          name: "name",
        },
        {
          name: "news",
        },
        {
          name: "recovered",
        },
        {
          name: "tests",
        },
        {
          name: "testsPerOneMillion",
        },
        {
          name: "timeline",
        },
        {
          name: "todayCases",
        },
        {
          name: "todayDeaths",
        },
        {
          name: "updated",
        },
      ],
    },
  },
};
