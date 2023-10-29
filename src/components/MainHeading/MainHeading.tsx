import React from 'react';
import { TextBlock } from '../TextBlock/TextBlock';
import { Grid,Paper } from '@mui/material';
import styles from "./mainHeading.module.css";
import {data} from '../../data/data';
import Section from '../Section/Section';

export const Main = () => {
 return (
  <div className={styles.container}>
   <Paper className={styles.main}>
    <div>
     <h2>{data.mainHeading.title}</h2>
     <Grid className={styles.block}>
      {data.mainHeading.info.map(item => (
       <TextBlock title={item.titleInfo} text={item.text} />
      ))}
     </Grid>
     <Section />
    </div>
   </Paper>
  </div>
 );
};