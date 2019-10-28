import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { string, oneOf, bool } from 'prop-types';

import { breakpoints } from 'styles/media';
import { smallerSize, smallSize } from 'styles/spacing';
import { getSectionPaddingBySize } from 'styles/paddings';

export const Section = styled.section`
  width: 100%;
  display: flex;
  max-width: 1366px;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  align-items: ${props => (props.align ? props.align : 'center')};

  ${props =>
    props.full
      ? 0
      : css`
          padding-top: ${props.paddingTop &&
            getSectionPaddingBySize({
              layout: 'mobile',
              size: props.paddingTop,
            })};
          padding-bottom: ${props.paddingBottom &&
            getSectionPaddingBySize({
              layout: 'mobile',
              size: props.paddingBottom,
            })};
          padding-left: ${smallerSize};
          padding-right: ${smallerSize};
          padding: ${!props.paddingTop &&
            !props.paddingBottom &&
            props.paddingVertical &&
            `${getSectionPaddingBySize({
              layout: 'mobile',
              size: props.paddingVertical,
            })} ${smallerSize}`};
        `};

  @media screen and (min-width: ${breakpoints.small}px) {
    ${props =>
      props.full
        ? 0
        : css`
            padding-top: ${props.paddingTop &&
              getSectionPaddingBySize({
                layout: 'tablet',
                size: props.paddingTop,
              })};
            padding-bottom: ${props.paddingBottom &&
              getSectionPaddingBySize({
                layout: 'tablet',
                size: props.paddingBottom,
              })};
            padding-left: ${smallSize};
            padding-right: ${smallSize};
            padding: ${!props.paddingTop &&
              !props.paddingBottom &&
              props.paddingVertical &&
              `${getSectionPaddingBySize({
                layout: 'tablet',
                size: props.paddingVertical,
              })} ${smallSize}`};
          `};
  }

  @media screen and (min-width: ${breakpoints.large}px) {
  ${props =>
    props.full
      ? 0
      : css`
          padding-top: ${props.paddingTop &&
            getSectionPaddingBySize({
              layout: 'desktop',
              size: props.paddingTop,
            })};
          padding-bottom: ${props.paddingBottom &&
            getSectionPaddingBySize({
              layout: 'desktop',
              size: props.paddingBottom,
            })};
          padding: ${!props.paddingTop &&
            !props.paddingBottom &&
            props.paddingVertical &&
            `${getSectionPaddingBySize({
              layout: 'desktop',
              size: props.paddingVertical,
            })} 0`};
        `};
`;

Section.defaultProps = {
  backgroundColor: 'inherit',
  full: false,
  align: 'center',
  paddingTop: null,
  paddingBottom: null,
  paddingVertical: 'large',
};

Section.propTypes = {
  full: bool,
  backgroundColor: string,
  align: oneOf(['flex-start', 'flex-end', 'center']),
  paddingVertical: oneOf(['tiniest', 'tiny', 'smaller', 'small', 'medium', 'large', 'larger', 'largest']),
  paddingTop: oneOf(['tiniest', 'tiny', 'smaller', 'small', 'medium', 'large', 'larger', 'largest']),
  paddingBottom: oneOf(['tiniest', 'tiny', 'smaller', 'small', 'medium', 'large', 'larger', 'largest']),
};
