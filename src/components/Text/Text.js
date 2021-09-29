import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export const Text = styled(Typography)(({ theme }) => ({
    marginBottom:'2px',
    fontFamily: 'Montserrat, sans-serif',
    transition: 'all 0.4s ease'
  }));