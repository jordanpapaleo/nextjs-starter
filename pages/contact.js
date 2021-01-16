// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import PageLayout from 'components/PageLayout'

import type { ComponentPropsT } from 'common/types/general.types'

const Contact = (props: PropsT): React.Element<any> => {
  const {
    className,
    style = {},
  } = props

  return (
    <PageLayout className={classnames('Contact-component', className)} style={style}>
      Contact
      <style jsx>{styles}</style>
    </PageLayout>
  )
}

const styles = css``

type PropsT = ComponentPropsT & {}

export default Contact
