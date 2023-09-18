import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  return (
    <Link to={`/blogs/${eachBlog.id}`} className="link">
      <li className="blog-item">
        <img
          className="blog-image"
          src={eachBlog.image_url}
          alt={eachBlog.title}
        />

        <div>
          <p className="title">{eachBlog.topic}</p>
          <h1 className="title2">{eachBlog.title}</h1>
          <div className="avatar-container">
            <img
              className="avatar"
              src={eachBlog.avatar_url}
              alt={eachBlog.topic}
            />
            <p className="title">{eachBlog.author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
