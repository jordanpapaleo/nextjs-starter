
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
    --background-light: ${colors.ghostWhite};
    --border-light: ${colors.lightGrey};
    --background: var(--background-light);
    --border: var(--border-light);
    --error: ${colors.crimson};
    --success: ${colors.kellyGreen};
    --info: ${colors.persianBlue};
    --warn: ${colors.sunFlower};

    /* Text Colors */
    --brand: ${colors.dodgerBlue};
    --brandDark: ${darken(0.25, colors.dodgerBlue)};
    --copy: ${colors.matterhorn};
    --link: var(--brand);
    --linkHover: var(--brandDark);

    /* Fonts */
    --ff-text: "Roboto", "Helvetica", "Arial", sans-serif;

    /* Other */
    --borderRadius: 4px;

    /* Spacing */
    --form-horizontal-spacing: 15px;
    --form-vertical-spacing: 18px;
    --content-horizontal-spacing: 20px;
    --content-vertical-spacing: 24px;
  }

  ${typography.toString()}

  * {
    box-sizing: border-box;
  }

  body, html {
    color: var(--copy);
    background-color: var(--background);
    font-family: var(--ff-text);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.015em;
    line-height: var(--lineHeight);
    min-height: 100vh;
    text-rendering: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.45em 0;
  }

  a {
    background-image: none;
    color: var(--link);
    cursor: pointer;
    text-decoration: none;
    transition: color var(--animDuration) var(--animEase);
  }

  a:hover {
    color: var(--linkHover);
  }
`

export default StyleDefaults
