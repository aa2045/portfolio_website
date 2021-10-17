import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Passed MSc in Software Engineering with Distinction.'},
  { number: 2, text: 'Paper on Sentiment Analysis for Software Engineering Text to be published.', },
  ,
  
];

const Acomplishments = () => (
  <Section> 
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes main center>
      {data.map((card, index) =>(
        <Box key= {index}>
          <BoxText>{card.text}</BoxText>

        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
