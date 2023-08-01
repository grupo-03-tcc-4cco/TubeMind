"use client"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const Buttons = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}));

export default Buttons;
