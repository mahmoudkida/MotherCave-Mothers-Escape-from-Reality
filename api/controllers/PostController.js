/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fetchAllPosts: (req, res) => {
    Post.find({}).populate('comments').exec((err, data) => {
      if (err) return res.send(err, 500);
      res.ok(data);
    });
  },
  fetchPostById: (req, res) => {
    Post.find({_id: req.param('id')}).populate('comments').exec((err, data) => {
      if (err) return res.send(err, 500);
      res.ok(data);
    });
  },
  insertPost: (req, res) => {
    let post = {
      title: req.param('title'),
      body: req.param('body'),
      username: req.param('username'),
      password: req.param('password'),
    };
    Post.insert(post).exec((err, data) => {
      if (err) return res.send(err, 500);
      res.ok(data);
    });
  },

};

