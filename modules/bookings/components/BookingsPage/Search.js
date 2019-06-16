import React from 'react';
import { func } from 'prop-types';

import styled from 'styled-components';
import { FiSearch, FiFilter } from 'react-icons/fi';

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebe4;
  height: 80px;
  input {
    width: 300px;
    border: none;
    height: 30px;
    padding: 10px;
    font-weight: 200;
  }
`;

const SearchComponent = ({ onChange }) => {
  return (
    <SearchWrapper>
      <input onChange={onChange} placeholder={'Search'} />
      <FiSearch style={{ position: 'absolute', left: '310px' }} />
      <FiFilter style={{ marginLeft: '5px' }} />
    </SearchWrapper>
  );
};

SearchComponent.propTypes = {
  onChange: func,
};

export default SearchComponent;
