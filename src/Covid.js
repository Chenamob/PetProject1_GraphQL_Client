import React from "react";
// import { fetchUtils, useRefresh } from "react-admin";
// import { stringify } from "query-string";
// import { gql } from "apollo-boost";
// import { Query, useQuery } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
// import { useQuery } from '@apollo/react-hooks';

import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ApolloProvider } from "react-apollo";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const endPointUrl =
  "http://cors-anywhere.herokuapp.com/covid19-graphql.now.sh/";
// const endPointUrl = "http://cors-anywhere.herokuapp.com/covid.quintero.io/";
// const endPointUrl = "http://covid.quintero.io/";
// const clientZ = new ApolloClient({
//   connectToDevTools: true,
//   link: new HttpLink({ uri: endPointUrl }),
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({ uri: endPointUrl }),
  cache: new InMemoryCache(),
});

// country(identifier: ${params.identifier})
const GET_COUNTRY = gql`
  {
    country(name: "Ukraine") {
      name
      mostRecent {
        deaths
        recovered
        confirmed
      }
    }
  }
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // maxWidth:650,
    marginTop: 12,
    marginBottom: 12,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Covid = ({ params }) => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Query query={GET_COUNTRY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    COVID-19 Statistics
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    (GraphQL API from http://covid19-graphql.now.sh)
                  </Typography>
                  <p>Country: {data.country.name} </p>
                  <p>confirmed: {data.country.mostRecent.confirmed} </p>
                  <p>recovered: {data.country.mostRecent.recovered} </p>
                  <p>deaths: {data.country.mostRecent.deaths} </p>
                </CardContent>
              </Card>
            </div>
          );
        }}
      </Query>
    </ApolloProvider>
  );
};

export default Covid;
