import classnames from 'classnames'
import css from 'styled-jsx/css'
import Link from 'next/link'

import Content from 'components/Content'
import PageLayout from 'components/PageLayout'

const FirstPost = (props) => {
  const {
    className,
    style = {},
  } = props

  return (
    <PageLayout title='First Post' className={classnames('FirstPost-component', className)} style={style}>
      <Content>
        <h1>First Post</h1>
        <img src='/assets/chair-lift.jpg' />
      </Content>
      <style jsx>{styles}</style>
    </PageLayout>
  )
}

const styles = css``

export default FirstPost
