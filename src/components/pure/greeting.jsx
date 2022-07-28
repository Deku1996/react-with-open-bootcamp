import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 29
        }
    }

    
    render() {
        return (
            <div>
                <h2> Hello {this.props.name}!! </h2>
                <h3>
                    Tu edad es de: {this.state.age}
                </h3>
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }
    birthday = () =>{
        this.setState((prevState) => ({
           age: prevState.age +1
        })

        )}

}


Greeting.propTypes = {

    name: PropTypes.string,
};


export default Greeting;
