// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import type { ComponentPropsT } from 'common/types/general.types'

const ResponsiveWidth = (props: PropsT): React.Element<'div'> => {
  const {
    children,
    className,
    style = {},
  } = props

  return (
    <div className={classnames('ResponsiveWidth-component', className)} style={style}>
      <div className='ResponsiveWidth-component-inner'>
        {children}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .ResponsiveWidth-component {
    display: flex;
    justify-content: center;
    padding: calc(2 * var(--content-vertical-spacing)) var(--content-horizontal-spacing);
  }

  .ResponsiveWidth-component-inner {
    max-width: var(--max-width);
    width: 100%;
  }
`

type PropsT = ComponentPropsT & {}

export default ResponsiveWidth
