import React from 'react';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hello, I am Aneesah
     </SectionTitle>
     <SectionText>
       I am a software developer with a passion for web development and deep-learning.
     </SectionText>
     <a href="mailto:aneesah.abdul@gmail.com">
     <Button >
       Get in touch
     </Button>
     </a>
   </LeftSection>

 </Section>
);

export default Hero;