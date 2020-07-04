// const { paginateResults } = require("./utils");
const GraphQLEmail = require("graphql-type-email");

module.exports = {
  Query: {
    total: (_, ___, { dataSources }) => dataSources.userAPI.getUserTotal(),
    me2: async (_, { email, name }, { dataSources }) => {
      console.log("dataSources2", dataSources);
      dataSources.userAPI.testMethod();
      return await dataSources.userAPI.findOrCreateUser({ email, name });
    },

    me: (_, ___, { dataSources }) => ({
      id: 2,
      name: "Ivan",
      email: "xxx0@zzz.yyy",
    }),
    user: async (_, { id }, { dataSources }) => {
      return await dataSources.userAPI.getUserById({ id });
    },
    users: async (
      _,
      { field = "id", asc = 1, skip = 0, limit = 10 },
      { dataSources }
    ) => {
      return await dataSources.userAPI.getUsersList({
        field,
        asc,
        skip,
        limit,
      });
    },
  },
  Mutation: {
    createUser: async (_, { input }, { dataSources }) => {
      console.log("createUser", input.email);
      console.log("createUser", input.name);
      // const user = await dataSources.userAPI.createNewUser({
      const user = await dataSources.userAPI.findOrCreateUser({
        email: input.email,
        name: input.name,
      });
      // console.log("user", user);
      if (user) return user;
    },
    updateUser: async (_, { id, input }, { dataSources }) => {
      console.log("updateUser:", id, input.name, input.email);
      const user = {};
      if (input.email) user.email = input.email;
      if (input.name) user.name = input.name;
      return await dataSources.userAPI.updateUserById({ id, user });
    },
    deleteUser: async (_, { id }, { dataSources }) => {
      console.log("deleteUser", id);
      return await dataSources.userAPI.deleteUserById({ id });
    },
    deleteUsers: async (_, { ids }, { dataSources }) => {
      console.log("deleteUsers", ids);
      ids.forEach((element) => {
        console.log("element", element);
        dataSources.userAPI.deleteUserById({ id: element });
      });
      return ids.length;
    },
  },
  Email: GraphQLEmail,
};
