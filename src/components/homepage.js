import { Box } from '@mui/system'
import React from 'react'
import cover from './images/cover.jpg'

function Homepage() {
  return (
    <>
        <Box sx={{bgcolor:'#F7C85C', display:'flex'}}>
            <Box sx={{display:'flex',justifyContent: 'flex-end',mr:35}}>
                <img src={cover} alt="img not found" height={"450px"} />
            </Box>
            <Box sx={{display:'flex',alignItems: 'center' }}>
                <h1>Hello World</h1>
            </Box>
        </Box>
    </>
  )
}

export default Homepage