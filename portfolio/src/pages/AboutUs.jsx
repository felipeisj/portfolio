import { useState, useEffect } from "react";
import { Grid } from '@mui/material';

export function AboutUs () {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Grid item xs={12}>
      <h1>{message}</h1>
    </Grid>
  );
}
