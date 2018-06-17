import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      username:'',
      password:'',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  onSubmit(e) {
    e.preventDefault();

    const comment = {
      body: this.state.body,
      username: this.state.username,
      password: this.state.password,
      post: this.props.postId
    };

    this.props.createComment(comment);
    this.setState({
      body: '',
      username: '',
      password: ''
    });
    this.props.toggle();
  }

  render() {
    console.log(this.props.postId);

    return (
    <Form  onSubmit={this.onSubmit}>
        <FormGroup>
          <FormGroup>
            <Label for="username">User Name <span className="text-danger">*</span></Label>
            <Input type="text" name="username" id="username" placeholder="Enter your name..." required
                   onChange={this.onChange}
                   value={this.state.username}/>
            <FormText color="muted">You can use an anonymous name.</FormText>
          </FormGroup>
          <Label for="body">Write your comment <span className="text-danger">*</span></Label>
          <Input type="textarea"  name="body" id="body" placeholder="Write whatever is on your mind..." required
                 onChange={this.onChange}
                 value={this.state.body} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password (Not Required)</Label>
          <Input type="password" name="password" id="password" placeholder="Enter password..."
                 onChange={this.onChange}
                 value={this.state.password}/>
          <FormText color="muted">You can use this password if you need to edit or delete post.</FormText>
        </FormGroup>
        <Button >Submit</Button>
      </Form>
    );
  }
}

CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired,
};

export default connect(null, { createComment })(CommentForm);
