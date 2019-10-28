import {
  largerSize,
  largerSizeMobile,
  largeSize,
  largestSize,
  largestSizeMobile,
  mediumSize,
  smallerSize,
  smallSize,
  tiniestSize,
  tinySize,
} from 'styles/spacing';

export const getSectionPaddingBySize = ({ layout, size }) => {
  return paddings[size][layout] ? paddings[size][layout] : paddings[size].default;
};

export const paddings = {
  tiniest: {
    default: tiniestSize,
  },
  tiny: {
    default: tinySize,
  },
  smaller: {
    default: smallerSize,
  },
  small: {
    default: smallSize,
  },
  medium: {
    default: mediumSize,
  },
  large: {
    default: largeSize,
  },
  larger: {
    mobile: largerSizeMobile,
    tablet: largerSize,
    desktop: largerSize,
  },
  largest: {
    mobile: largestSizeMobile,
    tablet: largestSize,
    desktop: largestSize,
  },
};
