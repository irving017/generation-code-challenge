import React, { Component } from 'react';
import {Marker,InfoWindow} from 'react-google-maps'

export default class Mark extends Component {
  
  state={
    lat:0,
    lng:0,
    isOpen:false
  }

  componentDidMount(){
    setTimeout(()=>{
      this.getLocation()
    },100) 
  }
  
  getLocation=()=>{
    let geoCoder = new window.google.maps.Geocoder()
    geoCoder.geocode({ 'address':this.props.e.Address},(results, status)=>{
      if (status === 'OK') {
          console.log(status,this.props.e.Address)
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          this.setState({lat,lng})
      }
      else if(status==='OVER_QUERY_LIMIT'){
        setTimeout(()=>{
          this.getLocation()
        },100) 
      }
      else {
          console.log(status,this.props.e.Address)
          //console.log('Geocode was not successful for the following reason: ' + status);
      }
    })
  }

  toggleOpen=()=>{
    this.setState({isOpen:true})
  }

  toggleClose=()=>{
    this.setState({isOpen:false})
  }

  render() {
    return (
      <div>
        <Marker
        //position={{lat: -34.397, lng: 150.644}}
        position={{lat:this.state.lat,lng:this.state.lng}}
        onClick={this.toggleOpen}
        >
        {this.state.isOpen && <InfoWindow onCloseClick={this.toggleClose}>
          <div className="">
          <p style={{fontSize:'1rem', fontWeight:500}}>{this.props.e.Name}</p>
          <p style={{fontSize:'.8rem'}}>{this.props.e.Address}</p>
          <button className='btn btn-primary' onClick={()=>this.props.addPlaces(this.props.e.Name)}>Add to Favourites</button>
          </div>
        </InfoWindow>}
        </Marker>
      </div>
    );
  }
}

