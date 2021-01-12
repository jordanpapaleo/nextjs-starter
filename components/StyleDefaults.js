
// @flow
import * as React from 'react'
import css from 'styled-jsx/css'

type PropsT = {}

const StyleDefaults = (props: PropsT): React.Element<'div'> => (
  <div className='StyleDefaults-component' style={{ height: 0, position: 'absolute' }}>
    <style jsx>{styles}</style>
  </div>
)

const styles = css.global`
  :root {
    --animDuration: 0.3s;
    --animEase: ease-out;

    /* COLORS */
    --white: #FFFFFF;
    --black: #000000 ;

    --backgroundColor: #FBFBFD;
    --borderColor: #D6D6D6;

    /* Text Colors */
    --brandColor: #157DFB;
    --copyColor: #333333;
    --copyLightColor: #888888;
    --copyDarkColor: #1d1d1f;
    --linkColor: var(--brandColor);

    --ff-text: BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;

    /* Other */
    --borderRadius: 4px;

    /* Spacing */
    --form-horizontal-spacing: 15px;
    --form-vertical-spacing: 18px;
    --content-horizontal-spacing: 20px;
    --content-vertical-spacing: 24px;
  }

  * {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    box-sizing: border-box;
  }

  body, html {
    color: var(--copyColor);
    font-family: var(--ff-text);
    font-size: 16px;
    letter-spacing: -0.015em;
    line-height: var(--lineHeight);
    text-rendering: auto;
  }

  h1 {
    color: red;
  }
`

export default StyleDefaults
