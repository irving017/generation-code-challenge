import React from 'react';

const List = (props) => {
  return (
    <div>
      <ul className='list-group' style={{marginTop:'10%'}}>
      <li className='list-group-item' style={{backgroundColor:'#7DDBFF',fontSize:'1.5rem'}}>Favourites</li>
      {props.favs.map((e,i)=>
      <li key={i} className='list-group-item'>
        <p style={{fontSize:'.9rem'}}>{e}</p>
        <button className='btn btn-danger' onClick={()=>props.removePlaces(i)}>Remove</button>
      </li>
      )}
      </ul>
    </div>
  );
}

export default List;
