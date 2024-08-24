import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const CustomSlider = styled(Slider)({
  color: 'red',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 10, // Setting the height of the thumb to 120px
    width: 10,  // Setting the width of the thumb to 120px
    backgroundColor: 'red', // Making the thumb red
    borderRadius: '50%', // Making the thumb rounded
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .custom-bar': {
      height: 9,
      width: 1,
      marginLeft: 1,
      marginRight: 1,
    },
  },

});
function CustomThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="custom-bar" />
      <span className="custom-bar" />
      <span className="custom-bar" />
    </SliderThumb>
  );
}
CustomThumbComponent.propTypes = {
  children: PropTypes.node,
};
export default function CustomizedSlider() {
  return (
    <Box sx={{ width: 160 }}>
      <CustomSlider
        slots={{ thumb: CustomThumbComponent }}
        valueLabelDisplay="auto"
        aria-label="custom slider"
        defaultValue={[1, 100]}
      />
    </Box>
  );
}