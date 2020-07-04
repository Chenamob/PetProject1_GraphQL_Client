require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
// import UserAPI from "./datasources/user";
const UserAPI = require("./datasources/user");
const resolvers = require("./resolvers");
const isEmail = require('isemail');

const { createStoreMongo } = require("./utils");
const internalEngineDemo = require("./engine-demo");

const store = createStoreMongo();

const dataSources = () => ({
  userAPI: new UserAPI({ store }),
});

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }) => {
  // simple auth check on every request
  const auth = (req.headers && req.headers.authorization) || "";
  const email = new Buffer(auth, "base64").toString("ascii");

  // if the email isn't formatted validly, return null for user
  if (!isEmail.validate(email)) return { user: null };
  // find a user by their email
  const users = await store.users.findOrCreate({ where: { email ,name} });
  const user = users && users[0] ? users[0] : null;

  return { user };
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  introspection: true,
  playground: true,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    ...internalEngineDemo,
  },
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== "test") {
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 app running at ${url}`);
  });
}

// export all the important pieces for integration/e2e tests to use
// module.exports = {
//   dataSources,
//   context,
//   typeDefs,
//   resolvers,
//   ApolloServer,
//   UserAPI,
//   store,
//   server,
// };
