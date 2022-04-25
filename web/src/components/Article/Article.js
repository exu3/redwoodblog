import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <div>
      <article>
        <header>
          <Link to={routes.article({ id: article.id })}>
            <h2>{article.title}</h2>
          </Link>
        </header>
        <p>{article.body}</p>
        <div>Posted at: {article.createdAt}</div>
      </article>
    </div>
  )
}

export default Article
