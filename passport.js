// *****************************************************************************
// Passport.js - This file is the user authentication component.
//
// ******************************************************************************

//Configuration
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

//Middleware - In a Connect or Express-based application, passport.initialize() middleware is required to initialize Passport. 
//If your application uses persistent login sessions, passport.session() middleware must also be used.
app.configure(function() {
    app.use(express.static('public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
  });


//Sessions - Each subsequent request will not contain credentials, 
//but rather the unique cookie that identifies the session. 
//In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


// Route - The login form is submitted to the server via the POST method. 
//Using authenticate() with the local strategy will handle the login request.
  app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);


// Parameters - By default, LocalStrategy expects to find credentials 
//in parameters named username and password.
//If your site prefers to name these fields differently,
//options are available to change the defaults.
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd'
},
function(username, password, done) {
  // ...
}
));


/* PASSPORT SAYS: "A form is placed on a web page, allowing the user to enter their credentials and log in."
<form action="/login" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <input type="submit" value="Log In"/>
    </div>
</form>
*/