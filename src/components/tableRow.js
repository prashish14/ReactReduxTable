import React, { Component } from 'react'

export default class TableRow extends Component{

  render(){
    return(
      <tr>
        <td>
          <p>{this.props.personData.name}</p>
        </td>
        <td>
          {this.props.personData.email}
        </td>
        <td>
          <p>{this.props.personData.signUpDate}</p>
        </td>
        <td>
          <p>{this.props.personData.motto}</p>
        </td>
      </tr>
    )
  }
}
