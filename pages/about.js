// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import PageLayout from 'components/PageLayout'

import type { ComponentPropsT } from 'common/types/general.types'

const About = (props: PropsT): React.Element<any> => {
  const {
    className,
    style = {},
  } = props

  return (
    <PageLayout className={classnames('About-component', className)} style={style}>
      About
      <style jsx>{styles}</style>
    </PageLayout>
  )
}

const styles = css``

type PropsT = ComponentPropsT & {}

export default About
