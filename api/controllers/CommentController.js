/**
 * CommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fetchAllComments: (req, res) => {
    Comment.find({}).exec((err, data) => {
      if (err) return res.send(err, 500);
      res.ok(data);
    });
  },
  fetchCommentById: (req, res) => {
    Comment.find({_id: req.param('id')}).exec((err, data) => {
      if (err) return res.send(err, 500);
      res.ok(data);
    });
  },
  insertComment: (req, res) => {
    let comment = {
      post: req.param('post_id'),
      body: req.param('body'),
      username: req.param('username'),
      password: req.param('password'),
    };
    Comment.insert(comment).exec((err, data) => {
      if (err) return res.send(err, 500);
      res.ok(data);
    });
  },

};

