import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Container, Box, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Box mt={15}>
          <Typography color="primary" variant="h2" component="h6">
            Hello There , ready to use React-MaterialUI template
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
