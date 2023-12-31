import React from 'react'
import { Button } from '@mui/material'

export default function ButtonField(props) {
  return (
    <Button 
        variant={props.variant} 
        endIcon={props.icon}  
        type={props.type}
        size={props.size}
        sx={{
          borderRadius: [props.borderRadius],       
        }}
        
        
    >
        {props.textField}
    </Button>
  )
}
