// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import Head from 'next/head'

import Footer from 'components/Footer'
import MainNav from 'components/MainNav'
import type { ComponentPropsT } from 'common/types/general.types'

const PageLayout = (props: PropsT): React.Element<'div'> => {
  const {
    children,
    className,
    style = {},
    title,
  } = props

  return (
    <div className={classnames('PageLayout-component', className)} style={style}>
      <Head>
        {title && <title>{title}</title>}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainNav />

      <main>
        {children}
      </main>

      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .PageLayout-component {
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 100vh;
    position: relative;
  }

  main {
    flex-grow: 1;
  }
`

type PropsT = ComponentPropsT & {
  title?: string
}

export default PageLayout
