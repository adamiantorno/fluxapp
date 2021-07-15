import React from 'react'
import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({size, ...props}) => {
    return (
        <input 
            type="text"
            className={['input-main', `input--${size}`].join(' ')}
            placeholder={props.placeholder}
            {...props}
        />
    )
};

Input.PropTypes = {
    placeholder: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'fill'])
}

Input.defaultProps = {
    placeholder: '',
    size: 'fill'
}

