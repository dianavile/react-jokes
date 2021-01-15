import React from 'react'
import App from '../App';

// class Component
class Welcome extends React.Component { 
    state ={
        visibleApp: false
    };
    render() {
        //add conditional
        if (this.state.visibleApp == true){
            return <div><App /> </div>
        } 
        //add variable
        const show = this.state.visibleApp ? (<App />) : (<div>  <h1>Welcome !!!</h1> </div>);
        //add return()
        return (
            <div>
                {show}
                <button onClick={() => {
                    this.setState({ visibleApp: !this.state.visibleApp })
                }}>Access</button>
            </div>
        )    
    }
}
export default Welcome;