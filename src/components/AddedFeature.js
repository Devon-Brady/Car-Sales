import React from 'react';
import {connect} from 'react-redux';
import {carReducer} from '../reducers/reducers';

const AddedFeature = props => {
 console.log('this is props in  added',props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
