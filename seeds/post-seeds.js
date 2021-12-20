const { Post } = require('../models');

const postdata = [
  {
    title: 'Test Post 1',
    post_body: 'This is the body of test post 1.',
    user_id: 1
  },
  {
    title: 'Test Post 2',
    post_body: 'This is the body of test post 2.',
    user_id: 3
  },
  {
    title: 'Test Post 3',
    post_body: 'This is the body of test post 3.',
    user_id: 1
  },
  {
    title: 'Test Post 4',
    post_body: 'This is the body of test post 4.',
    user_id: 2
  },
  {
    title: 'Test Post 5',
    post_body: 'This is the body of test post 5.',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
