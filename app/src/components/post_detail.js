import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions/postActions';

class PostDetails extends Component {
  constructor(props) {
    super(props);
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
    console.log(this.props)
    return (
      < div >

test  {this.props.post.title}
      </ div >
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
export default connect(mapStateToProps, { fetchPostById })(PostDetails);


