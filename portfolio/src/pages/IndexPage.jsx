import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from "react";

export function Index () {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Container>

      <section>
        <Typography variant="h2" gutterBottom>
          {message}
        </Typography>
        <Typography variant="body1">
          We offer a wide range of services to meet your needs.
          {/* Add more details here */}
        </Typography>
      </section>

      <section>
        <Typography variant="h2" gutterBottom>
          Images
        </Typography>
        {/* Add image gallery or other image content here */}
      </section>

      <section>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Learn about our company and our mission.
          {/* Add more details about your company */}
        </Typography>
      </section>

      <section>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Have questions or want to get in touch? Contact us today!
          {/* Add contact information */}
        </Typography>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </section>
    </Container>
  );
}

