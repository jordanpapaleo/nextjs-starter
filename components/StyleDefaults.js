
// @flow
import * as React from 'react'
import css from 'styled-jsx/css'
import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'
import { darken } from 'polished'

type PropsT = {}

const StyleDefaults = (props: PropsT): React.Element<'div'> => (
  <div className='StyleDefaults-component' style={{ height: 0, position: 'absolute' }}>
    <style jsx>{styles}</style>
  </div>
)

const typography = new Typography(lincolnTheme)

// https://www.htmlcsscolor.com
const colors = {
  black: '#000000',
  nightRider: '#333333',
  matterhorn: '#575757',
  persianBlue: '#143CDC',
  dodgerBlue: '#157DFB',
  kellyGreen: '#3CDC14',
  crimson: '#DC143C',
  sunFlower: '#DCB414',
  ghostWhite: '#FBFBFD',
  lightGrey: '#D6D6D6',
  white: '#FFFFFF',
}

const styles = css.global`
  :root {
    --animDuration: 0.3s;
    --animEase: ease;

    /* Color Uses */
    --background-dark: ${colors.black};
    --background-light: ${colors.ghostWhite};
    --background: var(--background-light);
    --border-dark: #424245;
    --border-light: #d2d2d7;
    --border-radius: 8px;
    --border-color: var(--border-light);
    --border: 1px solid var(--border-color);
    --copy-dark: #1d1d1f;
    --copy-light: #f5f5f7;
    --copy: var(--copy-dark);

    --primary: ${colors.dodgerBlue};
    --primary-neutral: #18181A;
    --secondary: #e8e8ed;
    --secondary-alpha: rgba(0, 0, 0, 0.08);

    /* Status Colors */
    --error: ${colors.crimson};
    --info: ${colors.persianBlue};
    --success: ${colors.kellyGreen};
    --warn: ${colors.sunFlower};

    --brandDark: ${darken(0.25, colors.dodgerBlue)};

    /* Fonts */
    --font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --line-height: 1.3;

    /* Spacing */
    --form-horizontal-spacing: 15px;
    --form-vertical-spacing: 18px;
    --content-horizontal-spacing: 20px;
    --content-vertical-spacing: 24px;

    --test-color: hotpink;
  }

    /* mobile */
  @media (max-width: 480px) {
    :root {
      --max-width: 480px;
      --test-color: red;
    }
  }

  /* tablets */
  @media (min-width: 481px, max-width: 768px) {
    :root {
      --max-width: 480px;
      --test-color: orange;
    }
  }

  /* laptops */
  @media (min-width: 769px, max-width: 1024px) {
    :root {
      --max-width: 768px;
      --test-color: yellow;
    }
  }

  /* desktops */
  @media (min-width: 1025px, max-width: 1200px) {
    :root {
      --max-width: 1024px;
      --test-color: green;
    }
  }

  /* large screens */
  @media (min-width: 1201px) {
    :root {
      --max-width: 1200px;
      --test-color: blue;
    }
  }

  ${typography.toString()}

  .light-mode {
    --background: var(--background-light);
    --border-color: var(--border-light);
    --border: 1px solid var(--border-color);
    --copy: var(--copy-dark);
    --primary-neutral: #18181A;
    --secondary: #e8e8ed;
  }

  .dark-mode {
    --background: var(--background-dark);
    --border-color: var(--border-dark);
    --border: 1px solid var(--border-color);
    --copy: var(--copy-light);
    --primary-neutral: white;
    --secondary: #353538;
  }

  * {
    box-sizing: border-box;
  }

  body, html {
    color: var(--copy);
    background-color: var(--background);
    font-family: var(--font-family);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.015em;
    line-height: var(--line-height);
    min-height: 100vh;
    text-rendering: auto;
    border: var(--border);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--copy);
    margin: 0 0 0.45em 0;
  }

  a {
    background-image: none;
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
    transition: color var(--animDuration) var(--animEase);
    text-shadow: none;
    font-weight: bold;
  }

  a:hover {
    color: var(--linkHover);
  }
`

export default StyleDefaults
