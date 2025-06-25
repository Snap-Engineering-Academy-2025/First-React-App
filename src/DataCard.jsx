import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function DataCard({title, desc, imgURL}) {
    //map each item in array to become a bullet pointed item
    const descItems = desc.map((descItem) => <Typography component="li">{descItem}</Typography>);

  return (
    <Card sx={{ width: 250, height: 565, m: 2, border: 10, borderColor: "white" }}>

        <CardMedia
            sx={{ height: 375, borderRadius: '8px' }}
            image={imgURL}     
            />

      <CardContent>
        <Typography variant="h6" component="div">
            {title}
        </Typography>
        <Typography component="ul" variant="body2" sx={{ color: 'GrayText', mt: 1}}>
            {descItems}
        </Typography>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Read" />
        </FormGroup>
      </CardContent>
    </Card>
  );
}