import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

// import characters from './protagonists.json'

function App() {
  return (
    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Book Log
        </Typography>
      </Container>

      <Grid container spacing={2}>
        <Grid>
          <Item>
            <Card sx={{ maxWidth: 250, m: 2 }}>
              <CardMedia
                sx={{ height: 375 }}
                image="https://i.redd.it/ga9po4pggwea1.jpg"     
                title="The Seven Husbands Of Evelyn Hugo book"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  The Seven Husbands of Evelyn Hugo
                </Typography>
                <Typography variant="body2" sx={{ color: 'GrayText', mt: 2 }}>
                  Heartbreaking, Fast Read, Slightly Gay
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'black' }}>Details</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <Card sx={{ maxWidth: 250, m: 2 }}>
              <CardMedia
                sx={{ height: 375 }}
                image="https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg"     
                title="Pride and Prejudice book"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Pride and Prejudice
                </Typography>
                <Typography variant="body2" sx={{ color: 'GrayText', mt: 2 }}>
                  Classic, Slow, Lots of Yearning
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'black' }}>Details</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid>
          <Item>
            <Card sx={{ maxWidth: 250, m: 2 }}>
              <CardMedia
                sx={{ height: 375 }}
                image="https://m.media-amazon.com/images/I/81Om0n+pfyL.jpg"     
                title="Educated book"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Educated
                </Typography>
                <Typography variant="body2" sx={{ color: 'GrayText', mt: 2 }}>
                  Memoir, Lots of trauma, good read
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'black' }}>Details</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>

      
    </>
  )
}

export default App