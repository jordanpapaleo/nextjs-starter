
// @flow
import * as React from 'react'
import { darken, lighten } from 'polished'
import css from 'styled-jsx/css'
import lincolnTheme from 'typography-theme-lincoln'
import Typography from 'typography'

import UIProvider, { DispatchUIContext, UIContext } from 'common/context/UIProvider'
import type { ComponentPropsT } from 'common/types/general.types'
import useWindowWidth from 'common/hooks/useWindowWidth'

type PropsT = ComponentPropsT

function getResolution(windowWidth): ?string {
  if (windowWidth) {
    if (windowWidth > breakpoints.xlarge) {
      return 'xlarge'
    } else if (windowWidth < breakpoints.large) {
      return 'large'
    } else if (windowWidth < breakpoints.medium) {
      return 'medium'
    } else {
      return 'small'
    }
  } else {
    return null
  }
}

const UiWrapper = (props: PropsT): React.Element<'div'> => {
  const { children } = props
  const uiState = React.useContext(UIContext)
  const dispatchUiState = React.useContext(DispatchUIContext)
  const windowWidth = useWindowWidth()
  const screen = getResolution(windowWidth)

  console.log('windowWidth', windowWidth)
  console.log('screen', screen)

  React.useEffect(() => {
    if (windowWidth !== uiState.windowWidth) {
      dispatchUiState({ windowWidth })
    }
  }, [windowWidth])

  return (
    <div className='UiWrapper-component'>
      {children}
      <style jsx>{globalStyles}</style>
      <style jsx>{styles}</style>
    </div>
  )
}

const UiWrapperContainer = ({ children }):any => (
  <UIProvider>
    <UiWrapper>
      {children}
    </UiWrapper>
  </UIProvider>
)

export default UiWrapperContainer

const styles = css``

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
  manatee: '#86868b',
  paynesGrey: '#424245',
  persianBlue: '#143CDC',
  quartz: '#d2d2d7',
  revolver: '#353538',
  sunFlower: '#DCB414',
  white: '#FFFFFF',
  comet: '#6e6e73',
}

export const breakpoints = {
  small: 480, // uses carot menu
  medium: 768,
  large: 1024,
  xlarge: 1600,
}

const globalStyles = css.global`
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
    --border-color: var(--border-light);
    --border-dark: ${colors.paynesGrey};
    --border-light: ${colors.quartz};
    --border-radius: 8px;
    --border: 1px solid var(--border-color);
    --copy-alternate: ${colors.manatee};
    --copy-dark: ${colors.blackRussian};
    --copy-light: ${colors.ghostWhite};
    --copy: var(--copy-dark);
    --link-hover: var(--primary-dark);
    --link: var(--primary);

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
    --screen-small-min-width: ${breakpoints.small}px;
    --screen-medium-min-width: ${breakpoints.medium}px;
    --screen-large-min-width: ${breakpoints.large}px;
    --screen-xlarge-min-width: ${breakpoints.xlarge}px;
  }

  @media screen and (min-width: ${breakpoints.small}px) {
    :root {
      --max-width: var(--screen-small-min-width);
      --test-color: var(--error);
    }
  }

  @media screen and (min-width: ${breakpoints.medium}px) {
    :root {
      --max-width: var(--screen-medium-min-width);
      --test-color: var(--info);
    }
  }

  @media screen and (min-width: ${breakpoints.large}px) {
    :root {
      --max-width: var(--screen-large-min-width);
      --test-color: var(--success);
    }
  }

  @media screen and (min-width: ${breakpoints.xlarge}px) {
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
    --copy-alternate: ${colors.manatee};
    --copy: var(--copy-dark);
    --link-hover: var(--primary-dark);
    --primary-neutral: ${colors.blackRussian};
    --secondary: ${colors.lavender};
  }

  .dark-mode {
    --background: var(--background-dark);
    --border-color: var(--border-dark);
    --border: 1px solid var(--border-color);
    --copy-alternate: ${colors.comet};
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
