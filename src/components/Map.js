import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import Mark from './Mark'

const Map= withScriptjs(withGoogleMap((props)=>{
  
  return(
    <div>
    <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 19.3060502, lng: -99.1130584}}
    >
    {/* <Mark
    addPlaces={props.addPlaces}
    /> */}
    {props.data.map((e,i)=><Mark key={i} e={e} i={i} addPlaces={props.addPlaces}/>)}
    </GoogleMap>
    </div>
  )
  }
))

export default Map;