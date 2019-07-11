import React from "react";

const FormInput = (props) => {
    return (
        <>
            <input {...props.input} type={props.type} />
            <span>{props.meta.touched && props.meta.error}</span>
        </>
    )
}

export default FormInput;