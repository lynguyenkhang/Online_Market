import {
    FormControl, InputLabel,



    NativeSelect
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: '20px 0px 10px',
        minWidth: 120,
        width: '100%',
        transform: 'none',
        '& .MuiInputBase-input': { paddingLeft: 8 },
        '& .MuiInputBase-root': {
            backgroundColor: '#fff',
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, -3px) scale(0.8)'
        }
    },
}));



function SelectNative({ label, value, func, data, objectArr = false }) {
    const classes = useStyles()

    return (
        <FormControl className={classes.formControl}>

            <InputLabel disableAnimation shrink>
                {label}
            </InputLabel>

            <NativeSelect variant="filled"
                value={value}
                onChange={func}
            >
                {!objectArr && data.map(Name => <option value={Name}>
                    {Name}
                </option>)}

                {objectArr && data.map(({ Name }) => <option value={Name}>
                    {Name}
                </option>)}

            </NativeSelect>
        </FormControl>
    )
}

export default SelectNative
