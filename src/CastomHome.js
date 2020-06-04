import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Demo from "./components/Card/Card";

// import Dashboard from "./dashInfo";

// import Hello from './hello'

const GET_USERS = gql`
  query {
    users(skip: 0, limit: 10) {
      id
      name
      email
    }
  }
`;

const GET_TOTAL = gql`
  query {
    total
  }
`;

export default function CastomHome() {
  return (
    <Query query={GET_TOTAL}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return (
          <div>
            {/* <Movie title={data.movie.title} /> */}
            {/* <h1>User statistics:</h1> */}
            {/* <div>Users total = {JSON.stringify(data.total)}</div> */}
            <div>
              {/* <Hello/> */}
              {/* <Dashboard/> */}
              <Demo />
            </div>
          </div>
        );
      }}
    </Query>
  );
}
// export default function CastomHome() {
//   return (
//     <div>
//       <h1>Custom Home Page</h1>
//     </div>
//   );
// }
