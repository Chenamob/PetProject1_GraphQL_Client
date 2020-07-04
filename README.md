Based on: 
[Test task](https://gist.github.com/kulakowka/3dd596b8c2d2ed2ddee5dabd877d48be)

To demonstrate your abilities, we suggest developing a simple CRUD application, which consists of a GraphQL server and a client application.

To create a server, you must use the libraries:

* apollo-server
* graphql
* mongoose
* any other npm packages you consider appropriate to use.

For a client application, you must use:

* react
* react-dom
* material-ui
* apollo-boost
* react-apollo
* graphql
* any other npm packages you consider appropriate to use.

The server must support the scheme:

```JS
type Query {
  user(id: ID!): User!
  users(skip: Int = 0, limit: Int = 10): [User]
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): User!
}

type User {
  id: ID!
  email: Email!
  name: String!
}

input CreateUserInput {
  email: Email!
  name: String!
}

input UpdateUserInput {
  email: Email
  name: String
}
```

Save user data in MongoDB, use mongoose as an adapter.

The client application must use the Material UI library.

It is necessary to implement the list of users in the form of a table with the ability to create / edit / delete / view the list and details of one user.

![Иллюстрация к проекту](https://github.com/Chenamob/PetProject1_GraphQL_Client/raw/master/PromoApp_GraphQL_React_Mongo.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
