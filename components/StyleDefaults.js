
// @flow
import * as React from 'react'
import css from 'styled-jsx/css'
import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'
import { darken, lighten } from 'polished'

type PropsT = {}

const StyleDefaults = (props: PropsT): React.Element<'div'> => (
  <div className='StyleDefaults-component' style={{ height: 0, position: 'absolute' }}>
    <style jsx>{styles}</style>
  </div>
)

const typography = new Typography(lincolnTheme)

// https://www.htmlcsscolor.com
export const colors = {
  black: '#000000',
  blackRussian: '#1d1d1f',
  crimson: '#DC143C',
  dodgerBlue: '#157DFB',
  dodgerBlueDark: (darken(0.20, '#157DFB'): string),
  dodgerBlueLight: (lighten(0.20, '#157DFB'): string),
  ghostWhite: '#FBFBFD',
  kellyGreen: '#3CDC14',
  lavender: '#e8e8ed',
  paynesGrey: '#424245',
  persianBlue: '#143CDC',
  quartz: '#d2d2d7',
  revolver: '#353538',
  sunFlower: '#DCB414',
  white: '#FFFFFF',
}

export const breakpoints = {
  small: '480px', // uses carot menu
  medium: '768px',
  large: '1024px',
  xlarge: '1600px',
}

const styles = css.global`
  :root {
    --animDuration: 0.3s;
    --animEase: ease;

    --primary: ${colors.dodgerBlue};
    --primary-dark: ${colors.dodgerBlueDark};
    --primary-light: ${colors.dodgerBlueLight};
    --primary-neutral: ${colors.blackRussian};
    --secondary: ${colors.lavender};
    --secondary-alpha: rgba(0, 0, 0, 0.08);

    /* Color Uses */
    --background-dark: ${colors.black};
    --background-light: ${colors.ghostWhite};
    --background: var(--background-light);
    --border-dark: ${colors.paynesGrey};
    --border-light: ${colors.quartz};
    --border-radius: 8px;
    --border-color: var(--border-light);
    --border: 1px solid var(--border-color);
    --copy-dark: ${colors.blackRussian};
    --copy-light: ${colors.ghostWhite};
    --copy: var(--copy-dark);
    --link: var(--primary);
    --link-hover: var(--primary-dark);

    /* Status Colors */
    --error: ${colors.crimson};
    --info: ${colors.persianBlue};
    --success: ${colors.kellyGreen};
    --warn: ${colors.sunFlower};

    /* Fonts */
    --font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    --line-height: 1.3;

    /* Spacing */
    --form-horizontal-spacing: 15px;
    --form-vertical-spacing: 18px;
    --horizontal-spacing: 20px;
    --vertical-spacing: 24px;

    /* Responsive */
    --screen-small-min-width: ${breakpoints.small};
    --screen-medium-min-width: ${breakpoints.medium};
    --screen-large-min-width: ${breakpoints.large};
    --screen-xlarge-min-width: ${breakpoints.xlarge};
  }

  @media screen and (min-width: ${breakpoints.small}) {
    :root {
      --max-width: var(--screen-small-min-width);
      --test-color: var(--error);
    }
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    :root {
      --max-width: var(--screen-medium-min-width);
      --test-color: var(--info);
    }
  }

  @media screen and (min-width: ${breakpoints.large}) {
    :root {
      --max-width: var(--screen-large-min-width);
      --test-color: var(--success);
    }
  }

  @media screen and (min-width: ${breakpoints.xlarge}) {
    :root {
      --max-width: var(--screen-xlarge-min-width);
      --test-color: var(--warn);
    }
  }

  ${typography.toString()}

  .light-mode {
    --background: var(--background-light);
    --border-color: var(--border-light);
    --border: 1px solid var(--border-color);
    --copy: var(--copy-dark);
    --link-hover: var(--primary-dark);
    --primary-neutral: ${colors.blackRussian};
    --secondary: ${colors.lavender};
  }

  .dark-mode {
    --background: var(--background-dark);
    --border-color: var(--border-dark);
    --border: 1px solid var(--border-color);
    --copy: var(--copy-light);
    --link-hover: var(--primary-light);
    --primary-neutral: ${colors.white};
    --secondary: ${colors.revolver};
  }

  * {
    box-sizing: border-box;
  }

  body, html {
    background-color: var(--background);
    border: var(--border);
    color: var(--copy);
    font-family: var(--font-family);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.015em;
    line-height: var(--line-height);
    min-height: 100vh;
    text-rendering: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--copy);
    margin: 0 0 0.45em 0;
  }

  a {
    background-image: none;
    color: var(--link);
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    text-shadow: none;
    transition: color var(--animDuration) var(--animEase);
  }

  a:visited {
    color: var(--link);
  }

  a:hover {
    color: var(--link-hover);
  }
`

export default StyleDefaults
