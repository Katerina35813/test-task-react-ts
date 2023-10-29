import React, { useState, SyntheticEvent } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { headings } from '../../constants/constants';
import TablePeople from '../PeopleTable/TablePeople';
import { InfoBlock } from '../Description/InfoBlock';
import styles from './section.module.css';


function a11yProps(index: number) {
 return {
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
 };
}

export default function Section() {
 const [value, setValue] = useState(0);

 const handleChange = (event: SyntheticEvent, newValue: number) => {
  setValue(newValue);
 };

 return (
  <Box>
   <Box>
    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
     {headings.map((heading, index) => (<Tab label={heading} {...a11yProps(index)} />))}
    </Tabs>
   </Box>
   {value === 0 ? (
    <InfoBlock />
   ) : (<TablePeople />)}
  </Box>
 );
}

