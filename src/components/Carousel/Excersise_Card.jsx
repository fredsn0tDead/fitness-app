import React from 'react'
import { Typography,Box } from '@mui/material'
import {Link } from 'react-router-dom'
export const Excersise_Card = ({giflink}) => {


  return (
    <div>
        <img src={giflink}  loading ="lazy" />

    </div>

    
  )
}
