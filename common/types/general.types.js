// @flow
// import { GetStaticProps } from 'next'

import * as React from 'react'
export type StyleT = {
  [selector: string]: string | number,
}

export type ComponentPropsT = {
  children?: React.Node,
  className?: string,
  style?: StyleT,
}

export type StaticPropsContextT = {
  params: any, // contains the route parameters for pages using dynamic routes.
  preview: any, // is true if the page is in the preview mode and undefined otherwise
  prefiewData: any, // contains the preview data set by setPreviewData
  locale: any, // contains the active locale (if enabled).
  locales: any, // contains all supported locales (if enabled)
  defaultLocale: any, // contains the configured default locale (if enabled).
}

export type StaticPropsReturnT = {
  props: {
    [key: string]: any
  }, // A required object with the props that will be received by the page component.
  revalidate?: number, // An optional amount in seconds after which a page re-generation can occur
  notFound?: boolean, // An optional boolean value to allow the page to return a 404 status and page.
  redirect?: {
    destination: string,
    permanent: boolean,
  }
}
