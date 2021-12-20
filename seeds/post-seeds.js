const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: 'adsjfhalksdjhfalksdjgna;sdkjsldkjfnadf',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: 'aslkdjbvlaksdjfhvljdskfnha;dkjbvnasldkfvs',
    user_id: 3
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: 'sdfjvsjl;dvkjbhasldkijhv;kldjnsfdlivjuhnfd;kvas',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_body: 'vkjasdnv;ksjnfvslkdfjvhsl;kvjsnlkdjhsdljhdfv',
    user_id: 2
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body: 'vjsahfdkgjahdsflkvjdshnflkjfhvoiausdhflaksjdfhisduchvfalskdjhvsifvh',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
