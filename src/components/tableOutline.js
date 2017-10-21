import React, { Component } from 'react'

import TableRow from './tableRow'

export default class TableOutline extends Component{
  constructor(props){
    super(props)
    this.applyFilter = this.applyFilter.bind(this)
    this.updateFilter = this.updateFilter.bind(this)
  }

  updateFilter(event){
    this.props.updateSort(event.target.id)
  }

  applyFilter(array, filter){
    if(filter !== 'name'){
      array.sort(function(a, b){
          if(a[filter] < b[filter]){
            return -1
          }
          if(a[filter] > b[filter]){
            return 1
          }
          return 0
        })
    }
    else{
      array.sort(function(a, b){
          if(a[filter].split(' ')[1] < b[filter].split(' ')[1]){
            return -1
          }
          if(a[filter].split(' ')[1] > b[filter].split(' ')[1]){
            return 1
          }
          return 0
        })
    }
    return array
  }

  adaptArray(){
    let rowArray = this.props.displayList
    if(this.props.filter !== 'none'){ this.applyFilter(rowArray, this.props.filter)}
    rowArray = rowArray.map(function(person){
      return <TableRow key={person.id} personData={person} />
    })

    return rowArray
  }
  
  render(){
    let rowsArr = this.adaptArray()
    return(
      <table>
        <thead>
          <tr onClick={this.updateFilter}>
            <th id='Mac Address'>Mac Address</th>
            <th id='email'>Network Device</th>
            <th id='signUpDate'>Network Name</th>
            <th id='motto'>IP Device</th>
          </tr>
        </thead>
        <tbody>
        {rowsArr}
        </tbody>
      </table>
    )
  }
}
