import { css } from 'styled-components';

export const sizes = {
  desktop: 1040,
  tablet: 800,
  phone: 640,
};

export const shades = {
  lighter: 0.1,
  light: 0.2,
  dark: 0.3,
  darker: 0.4,
  darkest: 0.6,
};

export const colors = {
  primary: '#f6f6f6',
  secondary: '#dfdfdf',
  dark: '#181818',
  light: '#ffffff',
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
