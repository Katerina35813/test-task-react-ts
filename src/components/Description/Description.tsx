import { Grid, Paper } from '@mui/material';
import React, { FC } from 'react';
import { TextBlock } from '../TextBlock/TextBlock';
import styles from "./description.module.css"

interface dataInfo {
 title: string;
 text: string;
}

interface data extends Array<dataInfo[]> {}

const Description: FC<{ data: data }> = ({ data }) => {

 return (
  <Grid container className={styles.textBlock}>
   {data.map(data => (
    <Grid xs={6}>
     {data.map(item => (
      <TextBlock title={item.title} text={item.text} />
     ))}
    </Grid>))}
  </Grid>
 );
};
export default Description;
