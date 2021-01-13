---
to: <%= path || actionfolder %>/<%= name %>.js
---
// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import type { ComponentPropsT } from 'common/types/general.types'

const <%= name %> = (props: PropsT): React.Element<'div'> => {
  const {
    className,
    style = {},
  } = props

  return (
    <div className={classnames('<%= name %>-component', className)} style={style}>
      <%= name %>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css``

type PropsT = ComponentPropsT & {}

export default <%= name %>
