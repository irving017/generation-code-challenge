import React, { Component } from 'react';
import MapContainer from './MapContainer'
import ListContainer from './ListContainer'



class Favorites extends Component {

  state={
    favs:[]
  }

  addPlaces=(info)=>{
    const {favs} = this.state
    console.log(info)
    if(favs.includes(info))alert('This place is already in your favourites')
    else {
    favs.push(info)
    this.setState({favs})}
  }

  removePlaces=(i)=>{
    const {favs} = this.state
    favs.splice(i,1)
    this.setState({favs})
  }

  render() {
    const {favs}=this.state
    return (
      <div>
        <div className='row'>
          <div className='col-3' style={{backgroundColor:'#417285'}}>
            <ListContainer
            favs={favs}
            removePlaces={this.removePlaces}           
            />
          </div>
          <div className='col-9'style={{padding:0}} >
            <MapContainer
            addPlaces={this.addPlaces}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
