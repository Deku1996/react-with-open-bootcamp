import React, {useState} from "react";
import PropTypes from 'prop-types';

const Greetingf = (props) => {

    //Introduccion a useState
    // const [variable, metodo para actualizarlo] = useState(valor inicial)

    const [age, setage] = useState(29);

    const birthday = ()=>{
        // actualizamos el valor
        setage(age +1)
    }


    return (
        <div>
   
                <h2> Hello {props.name} desde componente funcional! </h2>
                
                <h3>
                    Tu edad es de: {age}
                </h3>
                <div>
                    <button onClick={birthday}>Cumplir años</button>
                </div>
            
    

        </div>
    )
}


Greetingf.protoType = {
    name: PropTypes.string,
};

export default Greetingf;