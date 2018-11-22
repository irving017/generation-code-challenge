import React, { Component } from 'react';
import Map from './Map'
import data from '../store_directory'

export default class Mapcontainer extends Component {
  render() {
    return (
      <div>
        <Map
        addPlaces = {this.props.addPlaces}
        data = {data}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

