import {
    FormControl,
    TextField,
    InputAdornment
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: '20px 0px 10px',
        minWidth: 120,
        width: '100%',
        transform: 'none',
        '& .MuiInputBase-input': { paddingLeft: 8},
        '& .MuiInputBase-root': {
            backgroundColor: '#fff',
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, -3px) scale(0.8)'
        }
      },
      adorment: {
        paddingRight: 8,
        '& .MuiTypography-root': {
            fontSize: '0.8rem',
        }
    },
}));


export default function InputText(props) {


    const classes = useStyles()
    const rows = props.multiline ? 10 : 1
    const endAdorObject = props.endAdorment === undefined ? {} : {
        endAdornment: <InputAdornment
        className={classes.adorment}
        position="end"
        children="VND"/>
    }

    return (
    <FormControl style={props.styleForm} className={classes.formControl}>
        <TextField
            rows={rows}
            rowsMax={rows}
            disableAnimation
            fullWidth
            onChange={props.func}
            InputProps={endAdorObject}
            InputLabelProps={{
                shrink: true,
              }}
            {...props}
        />
    </FormControl>
    )
}
