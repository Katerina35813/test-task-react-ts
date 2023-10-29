import { Typography } from '@mui/material';
import ShowMoreText from '../ShowMoreText/ShowMoreText.jsx';
import React, {FC} from 'react';
import styles from "./style.module.css"

interface textProps {
 title: string;
 text: string;
}

export const TextBlock: FC<textProps> = ({ title, text }) => {
 return (
  <div className={styles.textBlock}>
   <span className={styles.title}>{title}</span>
   <Typography variant='body1'>
    <ShowMoreText length={30} children={text} className={styles.text}/>
   </Typography>
  </div>);
};
