// const S3 = require('aws-sdk/clients/s3');
const isEmail = require("isemail");
// const mime = require('mime');
// const uuidv4 = require('uuid/v4');
const { DataSource } = require("apollo-datasource");

var mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
});

let UserModel = mongoose.model("UserModel", userSchema);

// module.exports = UserModel;

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    this.context = config.context;
  }

  /**
   * User can be called with an argument that includes email, but it doesn't
   * have to be. If the user is already on the context, it will use that user
   * instead
   */
  async createNewUser({ email: emailArg, name: nameArg } = {}) {
    console.log("createNewUser", nameArg, emailArg);

    let newUser = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      name: nameArg,
      email: emailArg,
    });
    try {
      await newUser.save(function (err) {
        if (err) throw err;
        console.log("New User successfully saved.");
      });
      return newUser ? newUser : null;
    } catch (error) {
      console.log("createNewUser -> error", error);
    }
  }

  async findOrCreateUser({ email: emailArg, name: nameArg } = {}) {
    console.log("findOrCreateUser", nameArg, emailArg);
    try {
      let user = await UserModel.findOne({ email: emailArg }).exec();
      if (user) {
        console.log("User with email exist", user);
        return user;
      } else {
        return await this.createNewUser({ email: emailArg, name: nameArg });
      }
    } catch (error) {
      console.log("findOrCreateUser -> error", error);
    }
  }

  async getUserById({ id: idArg } = {}) {
    try {
      const found = await UserModel.findById(idArg);
      console.log("getUserById -> found", found);
      return found ? found : [];
    } catch (error) {
      console.log("getUserById -> error", error);
    }
  }

  async getUsersList({
    field: fieldArg,
    asc: ascArg,
    skip: skipArg,
    limit: limitArg,
  } = {}) {
    try {
      console.log(`sort=${ascArg === -1 ? "-":""}${fieldArg}`);

      const found = await UserModel.find({}, null, { skip: skipArg })
        .sort(`${ascArg === -1 ? "-":""}${fieldArg}`)
        // .sort("name")
        .limit(limitArg)
        .exec();
      console.log("getUsersList -> found", found);
      return found && found.length ? found : [];
    } catch (error) {
      console.log("getUsersList -> error", error);
    }
  }

  async deleteUserById({ id: idArg } = {}) {
    try {
      console.log("deleteUserById -> try to find", idArg);
      const found = await UserModel.findByIdAndDelete(idArg);
      console.log("deleteUserById -> found", found);
      return found ? found : 0;
    } catch (error) {
      console.log("deleteUserById -> error", error);
    }
  }

  async updateUserById({ id: idArg, user: userArg } = {}) {
    try {
      const found = await UserModel.findByIdAndUpdate(idArg, userArg);
      console.log("updateUserById -> found", found);
      return found ? found : [];
    } catch (error) {
      console.log("updateUserById -> error", error);
    }
  }

  async getUserTotal() {
    try {
      const total = await UserModel.countDocuments({});
      console.log("getUserTotal -> total", total);
      return total ? total : 0;
    } catch (error) {
      console.log("getUserTotal -> error", error);
    }
  }
}

module.exports = UserAPI;
