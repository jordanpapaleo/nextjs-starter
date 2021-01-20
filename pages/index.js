// @flow
import * as React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import Link from 'next/link'

import { getSortedPostsData } from 'lib/posts'
import Content from 'components/Content'
import PageLayout from 'components/PageLayout'

import type { StaticPropsContextT, StaticPropsReturnT, ComponentPropsT } from 'common/types/general.types'

const Home = (props: PropsT): React.Element<any> => {
  const {
    allPostsData,
    className,
    style = {},
  } = props

  return (
    <PageLayout
      className={classnames('Home-component', className)}
      style={style}
      title='Home'
    >
      <Content>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>{date}</small>
            </li>
          ))}
        </ul>

      </Content>

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

type PropsT = ComponentPropsT & {
  allPostsData: any[]
}

export default Home

/*
Next.js will pre-render this page at build time using the props returned by getStaticProps.

You should use getStaticProps if:
- The data required to render the page is available at build time ahead of a user’s request.
- The data comes from a headless CMS.
- The data can be publicly cached (not user-specific).
- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
*/

type StaticPropsT = StaticPropsReturnT & {
  props: {
    allPostsData: any[]
  }
}

export async function getStaticProps(context: StaticPropsContextT): Promise<StaticPropsT> {
  console.log(context)

  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

/*
  If you need to fetch data at request time instead of at build time, you can try Server-side Rendering:
  You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time.
*/

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   }
// }
