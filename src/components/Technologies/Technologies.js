import React from 'react';
import { DiCode, DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "technology">
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>I have learnt a range of programming languages and worked with DevOps technologies extensively.</SectionText>
    <List>
      <ListItem>
        <DiCode size = "3rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python <br />
            JavaScript <br />
            Java <br />
            C# <br />
            C++ <br />
            Swift <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

    <ListItem>
      <DiReact size = "3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next.js <br />
            React.js (library) <br />

          </ListParagraph>
        </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size = "3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br />
            Express.js (library) <br />
            and Databases.

          </ListParagraph>
        </ListContainer>
    </ListItem>

    </List>
  </Section>
);

export default Technologies;
