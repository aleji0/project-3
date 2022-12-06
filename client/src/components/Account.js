import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PET } from "../utils/mutations";
import { ADD_PET } from "../utils/queries";
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
  const [getUser, { error, data }] = useMutation(ADD_PET);
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
  const handleInteger = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: parseInt(value),
    });
  };

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

  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>;

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
              onChange={handleInteger}
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
              onChange={handleInteger}
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
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Healthy Pets
            </Typography>

            <Typography variant="body2"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </ThemeProvider>
  );
};
export default Account;
