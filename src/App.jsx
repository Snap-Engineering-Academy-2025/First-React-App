import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './App.css'
import Grid from '@mui/material/Grid';
import DataCard from './DataCard';


// import characters from './protagonists.json'

function App() {
  return (
    <>
      <Container maxWidth="md" color="grey" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Book Diary
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Keep track of books you've read/want to read!
        </Typography>
      </Container>

      <Grid 
      container 
      spacing={2}
      sx={{
        justifyContent:"center"
      }}>

        <Grid item>
          <DataCard
            title="The Seven Husbands of Evelyn Hugo"
            desc={["Heartbreaking", "Fast Read"]}
            imgURL={"https://i.redd.it/ga9po4pggwea1.jpg"}
          />
        </Grid>

        <Grid item>
          <DataCard
            title="Pride and Prejudice"
            desc={["Classic", "Slow at first", "Lots of Yearning"]}
            imgURL={"https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg"}
          />
        </Grid>

        <Grid item>
          <DataCard
            title="Educated"
            desc={["Memoir", "Lots of trauma", "good read"]}
            imgURL={"https://m.media-amazon.com/images/I/81Om0n+pfyL.jpg"}
          />
        </Grid>

        <Grid item>
          <DataCard
          title="Foster"
          desc={["Not sure yet", "Jack Edwards recommends"]}
          imgURL={"https://groveatlantic.com/core/wp-content/uploads/2022/04/FosterHC.jpg"}
          />
        </Grid>

        <Grid item>
          <DataCard
          title="The Catcher in the Rye"
          desc={["Classic","Coming of Age", "Antihero/Problematic MC"]}
          imgURL={"https://m.media-amazon.com/images/I/8125BDk3l9L.jpg"}
          />
        </Grid>
      </Grid>

      
    </>
  )
}

export default App