const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Jacob1',
    email: 'user1@gmail.com',
    password: 'password123'
  },
  {
    username: 'Aaron2',
    email: 'user2@gmail.com',
    password: 'password123'
  },
  {
    username: 'Christine3',
    email: 'user3@gmail.com',
    password: 'password123'
  },
  {
    username: 'Chance4',
    email: 'user4@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
