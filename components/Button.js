// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

import type { ComponentPropsT } from 'common/types/general.types'

const Button = (props: PropsT): React.Element<'div'> => {
  const {
    className,
    style = {},
  } = props

  return (
    <div className={classnames('Button-component', className)} style={style}>
      Button
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css``

type PropsT = ComponentPropsT & {}

export default Button
