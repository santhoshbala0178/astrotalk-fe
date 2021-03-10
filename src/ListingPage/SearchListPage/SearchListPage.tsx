import { useReactiveVar } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { searchNameVar } from '../../cache';

const StyledSearchHolder = styled.div`
  width: 40%;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 7px;
  border-radius: 5px;
  border: 1px solid #dedede;
  background: transparent;
  height: 25px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;

  &: focus {
    border-color: rgb(135, 206, 250);
    box-shadow: inset 0 1px 1px rgba(135, 206, 250, 0.075),
      0 0 8px rgba(135, 206, 250, 0.6);
  }
`;
const SearchListPage: React.FC = () => {
  const [curVal, setCurVal] = useState('');

  const setDebounced = _.debounce((val) => searchNameVar(val), 1000);

  function handleOnChange(e) {
    setCurVal(e.target.value);
  }

  useEffect(() => {
    setDebounced(curVal);
  }, [setDebounced, curVal]);

  return (
    <StyledSearchHolder>
      <StyledSearchInput
        data-testid="search-input"
        placeholder="Search name...."
        value={curVal}
        onChange={(e) => handleOnChange(e)}
      />
    </StyledSearchHolder>
  );
};

export default SearchListPage;
