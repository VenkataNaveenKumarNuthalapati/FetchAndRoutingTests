import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogLists: [],
    isLoading: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogList = await response.json()
    this.setState({blogLists: blogList, isLoading: true})
  }

  render() {
    const {blogLists, isLoading} = this.state
    console.log(blogLists)
    return (
      <>
        {!isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blog-list">
            {blogLists.map(eachBlog => (
              <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogList
