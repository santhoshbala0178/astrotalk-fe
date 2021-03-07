import React from 'react';
import styled from 'styled-components';
import SearchListPage from '../SearchListPage';
import SortDropDown from '../SortDropDown';

const StyledSubHeader = styled.div`
  margin: 10px;
  margin-top: 1%;
  display: flex;
`;

const StyledTextContainer = styled.div`
  width: 50%;
`;

const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledTextHolder = styled.div`
  font-size: 21px;
  color: #444444;
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
