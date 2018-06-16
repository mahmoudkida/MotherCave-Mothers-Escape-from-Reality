import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import PostList from './components/posts_list';
import PostForm from './components/create_post';

import store from './stores';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component {
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
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
              <a href="../" className="navbar-brand">Mother Cave</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">

                </ul>

              </div>
            </div>
          </div>
          <main className="container">
            <div className="jumbotron">
              <h1 className="display-3">Mother Cave</h1>
              <p className="lead">Mothers' escape from reality</p>
              <hr className="my-4"/>
              <p>A place where mother gather and share their experience and struggles</p>
              <p className="lead">
                <a onClick={this.toggle} className="btn btn-primary btn-lg" href="#" role="button">Add your story</a>
              </p>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add New Post</ModalHeader>
              <ModalBody>
                <PostForm hideModal={this.toggle}/>
              </ModalBody>
            </Modal>

            <PostList />
          </main>

        </div>
      </Provider>
    );
  }
}

export default App;
