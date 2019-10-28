import { Global, css } from '@emotion/core';

import { lightGrey } from '../../styles/colors';
import oxygenRegular from 'public/fonts/oxygen/Oxygen.otf';
import oxygenItalic from 'public/fonts/oxygen/Oxygen-Italic.otf';
import sourceSansProBold from 'public/fonts/source-sans-pro/SourceSansPro-Bold.otf';
import sourceSansProLight from 'public/fonts/source-sans-pro/SourceSansPro-Light.otf';
import sourceSansProRegular from 'public/fonts/source-sans-pro/SourceSansPro-Regular.otf';

export const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Oxygen';
        src: local('Oxygen'), url(${oxygenRegular}) format('opentype');
      }

      @font-face {
        font-family: 'Oxygen Italic';
        src: local('Oxygen Italic'), url(${oxygenItalic}) format('opentype');
      }

      @font-face {
        font-family: 'Source Sans Pro';
        src: local('Source Sans Pro'), url(${sourceSansProRegular}) format('opentype');
      }

      @font-face {
        font-family: 'Source Sans Pro Light';
        src: local('Source Sans Pro Light'), url(${sourceSansProLight}) format('opentype');
      }

      @font-face {
        font-family: 'Source Sans Pro Bold';
        src: local('Source Sans Pro Bold'), url(${sourceSansProBold}) format('opentype');
      }

      html {
        font-size: 17px;
        line-height: 1.56;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      ol,
      li,
      p,
      pre,
      blockquote,
      figure,
      hr {
        margin: 0;
        padding: 0;
      }

      body {
        background-color: ${lightGrey};
      }
      // Type scale: Minor third
      h1 {
        margin: 50px 0 25px;
        font-size: 2.488235294117647rem;
        font-family: 'Oxygen', sans-serif;
      }

      h2 {
        margin: 50px 0 25px;
        font-size: 2.073529411764706rem;
        font-family: 'Oxygen', sans-serif;
      }

      h3 {
        margin: 50px 0 25px;
        font-size: 1.728235294117647rem;
        font-family: 'Oxygen', sans-serif;
      }

      h4 {
        margin: 50px 0 25px;
        font-size: 1.44rem;
        font-family: 'Oxygen', sans-serif;
      }

      h5 {
        margin: 50px 0 25px;
        font-size: 1.2rem;
        font-family: 'Oxygen', sans-serif;
      }

      h6 {
        margin: 50px 0 25px;
        font-size: 1.1rem;
        font-family: 'Oxygen', sans-serif;
      }

      p {
        hyphens: auto;
        max-width: 38em;
        font-weight: 400;
        margin-bottom: 25px;
        color: hsla(0, 0%, 0%, 0.8);
        font-feature-settings: 'liga' 1, 'kern' 1;
      }

      ul,
      ol {
        list-style: none;
      }

      a {
        text-decoration: none;
        font-family: 'Source Sans Pro Light', sans-serif;
      }

      button,
      a,
      select {
        cursor: pointer;
      }

      input,
      textarea,
      select,
      button {
        color: inherit;
        font: inherit;
        letter-spacing: inherit;
      }

      embed,
      iframe,
      img,
      object,
      video {
        display: block;
        max-width: 100%;
      }
    `}
  />
);
