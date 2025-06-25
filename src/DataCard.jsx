import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'
import { Popover } from "@mui/material";


export default function DataCard({title, author, desc, imgURL}) {

  //mouse popover
  const[anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <Card sx={{ width: 250, height: 565, m: 2, border: 10, borderColor: "white" }}>

        <CardMedia
            sx={{ height: 375, borderRadius: '8px' }}
            image={imgURL}     
            />

      <CardContent>
        <Typography 
        variant="h6" 
        component="div"
        aria-owns={open ? 'mouse-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => {setAnchorEl(e.currentTarget);}}
        onMouseLeave={() => {setAnchorEl(null);}}
        >
            {title}
        </Typography>
        <Popover
        id="mouse-popover"
        sx={{ pointerEvents: 'none'}}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        onClose={() => {setAnchorEl(null);}}
        disableRestoreFocus
        >
            <Typography sx={{ p:1 }}>Written by: {author}</Typography>
        </Popover>
        <Typography variant="body2" sx={{ color: 'GrayText', mt: 1}}>
            {desc}
        </Typography>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Read" />
        </FormGroup>
      </CardContent>
    </Card>
  );
}