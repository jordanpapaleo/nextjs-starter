// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import ResponsiveWidth from 'components/ResponsiveWidth'

import type { ComponentPropsT } from 'common/types/general.types'

const Footer = (props: PropsT): React.Element<'footer'> => {
  const {
    className,
    style = {},
  } = props

  return (
    <footer className={classnames('Footer-component', className)} style={style}>
      <ResponsiveWidth className='footer-content' style={{ paddingTop: 0, paddingBottom: 0 }}>
        Footer Content
      </ResponsiveWidth>
      <style jsx>{styles}</style>
    </footer>
  )
}

const styles = css`
  footer {
    padding-top: var(--vertical-spacing);
    padding-bottom: var(--vertical-spacing);
  }
`

type PropsT = ComponentPropsT & {}

export default Footer
