import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      username:'',
      password:''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
      username: this.state.username,
      password: this.state.password
    };

    this.props.createPost(post);
    this.setState({
      title: '',
      body: '',
      username: '',
      password: ''
    });
    this.props.hideModal();
  }

  render() {
    return (
      <Form  onSubmit={this.onSubmit}>
        <FormGroup>
          <Label className="form-labe" for="title">Post Title <span className="text-danger">*</span></Label>
          <Input type="text" name="title" id="title" placeholder="Enter Post Title..." required
                 onChange={this.onChange}
                 value={this.state.title}/>
        </FormGroup>
        <FormGroup>
          <Label for="body">What's on your mind <span className="text-danger">*</span></Label>
          <Input type="textarea"  name="body" id="body" placeholder="Write whatever is on your mind..." required
                 onChange={this.onChange}
                    value={this.state.body} />
        </FormGroup>
        <FormGroup>
          <Label for="username">User Name <span className="text-danger">*</span></Label>
          <Input type="text" name="username" id="username" placeholder="Enter your name..." required
                 onChange={this.onChange}
                 value={this.state.username}/>
          <FormText color="muted">You can use an anonymous name.</FormText>
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  hideModal: PropTypes.func,
};

export default connect(null, { createPost })(PostForm);
