// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import ResponsiveWidth from 'components/ResponsiveWidth'

import type { ComponentPropsT } from 'common/types/general.types'

const Content = (props: PropsT): React.Element<any> => {
  const {
    className,
    style = {},
    variant = 'light',
    children,
  } = props

  return (
    <ResponsiveWidth className={classnames('Content-component', className, `${variant}-mode`)} style={style}>
      {children}
      <style jsx>{styles}</style>
    </ResponsiveWidth>
  )
}

const styles = css`
  :global(.Content-component) {
    background-color: var(--background);
    color: var(--copy);
  }
`

type PropsT = ComponentPropsT & {
  variant?: 'dark' | 'light'
}

export default Content
