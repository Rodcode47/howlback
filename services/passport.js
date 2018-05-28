const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const TwitterStrategy = require('passport-twitter').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.linkedinClientID,
      clientSecret: keys.linkedinClientSecret,
      callbackURL: '/auth/linkedin/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ linkedinId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ linkedinId: profile.id }).save();
      done(null, user);
    }
  ),
);

passport.use(
    new GitHubStrategy({
      clientID: keys.gitHubClientID,
      clientSecret: keys.gitHubClientSecret,
      callbackURL: '/auth/github/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ githubId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const User = await new User({ githubId: profile.id }).save();
    }
  )
);

//passport.use(
//  new TwitterStrategy({
//      consumerKey: keys.apiKey,
//      consumerSecret: keys.apiSecret,
//      callbackURL: '/auth/twitter/callback'
//    },
//    async (token, tokenSecret, profile, cb) => {
//      const existingUser = await User.findOne({ twitterId: profile.id });
//        
//      if (existingUser) {
//        return cb(null, existingUser);
//      }
//      const User = await new User({ twitterId: profile.id }).save();
//    }
//  )
// );