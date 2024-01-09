import { Container, Grid } from '@mui/material';
import PropTypes from 'prop-types';

export function Layout({ children }) {
  return (
    <Container>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        {children}
      </Grid>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};