const dotenv = require('dotenv');
dotenv.config();

const connections = {
  "development": {
    "username": "root",
    "password": null,
    "storage": "./database.sqlite",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "storage": ":memory",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  },
  "production": {
    "username": "root",
    "password": null,
    "storage": "./database.production.sqlite",
    "host": "127.0.0.1",
    "dialect": "sqlite"
  }
}

exports.connections = connections;