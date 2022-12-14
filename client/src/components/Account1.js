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

// import Auth from '../utils/auth';

const Account = () => {
  const theme = createTheme();
  const [formState, setFormState] = useState({
    petName: "",
    petType: "",
  });
  const [addPet] = useMutation(ADD_PET);
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
                  />
                  <FormControlLabel
                    value="cat"
                    control={<Radio />}
                    label="Cat"
                  />
                </RadioGroup>
              </FormControl>
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
};
export default Account;
