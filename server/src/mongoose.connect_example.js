mongoose.connect(
  process.env.MONGO_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) throw err;

    console.log("Successfully connected");
  }
);


Book.find({
    title: /mvc/i,
  })
    .sort("-created")
    .limit(5)
    .exec(function (err, books) {
      if (err) throw err;

      console.log(books);
    });

  Author.findById("5ec97a57ef9d8e7f94263a6f", function (err, author) {
    if (err) throw err;

    author.linkedin = "https://www.linkedin.com/in/jamie-munro-8064ba1a/";

    author.save(function (err) {
      if (err) throw err;

      console.log("Author updated successfully");
    });
  });

  Author.findByIdAndUpdate(
    "5ec97a57ef9d8e7f94263a6f",
    { linkedin: "https://www.linkedin.com/in/jamie-munro-8064ba1a/" },
    function (err, author) {
      if (err) throw err;

      console.log(author);
    }
  );



  //***********************

  var jamieAuthor = new Author({
    _id: new mongoose.Types.ObjectId(),
    name: {
        firstName: 'Jamie',
        lastName: 'Munro'
    },
    biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
    twitter: 'https://twitter.com/endyourif',
    facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
});

jamieAuthor.save(function(err) {
    if (err) throw err;
     
    console.log('Author successfully saved.');
})