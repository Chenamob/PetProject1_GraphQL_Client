// require("dotenv").config();

const { Sequelize } = require("sequelize");
var mongoose = require("mongoose");

module.exports.paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
  // can pass in a function to calculate an item's cursor
  getCursor = () => null,
}) => {
  if (pageSize < 1) return [];

  if (!cursor) return results.slice(0, pageSize);
  const cursorIndex = results.findIndex((item) => {
    // if an item has a `cursor` on it, use that, otherwise try to generate one
    let itemCursor = item.cursor ? item.cursor : getCursor(item);

    // if there's still not a cursor, return false by default
    return itemCursor ? cursor === itemCursor : false;
  });

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1 // don't let us overflow
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize)
        )
    : results.slice(0, pageSize);
};

module.exports.createStoreMongo = () => {

  const mdb = mongoose.connect(
    process.env.MONGO_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    function (err) {
      if (err) throw err;
  
      console.log("Mongoose Successfully connected");
    }
  );

  // const db = new Sequelize({
  //   dialect: "sqlite",
  //   storage: "./store.sqlite",
  // });

  // const users = db.define("user", {
  //   createdAt: Sequelize.DATE,
  //   updatedAt: Sequelize.DATE,
  //   email: Sequelize.STRING,
  //   name: Sequelize.STRING, //my
  //   // id: Sequelize.STRING, //my
  //   // profileImage: Sequelize.STRING,
  //   token: Sequelize.STRING,
  // });

  return { mdb };
  // return { db, users };
};

module.exports.createStoreSQLite = () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "./store.sqlite",
  });

  const users = db.define("user", {
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    email: Sequelize.STRING,
    name: Sequelize.STRING, //my
    // id: Sequelize.STRING, //my
    // profileImage: Sequelize.STRING,
    token: Sequelize.STRING,
  });

  return { db, users };
};
