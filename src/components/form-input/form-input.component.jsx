import React from 'react';

import './form-input.styles.scss';


const FormInput = ({ handleChange , label , ...otherprops }) => (

    <div className= "group">
        <input className = 'form-input ' onChange = {handleChange} { ...otherprops} />
 

    </div>
);

export default FormInput ;