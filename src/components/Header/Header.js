import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span,AnchorTag } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
    <Link  href = "/">
      <a style ={{display:'flex', alignItems: 'center', color: 'white', marginBottom: 20}}>
        <DiCssdeck size = "3rem"/> <Span>Portfolio</Span>

      </a>
    </Link>
    </Div1>

    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#technology">
        <NavLink>
          Technology
        </NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
        <NavLink>
          About
        </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/aa2045">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/aneesahabdul/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
         {/* <AnchorTag href="mailto:aneesah@gmail.com">
        <SocialIcons>
          <AiFillMail size="3rem" /> 
        </SocialIcons>  
        </AnchorTag> */}
    </Div3>
  </Container>
);

export default Header;
