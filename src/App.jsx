import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './App.css'
import Grid from '@mui/material/Grid';
import DataCard from './DataCard';
import books from "./novels.json";
import { useState } from 'react';
import { TextField } from "@mui/material";


// import characters from './protagonists.json'

function App() {

  //click counter
  //const [clickCounter, setCounter] = useState(0);
  const [name, setTitle] = useState('');

  let searchBar = books.filter((book) => {
    let descString = ""
    for(let i = 0; i < book.desc.length; i++){
      descString += book.desc[i];
    }

    let retCondition = book.title.toLowerCase().includes(name.toLowerCase()) || book.author.toLowerCase().includes(name.toLowerCase()) || descString.toLowerCase().includes(name.toLowerCase());

    return retCondition;
  } );
  
  if(searchBar.length == 0)
  {
    searchBar = books;
  }


  return (
    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Book Diary
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Keep track of books you've read/want to read!
        </Typography>
      </Container>
      <Container align="center">
        <TextField 
        id="outlined-controlled" 
        label="Search" 
        value={name}
        onChange={(e) => {
          setTitle(e.target.value);
          //console.log("search field changed: " + name);
        }} 
        sx={{ width: 300}}
        />
      </Container>
{/*
      <Container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          variant="contained"
          sx={{ px: 6, ml: 2, mr: 2 }}
          onClick={() => {
            setCounter(clickCounter + 1);
            console.log("Click counter: ", clickCounter);
          }}
        >
          Click Me
        </Button>

        <Typography 
          variant="h5"
          color="text.secondary"
        >
          Clicks so far: {clickCounter}
        </Typography>

      </Container>
*/}
      <Grid 
      container 
      spacing={2}
      sx={{
        justifyContent:"center"
      }}>
        {searchBar.map((book) => (
        <Grid key={book.id}>
          <DataCard
            title={book.title}
            desc={book.desc}
            imgURL={book.imgURL}
            author={book.author}
          />
        </Grid>
        ))}
      </Grid>

      
    </>
  )
}

export default App