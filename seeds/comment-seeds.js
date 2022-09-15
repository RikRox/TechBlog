const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Comment on tech blog',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'yes this is great',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Awesome',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Techy tech tech tech comment',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'omg you are a genius',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'fantasterrific',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'wow',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'hello',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'great',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'cool',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'yooooo',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'nooooo.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'kudos to you!',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'wowsers',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'comment',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'tech blog is so cool',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'blogggg',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'commentssss',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'comment comment comment',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'tecchhhhhhh',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'podjarsrffb',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'sefvvffvvvvv',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'whoooo hoooooooo',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
