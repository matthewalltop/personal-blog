var config = {};

config.google = {};
config.mongo = {};

// Google Settings
config.google.clientId = process.env.GOOGLE_CLIENT_ID || '';
config.google.clientSecret = process.env.GOOGLE_CLIENT_SECRET || '';

// Mongo Settings
config.mongo.uri = process.env.MONGO_URI || 'mongodb://localhost/blog';


module.exports = config;