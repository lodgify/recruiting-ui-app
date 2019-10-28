import styled from '@emotion/styled';
import { number, oneOf } from 'prop-types';

import { tiny } from 'styles/spacing';
import { breakpoints } from 'styles/media';

export const Column = styled.div`
  display: flex;
  //padding: 0 ${tiny};
  align-items: ${props => props.align};
  margin-top: ${props => props.marginTop}px;
  justify-content: ${props => props.justify};
  width: calc(${props => props.size / 12} * 100%);
  flex-direction: ${props => (props.direction ? props.direction : 'column')};

/*  @media screen and (min-width: ${breakpoints.large}px) {
    width: ${props => (props.size / 12) * `${breakpoints.large}`}px;
    max-width: ${props => (props.size / 12) * `${breakpoints.large}`}px;
  }*/
`;

Column.defaultProps = {
  size: 12,
  marginTop: 0,
  align: 'flex-start',
  direction: 'column',
  justify: 'flex-start',
};

Column.propTypes = {
  size: number,
  marginTop: number,
  direction: oneOf(['row', 'column', 'row-reverse']),
  align: oneOf(['flex-start', 'center', 'flex-end']),
  justify: oneOf(['flex-start', 'center', 'flex-end', 'space-around', 'space-between']),
};
