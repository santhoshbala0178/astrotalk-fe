import React from 'react';
import styled from 'styled-components';
import SearchListPage from '../SearchListPage';
import SortDropDown from '../SortDropDown';

const StyledSubHeader = styled.div`
  margin: 10px;
  margin-top: 1%;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTextContainer = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledTextHolder = styled.div`
  font-size: 21px;
  color: #444
  444;
  font-weight: 400;
  text-align: center;
  }
`;

const SubHeader: React.FC = () => (
  <StyledSubHeader>
    <StyledTextContainer>
      <StyledTextHolder>Chat with Astrologer</StyledTextHolder>
    </StyledTextContainer>
    <StyledContainer>
      <SortDropDown />
      <SearchListPage />
    </StyledContainer>
  </StyledSubHeader>
);

export default SubHeader;
