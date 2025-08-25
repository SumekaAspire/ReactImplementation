import React from 'react'

const withLoader = (WrappedComponent) => {
  return function enhancedComponent({isLoading, ...props}){
    if(isLoading){
        return(
            <div style={{fontSize:"12px", color:"orange"}}>
                Loading data...
            </div>
        );
    }
    return<WrappedComponent{...props}/>
  };
}

export default withLoader