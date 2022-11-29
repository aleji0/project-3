import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Navbar = () => {
        const [value, setValue] = React.useState('one');
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="Account" />
              <Tab value="two" label="Cats" />
              <Tab value="three" label="Dogs" />
            </Tabs>
          </Box>
        );
      };


export default Navbar