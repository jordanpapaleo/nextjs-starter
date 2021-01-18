// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import Link from 'next/link'
import ResponsiveWidth from 'components/ResponsiveWidth'

import type { ComponentPropsT } from 'common/types/general.types'

const links = {
  main: {
    label: 'My App',
    href: '/',
  },
  routes: [
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
}

const MainNav = (props: PropsT): React.Element<'header'> => {
  const {
    className,
    style = {},
  } = props

  return (
    <header className={classnames('MainNav-component', className)} style={style}>
      <ResponsiveWidth style={{ paddingTop: 0, paddingBottom: 0 }}>
        <nav className='nav-content'>
          <Link href={links.main.href}>{links.main.label}</Link>

          <span className='spacer' />

          {links.routes.map((route) => (
            <Link href={route.href} key={route.href}>{route.label}</Link>
          ))}
        </nav>
      </ResponsiveWidth>
      <style jsx>{styles}</style>
    </header>
  )
}

const styles = css`
  :global(.MainNav-component nav a) {
    margin-left: 10px;
  }
  :global(.MainNav-component nav a:first-child) {
    margin-left: 0px;
  }
  header {
    position: sticky;
    padding-top: var(--vertical-spacing);
    padding-bottom: var(--vertical-spacing);
    background: var(--test-color);
  }
  nav {
    display: flex;
    max-width: var(--max-width);
    justify-content: space-between;
    width: 100%;
  }
  .spacer {
    flex-grow: 1;
  }
`

type PropsT = ComponentPropsT & {}

export default MainNav
