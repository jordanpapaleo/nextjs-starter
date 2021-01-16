import classnames from 'classnames'
import css from 'styled-jsx/css'
import Link from 'next/link'

import PageLayout from 'components/PageLayout'

const FirstPost = (props) => {
  const {
    className,
    style = {},
  } = props

  return (
    <PageLayout title='First Post' className={classnames('FirstPost-component', className)} style={style}>
      <h1>First Post</h1>
      <Link href='/'>Home</Link>
      <img src='/assets/chair-lift.jpg' />
      <style jsx>{styles}</style>
    </PageLayout>
  )
}

const styles = css``

export default FirstPost
