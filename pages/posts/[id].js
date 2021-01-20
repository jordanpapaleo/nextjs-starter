import classnames from 'classnames'
import css from 'styled-jsx/css'
import { parseISO, format } from 'date-fns'

import { getAllPostIds, getPostData } from 'lib/posts'
import Content from 'components/Content'
import PageLayout from 'components/PageLayout'

const Post = (props) => {
  const {
    className,
    postData,
    style = {},
  } = props

  const date = parseISO(postData.date)

  return (
    <PageLayout title={postData.title} className={classnames('Post-component', className)} style={style}>
      <Content>
        <h1>{postData.title}</h1>
        <h2>
          <time dateTime={postData.date}>{format(date, 'LLLL d, yyyy')}</time>
          <span>{postData.id}</span>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Content>
      <style jsx>{styles}</style>
    </PageLayout>
  )
}

const styles = css`
  h2 span {
    font-weight: 400;
    color: var(--copy-alternate);
    margin-right: 13px;
  }

  h2 span:before {
    color: var(--border-light);
    content: "|";
    padding-left: 9px;
    padding-right: 9px;
  }
`

export default Post

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
