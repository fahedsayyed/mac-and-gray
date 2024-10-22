import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  four: {
    fontSize: '1.5rem', // inter regular  24
  },
  three: {}, //16px default // inter regular 16
  two: {
    fontSize: '0.875rem', //14px //inter regular 14
  },
  one: {
    fontSize: '0.75rem', //12px //inter regular 12
  },
}));

const BodyText = ({ children, two, one, four, textStyle }) => {
  const classes = useStyles();
  return (
    <Typography
      variant='body2'
      style={{ ...textStyle, fontFamily: 'Urbanist'}}
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

export default BodyText;
