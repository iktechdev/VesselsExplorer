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
  
    
    
   var result = props.teste
   console.log('updated map')
   console.log(result)  
  

  return <VesselsMap vessels={result}/>;

};

const mapStateToProps = state => (
    {teste: state}
    
    );

export default connect(mapStateToProps)(UpdateMap);
