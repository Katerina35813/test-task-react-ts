import React, { FC } from 'react';
import AccordionInfo from './AccordionInfo/AccordionInfo';
import Description from './Description';
import { Typography, Paper } from '@mui/material';
import { data } from '../../data/data';

export const InfoBlock: FC = () => {

 return (
  <Paper>

   <Typography>Основная информация</Typography>
   <Description data={data.mainInfo} />
   <AccordionInfo info={data.dataWorkPlan.info} title={data.dataWorkPlan.title} />
   <AccordionInfo info={data.dataImpact.info} title={data.dataImpact.title} />
   <Typography>Дополнительная информация</Typography>
   <Description data={data.additionalInfo} />

  </Paper>

 );
};