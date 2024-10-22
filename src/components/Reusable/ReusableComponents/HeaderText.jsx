import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  four: {
    fontSize: '1.5rem',
    fontWeight: 600, // inter semi bold 24
  },
  three: {
    fontWeight: 600, // inter semi bold 16
  },
  two: {
    fontSize: '1rem',
    fontWeight: 600, // inter semi bold 14
  },
  one: {
    fontSize: '0.75rem', // inter semi bold 12
    fontWeight: 600,
  },
}));

const TitleText = ({ children, two, one, four, textStyle }) => {
  const classes = useStyles();
  return (
    <Typography
      variant='h6'
      style={textStyle}
      title={children}
      className={
        two
          ? classes.two
          : one
          ? classes.one
          : four
          ? classes.four
          : classes.three
      }
    >
      {children}
    </Typography>
  );
};

export default TitleText;
