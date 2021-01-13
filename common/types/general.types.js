// @flow
import * as React from 'react'
export type StyleT = {
  [selector: string]: string | number,
}

export type ComponentPropsT = {
  children?: React.Node,
  className?: string,
  style?: StyleT,
}
