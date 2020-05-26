import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Hello from './hello'

const GET_USERS = gql`
  query {
    users(skip: 1, limit: 10) {
      id
      name
      email
    }
  }
`;

export default function CastomHome() {
  return (
    <Query query={GET_USERS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return (
          <div>
            {/* <Movie title={data.movie.title} /> */}
            <h1>Custom Home Page</h1>
            <div>{JSON.stringify(data.users)}</div>
            <div>
              {/* <Hello/> */}
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
