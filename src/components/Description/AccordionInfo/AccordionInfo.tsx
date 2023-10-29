import React, { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { TextBlock } from '../../TextBlock/TextBlock';
import DocumentUploader from '../../DocumentUploader/DocumentUploader';

interface dataAccordion {
 title: string;
 info: {
  infoTitle: string;
  infoText: string;
  countDoc?: number,
 }[];
}

const AccordionInfo: FC<dataAccordion> = (data) => {

 return (
  <div>
   <Accordion style={{ boxShadow: 'none' }}>
    <AccordionSummary
     expandIcon={<ExpandMore />}
     aria-controls='panel1a-content'
     id='panel1a-header'
    >
     <Typography>{data.title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
     {data.info.map(i => (
      <>
       <TextBlock title={i.infoTitle} text={i.infoText} />
       {i.countDoc ? Array.from({ length: i.countDoc }, () => (
        <DocumentUploader />)) : null}
      </>
     ))}
    </AccordionDetails>
   </Accordion>
  </div>
 );
};
export default AccordionInfo;
