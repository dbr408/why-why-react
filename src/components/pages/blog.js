import React from 'react';
import { Link } from 'react-router-dom';
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import BlogItem from "../blog/blog-item";
import BlogModal from '../modals/blog-modal'

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalIsOpen: false,
    };

    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
    this.handleNewBLogClick = this.handleNewBLogClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSeccessfulNewBlogsubmition = this.handleSeccessfulNewBlogsubmition.bind(this);
  }

  handleSeccessfulNewBlogsubmition(blog) {
    this.setState ({
      blogMadalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems)
    })
  }

  handleModalClose() {
    this.setState({
      blogModalIsOpen: false,
    })
  }

  handleNewBLogClick() {
    this.setState({
      blogModalIsOpen: true,
    })
  }

  onScroll() {
      if (this.state.isLoading || this.state.blogItems.leagth === this.state.totalCount) {
        return;
      }
   if (window.innerHeight + document.documentElement.scrollTop === 
    document.documentElement.offsetHeight
   ) {
     this.getBlogItems
   }
  }

  getBlogItems() {
    this.setState ({
      currentPage: this.state.currentPage + 1
    });
    axios.get(`https://danielbrown.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, {withCredentials: true 
  }).then(Response => {
    console.log("getting", response.data);
    this.setstate({
      blogItems:  this.state.blogItems.concat(response.data.portfolio_blogs),
      totalCount: Response.data.meta.total_records,
      isLoading:  false,
    });
  }).catch(error => {
    console.log("blog", error)
  })
  }

  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blofItem.id} blogItem={blogItem} />;
    })

       return (
         <div className="blog-container">
           <BlogModal
           handleSeccessfulNewBlogsubmition={this.handleSeccessfulNewBlogsubmition}
           handleModalClose = {this.handleModalClose}
            modalIsOpen={this.state.blogModalIsOpen} />

            <div className="new-blog-link">
              <a onClick={this.handleNewBLogClick}>
                <FontAwesomeIcon icon="plus-circle" />
              </a>
            </div>

           <div className="content-container">
           {blogRecords}
           </div>
           {this.state.isloading ? (
           <div className="content-loader">
             <FontAwesomeIcon icon="spinner" spin />
           </div>) : null }
         </div>
       )
  }
}
export default Blog