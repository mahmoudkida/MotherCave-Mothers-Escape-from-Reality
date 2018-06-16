/**
 * Post.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title:{
      type : 'string',
      required: true
    },
    body:{
      type : 'string',
      required: true
    },
    username:{
      type : 'string',
      required: true
    },
    password:{
      type : 'string'
    },
    comments: {
      collection: 'comment',
      via: 'post'
    }
  },
  beforeCreate: function (valuesToSet, proceed) {
    // Hash password
    if(valuesToSet.password) {
      sails.helpers.passwords.hashPassword(valuesToSet.password).exec((err, hashedPassword) => {
        if (err) {
          return proceed(err);
        }
        valuesToSet.password = hashedPassword;
        return proceed();
      });//_∏_
    }
    else {
      return proceed();
    }
  }
};

