import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin: 10px;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const StyledTagLine = styled.div`
  font-size: 10px;
`;

const AppIcon: React.FC = () => (
  <>
    <StyledLink href="http://localhost:8080/">
      <StyledImg
        src="/assets/TAT_web_logo2.png"
        alt="Astrotalk logo icon"
        title="Logo icon of Astrotalk"
        width="40px"
        height="40px"
      />
    </StyledLink>
    <div>
      <StyledName>AstroTalk</StyledName>
      <StyledTagLine>Astrology on the go</StyledTagLine>
    </div>
  </>
);

export default AppIcon;
