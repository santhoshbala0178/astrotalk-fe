import React from 'react';
import styled from 'styled-components';

const StyledImageHolder = styled.div`
  margin-right: 30px;
  width: 15%;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height:100%;
`;

const DetailImage: React.FC = () => {
    return <StyledImageHolder>
        <StyledImage src="/assets/TAT_web_logo2.png"></StyledImage>
    </StyledImageHolder>
}

export default DetailImage;