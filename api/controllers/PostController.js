/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fetchAllPosts: (req, res) => {
    Post.find({}).sort('createdAt DESC').populate('comments').exec((err, data) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(data);
    });
  },
  fetchPostById: (req, res) => {
    Post.find({_id: req.param('id')}).populate('comments').exec((err, data) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(data);
    });
  },
  insertPost: (req, res) => {
    let post = {
      title: req.param('title'),
      body: req.param('body'),
      username: req.param('username'),
      ...req.param('password') && {password: req.param('password')}
    };
    Post.create(post).fetch().exec((err, data) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(data);
    });
  },

};

