import styled from '@emotion/styled';
import { oneOf, number } from 'prop-types';

import { breakpoints } from 'styles/media';

export const Row = styled.div`
  display: flex;
  width: inherit;
  flex-wrap: nowrap;
  align-items: ${props => props.align};
  margin-top: ${props => props.marginTop}px;
  justify-content: ${props => props.justify};
  flex-direction: ${props => props.direction};

/*  @media screen and (min-width: ${breakpoints.large}px) {
    width: ${breakpoints.large}px;
    min-width: ${breakpoints.large}px;
    max-width: ${breakpoints.large}px;
  }*/
`;

Row.defaultProps = {
  marginTop: 0,
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
};

Row.propTypes = {
  marginTop: number,
  align: oneOf(['flex-start', 'center', 'flex-end']),
  direction: oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justify: oneOf(['flex-start', 'center', 'flex-end', 'space-between']),
};
