import React  from 'react'
import { TextField } from '@material-ui/core';


const Input = ({ name, handleChange, label, half, autoFocus, type, onFocus, placeholder, multiline, defaultValue, rows}) => {

    
    return (
        <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            onFocus={onFocus}
            autoFocus={autoFocus}
            type={type}
            placeholder={placeholder}
            multiline={multiline}
            defaultValue={defaultValue}
            rows={rows}
    
        />
    );
}

export default Input;
