import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import BlogItem from "../blog/blog-item"

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: []
    }

    this.getBlogItems = this.getBlogItems.bind(this)
  }

  getBlogItems() {
    Axios.get("https://danielbrown.devcamp.space/portfolio/portfolio_blogs", {withCredentials: true 
  }).then(Response => {
    this.setstate({
      blogItems: Response.data.portfolio_blogs
    })
  }).catch(error => {
    console.log("blog", error)
  })
  }

  componentWillMount() {
    this.getBlogItems();
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blofItem.id} blogItem={blogItem} />;
    })
    return 
       <div>{blogRecords}</div>;
  }
}
export default Blog