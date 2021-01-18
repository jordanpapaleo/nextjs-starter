
// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import Link from 'next/link'
import PageLayout from 'components/PageLayout'
import Content from 'components/Content'

import type { ComponentPropsT } from 'common/types/general.types'

const Home = (props: PropsT): React.Element<any> => {
  const {
    className,
    style = {},
  } = props

  return (
    <PageLayout
      className={classnames('Home-component', className)}
      style={style}
      title='Home'
    >
      <Content variant='dark'>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sunt vel in quaerat modi nisi inventore earum suscipit nulla qui ratione quam molestiae harum quisquam. Unde perferendis repudiandae magnam id.
          <br />
          <Link href='/posts/first-post'>
            First Post
          </Link>
        </p>
      </Content>

      <Content variant='light'>
        <div className='grid'>
          <a href='https://nextjs.org/docs'>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn'>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </Content>

      <Content variant='dark'>
        <div className='grid'>
          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </Content>

      <style jsx>{styles}</style>
    </PageLayout>
  )
}

const styles = css`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--vertical-spacing) var(--horizontal-spacing);
  }
  .grid a {
    padding: 3vh;
    border: var(--border);
    border-radius: var(--border-radius);
  }
`

type PropsT = ComponentPropsT & {}

export default Home
