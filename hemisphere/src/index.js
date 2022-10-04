import React from "react";
import  ReactDOM  from "react-dom";


class App extends React.Component {

    constructor(props){
        super(props)
        this.state = { latitude: null , errorMessage:''}
        console.log("running:"+props);

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                 console.log(position.coords);
                
                this.setState({ latitude: position.coords.latitude });
                console.log(this.state)

            },
            (error) => {
                
                console.log(error)
                this.setState({errorMessage: error.message})
                console.log(this.state)

            }
            );

    }
    render(){
        
    if(!this.state.errorMessage && this.state.latitude)
        return <div>{this.state.latitude}</div>
    else if(this.state.errorMessage && !this.state.latitude)
        return <div>{this.state.errorMessage}</div>
    else return <div>Loading...</div>
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
