import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import logo from './logo.svg';
import './App.css';

import TableOutline from './components/tableOutline'
import showMore from './actions/showMore'
import updateFilter from './actions/updateFilter'

class App extends Component {
  constructor(props){
    super(props)
    this.extendList = this.extendList.bind(this)
  }
  extendList(){
    this.props.showMore(this.props.displayLength + 10)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div>
          <TableOutline displayList={this.props.list.slice(0, this.props.displayLength)}
          filter={this.props.filter} updateSort={this.props.updateFilter}/>
          <button onClick={this.extendList}>Load More</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return { list: state.list, displayLength: state.displayLength, filter: state.filter }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    showMore: showMore,
    updateFilter: updateFilter
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
