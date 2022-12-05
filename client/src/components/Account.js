import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMutation } from "@apollo/client";
import { ADD_PET } from "../utils/mutations";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// import Auth from '../utils/auth';
const Account = () => {
  const theme = createTheme();
  const [formState, setFormState] = useState({
    petName: "",
    petType: "",
    petWeight: "",
    petAge: "",
  });
  const [addPet, { error, data }] = useMutation(ADD_PET);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
      // [weight]: value,
      // [age]: age,
    });
  };

  const [selected, setSelected] = useState("dog");
  const handleRadio = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  // const handleWeight = (event) => {
  //   const { weight, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [weight]: value,
  //   });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addPet({
        variables: { ...formState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      petName: "",
      petType: "",
      petWeight: "",
      petAge: "",
    });
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome! Tell us about your pets!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="petName"
              label="What is your pet's name?"
              name="petName"
              autoComplete="petName"
              autoFocus
              className="form-input"
              placeholder="Your pet's name"
              type="text"
              value={formState.petName}
              onChange={handleChange}
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Pet Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="dog"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="dog"
                  control={<Radio />}
                  label="Dog"
                  checked={selected === "dog"}
                  onChange={handleRadio}
                />
                <FormControlLabel
                  value="cat"
                  control={<Radio />}
                  label="Cat"
                  checked={selected === "cat"}
                  onChange={handleRadio}
                />
              </RadioGroup>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="petWeight"
              label="What is your pet's weight in lbs?"
              name="petWeight"
              autoComplete="petWeight"
              autoFocus
              className="form-input"
              placeholder="Your pet's weight in lbs?"
              type="number"
              value={formState.petWeight}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="petAge"
              label="What is your pet's age?"
              name="petAge"
              autoComplete="petAge"
              autoFocus
              className="form-input"
              placeholder="Your pet's age"
              type="number"
              value={formState.petAge}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  Toothbrush
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  $4.50
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
              just down the hall.
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Typography gutterBottom variant="body1">
              Select type
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Extra Soft" />
              <Chip color="primary" label="Soft" />
              <Chip label="Medium" />
              <Chip label="Hard" />
            </Stack>
          </Box>
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <Button>Add to cart</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Account;
