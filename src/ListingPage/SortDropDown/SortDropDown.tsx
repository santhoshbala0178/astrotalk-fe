import { useReactiveVar } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { sortByVar } from '../../cache';

const StyledSortDropDownHolder = styled.div`
  width: 40%;
`;

const StyledSortDropDown = styled.select`
  width: 100%;
  height: 100%;
  padding: 7px;
  border-radius: 5px;
  border: 1px solid #dedede;
  background: transparent;
  color: #555;
`;
const SortDropDown: React.FC = () => {
  const sortBy = useReactiveVar(sortByVar);
  function handleOnChange(e) {
    sortByVar(e.target.value);
  }

  return (
    <StyledSortDropDownHolder>
      <StyledSortDropDown onChange={(e) => handleOnChange(e)} value={sortBy}>
        <option value="NO_SORT">Sort By</option>
        <option value="EXP_HIGH">Experience: High to Low</option>
        <option value="EXP_LOW">Experience: Low to High</option>
        <option value="PRICE_HIGH">Price: High to Low</option>
        <option value="PRICE_LOW">Price: Low to High</option>
        <option value="RATING_HIGH">Rating: High to Low</option>
      </StyledSortDropDown>
    </StyledSortDropDownHolder>
  );
};

export default SortDropDown;
