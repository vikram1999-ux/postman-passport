const { passport } = require("./authenticate");
const usersRouter = require("./routes/users");
const session = require("express-session");

const port = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.use(
  session({
    secret: "secret token",
    saveUninitialized: true,
    resave: false,
    // unset: "keep",
    // generate: "store",
    // name: "session cookie name",
    // genid: (req) => {
    //   // returns a random string to be used as a session ID
    // },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", usersRouter);
app.use("/users", usersRouter);

// Basic Authentication for session and cookies
function auth(req, res, next) {
  console.log(req.user);

  if (!req.user) {
    var err = new Error("You are not authenticated!");
    err.status = 403;
    next(err);
  } else {
    next();
  }
}
app.use(auth);

// app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`listen${port}`);
});
