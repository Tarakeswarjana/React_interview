import React, { Component } from 'react'
import './Style.css'
import Styles from '../Stylesheet.module.css'

export default class Style extends Component {
   
  render() {
    return (
      <div>Style
        <h1>hii newton</h1>
        <h2 className={Styles.sucsess}>we will be sucside soon</h2>
      </div>
    )
  }
}
