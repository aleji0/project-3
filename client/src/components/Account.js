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
    petType: "generic",
  });
  const [addPet, { error, data }] = useMutation(ADD_PET);
  const [getUser, { error, data }] = useMutation(ADD_PET);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
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
    });
  };
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="petType"
              label="What kind of pet do you have?"
              name="petType"
              autoComplete="petType"
              autoFocus
              className="form-input"
              placeholder="What kind of pet do you have?"
              type="text"
              value={formState.petType}
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
      </Container>
    </ThemeProvider>
  );
};
export default Account;
