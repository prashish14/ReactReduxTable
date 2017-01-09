import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <p>{this.props.list.length}</p>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return { list: state.list }
}
export default connect(mapStateToProps)(App);
