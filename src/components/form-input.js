import React from 'react'

const FormInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} value={props.value} onChange={props.handleChange} name={props.name}/>
        </div>
    )
}


export default FormInput