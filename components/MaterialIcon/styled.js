import styled from '@emotion/styled';

const sizes = {
  tiny: '16px',
  small: '20px',
  medium: '24px',
  large: '32px',
};

export const Icon = styled.i`
  color: ${props => props.color};
  text-align: ${props => props.align};
  width: ${props => sizes[props.size]};
  height: ${props => sizes[props.size]};
  font-size: ${props => sizes[props.size]};
`;
