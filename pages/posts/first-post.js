import classnames from 'classnames'
import css from 'styled-jsx/css'
import Link from 'next/link'

const FirstPost = (props) => {
  const {
    className,
    style = {},
  } = props

  return (
    <div className={classnames('FirstPost-component', className)} style={style}>
      <h1>First Post</h1>
      <Link href='/'>Home</Link>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css``

export default FirstPost
