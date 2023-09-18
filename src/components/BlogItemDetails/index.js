import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  constructor(props) {
    super(props)
    this.match = props.match
    this.params = this.match.params
    this.id = this.params.id
  }

  state = {isLoading: false}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs/${this.id}`)
    const blog = await response.json()
    this.setState({
      title: blog.title,
      author: blog.author,
      content: blog.content,
      imageUrl: blog.image_url,
      avatarUrl: blog.avatar_url,
      isLoading: true,
    })
  }

  render() {
    const {title, imageUrl, avatarUrl, author, content, isLoading} = this.state

    console.log(this.state)
    return !isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-details">
        <h1 className="heading">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt={author} className="avatar" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="topic-image" />
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
