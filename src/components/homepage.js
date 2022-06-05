import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import cover from './images/cover.jpg'
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';

function Homepage() {
  return (
    <>
        <Box sx={{bgcolor:'#F7C85C', display:'flex' }}>
            <Box sx={{display:'flex',justifyContent: 'flex-end',mr:35}}>
                <img src={cover} alt="img not found" height={"450px"} />
            </Box>
            <Box sx={{display:'flex',alignItems: 'center' }}>
                <h1>Hello World</h1>
            </Box>
                <Box sx={{display:'flex',alignItems: 'center' }}>
                <Button variant="contained" color="error" endIcon={<VolunteerActivismTwoToneIcon sx={{ fontSize: 100 }}/>}>
                  Donate
                </Button>
                </Box>
        </Box>
    </>
  )
}

export default Homepage