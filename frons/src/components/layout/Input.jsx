import React from 'react'
import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({...props}) => {
    return (
        <input 
            type="text"
            className={['input', 'input-main'].join(' ')}
            placeholder={props.placeholder}
            {...props}
        />
    )
};

Input.PropTypes = {
    placeholder: PropTypes.string.isRequired
}

