import React, { Component } from 'react';
import Favorites from './components/Favorites'

/*
* Use this component as a launching-pad to build your functionality.
*
*/
class YourComponent extends Component {
  
  
  render() {
    return (
      <div>
      <Favorites/>
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};

export default YourComponent;
