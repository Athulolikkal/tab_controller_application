/* eslint-disable @typescript-eslint/no-explicit-any */

import GoogleLoginComponent from "../../components/googleLogin";
import { Box, Typography } from '@mui/material';

const LoginScreenPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Login
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2, color: 'text.secondary' }}>
        Please connect with us through your Google account
      </Typography>
      <GoogleLoginComponent />
    </Box>
  );
};

export default LoginScreenPage;
