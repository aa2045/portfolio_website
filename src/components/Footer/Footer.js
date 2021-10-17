import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:aneesah.abdul@gmail.com">aneesah.abdul@gmail.com</LinkItem>
      </LinkColumn>
       <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:+971567418771">+971567418771</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time.
          </Slogan>
        </CompanyContainer>

    <SocialIcons href="https://github.com/aa2045">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/aneesahabdul/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
       
    </FooterWrapper>
  );
};

export default Footer;
