import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import  PostItem from './post_item';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import PostForm from './create_post';


class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <PostItem post={post} key={post.id}/>

    ));
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Mother Cave</h1>
          <p className="lead">Mothers' escape from reality</p>
          <hr className="my-4"/>
          <p>A place where mother gather and share their experience and struggles</p>
          <p className="lead">
            <a onClick={this.toggle} className="btn btn-primary btn-lg" href="javascript:" role="button">Add your story</a>
          </p>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add New Post</ModalHeader>
          <ModalBody>
            <PostForm hideModal={this.toggle}/>
          </ModalBody>
        </Modal>
        <div className="row">
          <div className="title col-12 col-md-8">
            <h2 className="align-center pb-3 mbr-fonts-style display-4">LATEST STORIES</h2>
          </div>
        </div>
        <section className="row">
          {postItems}

        </section>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  newPost: state.posts.newPost
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
