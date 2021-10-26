import React, { useEffect } from "react";
import { connect } from "react-redux";
import VesselsMap from "../VesselsMap";

const UpdateMap = props => {
  useEffect(() => {

    const timer = setInterval(
        () => props.dispatch({ type: "UPDATE_LIST" })
    , 5000);
    return () => clearTimeout(timer);
  });

  //percorre lista passada pelo state
  
    console.log('sssss')
    console.log(props.teste)
    
  return <VesselsMap updated={props.teste}/>;
};

const mapStateToProps = state => (
    {teste: state}
    
    );

export default connect(mapStateToProps)(UpdateMap);
