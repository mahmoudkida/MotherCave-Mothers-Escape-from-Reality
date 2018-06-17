import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CommentForm from './create_comment';
import CommentItem from './comment_item';
import {fetchPostById} from '../actions/postActions'
import { Button,  Collapse } from 'reactstrap';

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  componentWillMount() {
    this.props.fetchPostById(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post) {
      // this.props.post=nextProps.post;
    }
  }

  render() {
    const commentItems = () =>{
      if(this.props.post.comments && this.props.post.comments.length ){
        return (this.props.post.comments.map(comment => (
            <CommentItem  comment={comment} key={comment.id}/>
          ))
        )
      }
      else{
        return (<li className="align-self-center">No Comments added yet by te users</li>)
      }
    };
    return (

      <div className="container">
        <h1>{this.props.post.title}</h1>
        <small className="d-block"> Written By: {this.props.post.username}</small>
        <p>{this.props.post.body}</p>
        <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>Add Comment</Button>
        <Collapse className="" isOpen={this.state.collapse}>
        <section className="comment-box row align-content-center">

            <div className="col-md-6 card bg-light p-3">
              <CommentForm toggle={this.toggle} postId={this.props.post.id}/>
            </div>
        </section>
        </Collapse>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="page-header">
                <h3>Comments <small className="pull-right">
                  {
                    this.props.post.comments ?
                      this.props.post.comments.length : 0
                } comments</small></h3>
              </div>
              <div className="comments-list">
                {commentItems()}

              </div>
            </div>
          </div>
        </div>
      </div>

    )
      ;
  }
}

PostDetails.propTypes = {
  fetchPostById: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  post: state.posts.post,
});
export default connect(mapStateToProps, {fetchPostById})(PostDetails);


