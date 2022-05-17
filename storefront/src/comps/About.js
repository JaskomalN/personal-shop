import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
        <Box 
        display='flex'
        flexDirection= 'column'
        alignItems='center'>
            <Typography sx={{ fontSize: 8}} sx={{fontFamily:"Merriweather Medium"}}>Hello, I'm Jaskomal! Welcome to my humble abode </Typography>
            <Typography sx={{fontFamily:"Merriweather Medium"}}>Here I sell any used clothing I've been wanting to get rid of. Message me on Instagram, @jaskomalnatt, to move forward
            with a purchase!</Typography>
        </Box>
    </div>
  )
}

export default About