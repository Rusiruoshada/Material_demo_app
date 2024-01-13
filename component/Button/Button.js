import React from 'react'
import { Button, useMediaQuery } from '@mui/material'

export default function ButtonField(props) {
  const showText = useMediaQuery('(min-width:450px)')
  return (
    <Button 
        onClick={props.onClick}
        variant={props.variant? props.variant:'contained'} 
        endIcon={props.icon}  
        type={props.type}
        size={props.size}
        sx={{
          borderRadius: [props.borderRadius],
          color: [props.color],
          backgroundColor: [props.bgColor? props.bgColor: '#fff'],
          minWidth: [props.minWidth],
          padding: [props.padding]      
        }}
        className={`text-[10px] ${props.classNames}`}
        
    >
        {showText? props.textField : '' }
    </Button>
  )
}
