// Material-UI
import { useTheme } from '@mui/material/styles';
// React
import React from 'react';
// Image import
import Bike2Car from '../../assets/images/users/Bike2Car.png';


// ==============================|| LOGO COMPONENT ||============================== //

export default function LogoMain() {
  const theme = useTheme();

  return (
    // Use this <img> instead of the <svg>
    <img
      src={Bike2Car}
      alt="My Logo"
      style={{ width: '120px', height: '80px' }}
    />
  );
}
