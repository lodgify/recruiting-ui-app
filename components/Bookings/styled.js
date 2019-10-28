import styled from '@emotion/styled';
import { darkerGrey, green } from 'styles/colors';

export const BookingImage = styled.img``;

export const Title = styled.h1`
  margin: 16px 0;
  color: ${darkerGrey};
`;

export const Subtitle = styled.p`
  color: ${darkerGrey};
  font-size: 16px;
`;

export const Button = styled.button`
  height: 40px;
  width: 320px;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
  transition: all 0.3s ease 0s;
  background-color: transparent;

  &:hover {
    background-color: ${green};
    transform: translateY(-4px);
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
  }
`;
